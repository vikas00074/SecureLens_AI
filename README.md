# 🔐 SecureLens AI
## Real-Time Banking Document Anomaly Detection System

SecureLens AI is an AI-powered cybersecurity platform designed for detecting document forgery, tampering, and anomalies in banking and financial documents in real time.

Built for the Canara Bank SuRaksha Cyber Security Hackathon 2.0.

---

# 🚀 Problem Statement

Banks process thousands of sensitive documents daily:

- Land records
- Bank statements
- Salary slips
- Identity documents
- Legal agreements
- Financial statements

Fraudsters manipulate these documents using:
- Text editing
- Fake signatures
- Modified dates
- Altered amounts
- Forged seals/stamps
- Metadata tampering

Manual verification is slow, expensive, and error-prone.

---

# 💡 Our Solution

SecureLens AI automatically detects suspicious modifications in uploaded documents using:

✅ OCR Extraction  
✅ OpenCV-based anomaly detection  
✅ Metadata inspection  
✅ AI-based fraud scoring  
✅ Real-time risk analysis  

The system provides intelligent fraud insights to assist banking underwriting and verification teams.

---

# 🧠 Key Features

## 📄 Document Upload
Supports:
- PNG
- JPG
- JPEG

---

## 🔍 OCR Extraction
Extracts:
- Names
- Dates
- Amounts
- Addresses
- Text content

---

## ⚠️ Tampering Detection
Detects:
- Edited text regions
- Suspicious modifications
- Copy-paste artifacts
- Irregular edges
- Potential forgery attempts

---

## 📊 Fraud Risk Scoring

Example:

| Risk Score | Status |
|---|---|
| 0–40 | Low Risk |
| 41–70 | Medium Risk |
| 71–100 | High Risk |

---

## 📈 Dashboard
Displays:
- Uploaded documents
- Fraud scores
- OCR results
- Risk status

---

# 🏗️ System Architecture

```text
User Uploads Document
        ↓
Frontend Dashboard (React)
        ↓
FastAPI Backend
        ↓
AI Detection Engine
        ↓
Fraud Risk Scoring
        ↓
Results Dashboard
```

---

# 🛠️ Tech Stack

## Frontend
- React
- Vite
- Tailwind CSS
- Axios

## Backend
- FastAPI
- Python
- Uvicorn

## AI/ML
- OpenCV
- EasyOCR
- NumPy

## Database
- PostgreSQL (Future Scope)

## Deployment
- Vercel
- Render
- Docker

---

# 📁 Project Structure

```bash
securelens-ai/
│
├── frontend/
│
├── backend/
│
├── ai-engine/
│
├── docs/
│
├── docker-compose.yml
│
├── README.md
│
└── .gitignore
```

---

# ⚙️ Installation & Setup

# 1️⃣ Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/securelens-ai.git

cd securelens-ai
```

---

# 2️⃣ Frontend Setup

```bash
cd frontend

npm install
```

## Start Frontend

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

# 3️⃣ Backend Setup

```bash
cd backend

python -m venv venv
```

---

## Activate Virtual Environment

### Windows

```bash
venv\Scripts\activate
```

### Linux/Mac

```bash
source venv/bin/activate
```

---

## Install Dependencies

```bash
pip install -r requirements.txt
```

---

## Start Backend

```bash
uvicorn app.main:app --reload
```

Backend runs on:

```text
http://127.0.0.1:8000
```

---

# 🧪 API Endpoints

# GET /

Health check endpoint.

### Response

```json
{
  "message": "SecureLens AI Running"
}
```

---

# POST /upload

Upload a document for fraud detection.

## Request

Form-data:

```text
file: image/png | image/jpeg
```

---

## Response

```json
{
  "fraud_score": 45,
  "status": "MEDIUM RISK",
  "ocr_data": [
    {
      "bbox": [[0,0],[1,1]],
      "text": "Sample Text",
      "confidence": 0.98
    }
  ]
}
```

---

# 🧠 AI Workflow

## Step 1 — OCR Extraction
Extract text from uploaded documents using EasyOCR.

---

## Step 2 — Image Processing
Analyze image using OpenCV:
- Edge detection
- Region inspection
- Tampering analysis

---

## Step 3 — Fraud Scoring
Generate fraud score based on:
- OCR inconsistencies
- Suspicious regions
- Metadata anomalies

---

# 🐳 Docker Setup

## Build Containers

```bash
docker-compose build
```

---

## Start Containers

```bash
docker-compose up
```

---

# ☁️ Deployment

# Frontend Deployment

Deploy frontend using:
- Vercel

---

# Backend Deployment

Deploy backend using:
- Render
- Railway

---

# 👥 Team Structure

| Member | Responsibility |
|---|---|
| Frontend Developer | React UI & Dashboard |
| Backend Developer | APIs & Database |
| AI/ML Engineer | OCR & Fraud Detection |

---

# 🔐 Security Considerations

The platform validates:
- Invalid file uploads
- Suspicious document edits
- Forged document patterns
- Malicious file attempts

---

# 🚀 Future Improvements

- PDF support
- DOCX support
- Signature verification
- Fake stamp detection
- Metadata analysis
- Real-time notifications
- Multi-language OCR
- LLM-powered fraud explanations

---

# 📸 Demo Flow

## Genuine Document
- Upload genuine image
- Low fraud score returned

---

## Tampered Document
- Upload manipulated image
- High fraud score detected
- Suspicious regions highlighted

---

# 📊 Business Impact

SecureLens AI helps banks:
- Reduce underwriting fraud
- Speed up verification
- Improve trust
- Automate document analysis
- Detect forgery in real time

---

# 🏆 Hackathon Theme

## Theme 1 — Real-Time Anomaly Detection

Canara Bank SuRaksha Cyber Security Hackathon 2.0

---

# 📄 License

This project is developed for educational and hackathon purposes.

---

# 🙌 Acknowledgements

- Canara Bank
- HackerEarth
- OpenCV
- FastAPI
- React
- EasyOCR

---

# ⭐ Contributors

- Team SecureLens AI
- Frontend Team
- Backend Team
- AI/ML Team
