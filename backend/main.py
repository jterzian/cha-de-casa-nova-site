from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import csv
import os

app = FastAPI(title="Convite Chá de Casa Nova", version="0.1.0")

# Permitir requisições do front (CORS)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # permite qualquer front
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Modelo de dados
class Confirmacao(BaseModel):
    nome: str
    rg: str

# Arquivo CSV
CSV_FILE = "presencas.csv"

# Cria o CSV se não existir
if not os.path.exists(CSV_FILE):
    with open(CSV_FILE, "w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow(["Nome", "RG"])

# Endpoint para confirmar presença
@app.post("/confirmar-presenca")
def confirmar_presenca(confirmacao: Confirmacao):
    # Escreve os dados no CSV
    with open(CSV_FILE, "a", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow([confirmacao.nome, confirmacao.rg])
    return {"status": "ok", "mensagem": "Presença confirmada com sucesso"}
