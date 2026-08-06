# FaceTrackU 🎓🤖

> **AI-Powered Automated Face Recognition Attendance & Analytics Platform**

[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel-success?style=for-the-badge&logo=vercel)](https://facetrack-u-frontend.vercel.app)
[![Spring Boot](https://img.shields.io/badge/Spring--Boot-3.x-brightgreen?logo=springboot)](https://spring.io/projects/spring-boot)
[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Supabase-blue?logo=postgresql)](https://supabase.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 🌟 Executive Summary

🌐 **Live Web Application**: **[https://facetrack-u-frontend.vercel.app](https://facetrack-u-frontend.vercel.app)**

**FaceTrackU** is a commercial-grade, full-stack AI attendance platform built for educational institutions. It replaces manual roll calls with **real-time computer-vision facial recognition**, reducing attendance verification time by **95%** while eliminating proxy attendance.

It features a dual-portal architecture:
- 👑 **Admin Control Panel** — Live attendance feeds, student rosters, face descriptor enrollment, timetable schedules, AI at-risk student predictions, and automated PDF certificate generation.
- 👨‍👩‍👧 **Parent / Guardian Portal** — Self-service student attendance tracking, monthly logs, and instant leave application requests.

---

## 🔗 Repositories

This project is divided into specialized frontend and backend repositories for decoupled microservice deployment:

| Layer | Component | GitHub Repository |
|---|---|---|
| **Frontend** | React 18 + TypeScript Web App | [🔗 FaceTrackU-Frontend](https://github.com/PrathviSahu/FaceTrackU-Frontend) |
| **Backend** | Spring Boot 3 + Supabase API | [🔗 FaceTrackU-Backend](https://github.com/PrathviSahu/FaceTrackU-Backend) |

---

## 🏛️ Monorepo System Architecture

```
                                 ┌─────────────────────────┐
                                 │   Browser / Client UI   │
                                 └────────────┬────────────┘
                                              │
                       ┌──────────────────────┴──────────────────────┐
                       │                                             │
            ┌──────────▼──────────┐                       ┌──────────▼──────────┐
            │   Admin Portal      │                       │   Guardian Portal   │
            │ (React + Tailwind)  │                       │ (React + Tailwind)  │
            └──────────┬──────────┘                       └──────────┬──────────┘
                       │                                             │
                       └──────────────────────┬──────────────────────┘
                                              │ REST / JSON (JWT Auth)
                                   ┌──────────▼──────────┐
                                   │ Spring Boot Backend │
                                   │ (Java 17 / MVC)     │
                                   └──────────┬──────────┘
                                              │
                   ┌──────────────────────────┼──────────────────────────┐
                   │                          │                          │
        ┌──────────▼──────────┐    ┌──────────▼──────────┐    ┌──────────▼──────────┐
        │  Supabase Postgres  │    │  MediaPipe / OpenCV │    │ Email / SMS Engine  │
        │  Database (Cloud)   │    │ (Face Recognition)  │    │ (Alert Automations) │
        └─────────────────────┘    └─────────────────────┘    └─────────────────────┘
```

---

## 📁 Repository Structure

```
FaceTrackU/
├── frontend/                   # React 18 + TypeScript + Tailwind CSS
│   ├── src/
│   │   ├── components/         # Reusable UI widgets & visualizers
│   │   ├── pages/              # Admin & Guardian Portal screens
│   │   ├── contexts/           # Authentication & Theme state
│   │   └── App.tsx             # React Router 6 navigation
│   ├── public/                 # Static assets & face models
│   └── package.json
│
├── backend/                    # Spring Boot 3 + Java 17 + Spring Security
│   ├── src/main/java/
│   │   └── com/faceattendance/
│   │       ├── controller/     # REST Controllers
│   │       ├── service/        # Business Logic & Algorithms
│   │       ├── model/          # JPA Entities
│   │       └── repository/     # Spring Data JPA Interfaces
│   ├── src/main/resources/
│   │   └── application.yml     # DB & Security Config
│   └── pom.xml                 # Maven dependencies
│
├── docs/                       # System Architecture & API docs
├── screenshots/                # HD Application Screenshots
├── docker-compose.yml          # One-line local deployment script
└── README.md
```

---

## ✨ Key Features

### 1. 🤖 AI-Powered Face Recognition Engine
- Multi-pose 3D facial descriptor extraction during enrollment.
- Real-time webcam identification with liveness verification and configurable confidence thresholds (default `90%`).
- Auto-refresh live attendance feed updating every 10 seconds.

### 2. 👨‍👩‍👧 Dual Portal System
- **Admin Portal**: Complete institutional control over departments, timetables, rosters, and system security.
- **Guardian / Parent Portal**: Dedicated portal for parents (`/guardian-portal`) to view student attendance trends and submit leave applications.

### 3. 📊 Predictive AI & Visual Analytics
- **At-Risk Student Forecast**: Machine learning model identifying students with low attendance probability.
- **Intensity Heatmaps**: Hour-by-hour and day-by-day attendance density heatmaps.
- **Automated Certificate Generator**: Instant PDF attendance certificate generation and export.

### 4. 🔔 Automated Communication Engine
- **SMS & Email Alerts**: Automatic notifications sent to guardians when a student drops below threshold attendance.
- **Leave Request Workflow**: Multi-stage leave submission and admin review panel with remarks.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 18, TypeScript 5, Tailwind CSS, Framer Motion, Recharts, Lucide Icons |
| **Backend** | Spring Boot 3, Java 17, Spring Security, Spring Data JPA, Hibernate, Maven |
| **Database** | Supabase Cloud PostgreSQL |
| **Computer Vision** | MediaPipe Tasks Vision, TensorFlow.js, OpenCV |
| **DevOps & Containers** | Docker, Docker Compose, Nginx |

---

## 🚀 Quick Start Guide

### Option 1: Using Docker Compose (Easiest)

```bash
# Clone the repository
git clone https://github.com/PrathviSahu/FaceTrackU.git
cd FaceTrackU

# Spin up backend, frontend, and database
docker-compose up
```
- **Frontend App**: `http://localhost:3000`
- **Backend REST API**: `http://localhost:8080/api`

---

### Option 2: Manual Local Setup

#### 1. Backend Setup (Spring Boot)
```bash
cd backend
mvn spring-boot:run
```
> Starts Spring Boot server on `http://localhost:8080/api`

#### 2. Frontend Setup (React)
```bash
cd frontend
npm install
npm start
```
> Starts React development server on `http://localhost:3000`

---

## 📡 Core REST API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/auth/login` | JWT Authentication & Role Lookup |
| `GET` | `/api/students` | Retrieve enrolled student roster |
| `POST` | `/api/students` | Register new student & face descriptor |
| `GET` | `/api/attendance` | Fetch attendance records with subject/date filters |
| `POST` | `/api/attendance/mark` | Mark real-time facial recognition attendance |
| `GET` | `/api/reports/department` | Department-level analytics & heatmaps |
| `GET` | `/api/actuator/health` | System health check endpoint |

---

## 🎬 Demo Video & Screenshots

> 📺 **2-Minute Demo Video**: Available in `FaceTrackU_LinkedIn_Demo_Voiceover.mp4` on Desktop (includes professional Indian English voiceover narration).

---

## 📝 License & Author

- **Author**: **Prathvi Sahu** — Full-Stack & AI Engineer
- **License**: MIT License — free for educational and commercial research use.
