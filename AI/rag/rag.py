import faiss
import numpy as np
from transformers import AutoTokenizer, AutoModel, GPTNeoForCausalLM

# 加载模型
embedder = AutoModel.from_pretrained("dmis-lab/biobert-base-cased-v1.1")
tokenizer = AutoTokenizer.from_pretrained("dmis-lab/biobert-base-cased-v1.1")
generator = GPTNeoForCausalLM.from_pretrained("EleutherAI/gpt-neo-1.3B")

# 构建知识库
docs = ["文献1: 疫苗副作用包括发热...", "文献2: 血栓风险..."]
embeddings = embedder(**tokenizer(docs, return_tensors="pt", padding=True)).last_hidden_state.mean(dim=1).detach().numpy()
index = faiss.IndexFlatL2(768)
index.add(embeddings)

# RAG流程
def rag(query):
    query_emb = embedder(**tokenizer([query], return_tensors="pt")).last_hidden_state.mean(dim=1).detach().numpy()
    _, indices = index.search(query_emb, k=2)
    retrieved = [docs[i] for i in indices[0]]
    prompt = f"问题: {query}\n资料: {retrieved}"
    inputs = tokenizer(prompt, return_tensors="pt")
    output = generator.generate(**inputs, max_length=100)
    return tokenizer.decode(output[0], skip_special_tokens=True)

# 测试
print(rag("新冠疫苗有哪些副作用？"))