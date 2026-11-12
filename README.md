# AI Banking Application

An AI-powered Banking Application built using modern cloud-native technologies including React, Node.js, MongoDB, Docker, Kubernetes, and Azure.

## Overview

This project provides a digital banking platform that allows users to:

- View account information
- Track transactions
- Receive financial recommendations
- Interact with an AI Banking Assistant
- Access personalized banking services
- Deploy the application using Docker and Kubernetes

---

## Features

### Account Management
- View account details
- Check account balance
- Manage user profile

### Transaction Management
- View transaction history
- Monitor expenses
- Track spending patterns

### AI Banking Assistant
- Chat-based banking support
- Financial guidance
- Balance and transaction queries

### Smart Recommendations
- Savings suggestions
- Credit card recommendations
- Loan eligibility suggestions
- Investment recommendations

### Cloud Native Deployment
- Docker containerization
- Kubernetes orchestration
- Azure Kubernetes Service (AKS) deployment

---

## Technology Stack

### Frontend
- React.js
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### AI Integration
- OpenAI API / Azure OpenAI

### DevOps
- Docker
- Kubernetes
- GitHub

### Cloud Platform
- Microsoft Azure
- Azure Kubernetes Service (AKS)

---

## Project Structure

```text
AI-Banking-Application
│
├── frontend
│   ├── Dockerfile
│   ├── src
│   └── package.json
│
├── backend
│   ├── Dockerfile
│   ├── routes
│   ├── models
│   ├── server.js
│   └── package.json
│
├── k8s
│   ├── mongodb-deployment.yaml
│   ├── backend-deployment.yaml
│   ├── backend-service.yaml
│   ├── frontend-deployment.yaml
│   ├── frontend-service.yaml
│   └── ingress.yaml
│
├── README.md
└── .gitignore
```

---

## Docker Installation

Build Backend Image

```bash
docker build -t banking-backend ./backend
```

Build Frontend Image

```bash
docker build -t banking-frontend ./frontend
```

Run Backend

```bash
docker run -p 5000:5000 banking-backend
```

Run Frontend

```bash
docker run -p 3000:3000 banking-frontend
```

---

## Kubernetes Deployment

Apply MongoDB Deployment

```bash
kubectl apply -f k8s/mongodb-deployment.yaml
```

Apply Backend Deployment

```bash
kubectl apply -f k8s/backend-deployment.yaml
```

Apply Frontend Deployment

```bash
kubectl apply -f k8s/frontend-deployment.yaml
```

Apply Services

```bash
kubectl apply -f k8s/
```

Verify Resources

```bash
kubectl get pods
kubectl get svc
kubectl get deployments
```

---

## Future Enhancements

- User Authentication using JWT
- Role-Based Access Control (RBAC)
- Real-Time Notifications
- Fraud Detection using Machine Learning
- AI-Powered Expense Prediction
- Azure DevOps CI/CD Pipeline
- GitHub Actions Automation

---

## Learning Outcomes

This project demonstrates:

- Full Stack Development
- REST API Development
- React Frontend Development
- MongoDB Database Integration
- AI Integration
- Docker Containerization
- Kubernetes Deployment
- Azure Cloud Services
- DevOps Practices

---

## Author

Keerthana D

AI Banking Application developed as a cloud-native banking solution to learn and implement Full Stack Development, AI Integration, Docker, Kubernetes, and Azure technologies.
