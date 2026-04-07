# 🩺 Doctor Booking System - Frontend Dashboard

A modern, responsive Single Page Application (SPA) built with Angular.  
This application serves as the interactive user interface for doctors to manage their schedules and receive real-time updates.

---

## 🚀 Tech Stack

- **Framework:** Angular
- **Language:** TypeScript
- **Styling:** SCSS / Bootstrap (or TailwindCSS)
- **Real-time Communication:** @microsoft/signalr
- **Notifications:** ngx-toastr
- **HTTP Handling:** Angular HttpClient & RxJS

---

## ✨ Key Features

- 📊 Interactive Doctor Dashboard
- 🔔 Real-time Notifications using SignalR (WebSockets)
- 🔐 Secure Authentication with JWT Interceptors
- 📱 Fully Responsive (Desktop & Mobile)

---

## ⚙️ Getting Started

### 📌 Prerequisites

Make sure you have installed:

- Node.js (LTS recommended)
- Angular CLI  
  ```bash
  npm install -g @angular/cli
  ```

---

### 📥 Installation

```bash
git clone https://github.com/yourusername/doctor-booking-frontend.git
cd doctor-booking-frontend
npm install
```

---

### ⚙️ Environment Setup

Edit the file:

```
src/environments/environment.ts
```

```ts
export const environment = {
  production: false,
  apiUrl: 'https://localhost:5001/api',
  hubUrl: 'https://localhost:5001/notificationHub'
};
```

---

### ▶️ Run Development Server

```bash
ng serve
```

Then open your browser at:

```
http://localhost:4200/
```

---

### 🏗️ Build for Production

```bash
ng build --configuration production
```

---

## 📡 Real-time Notifications (SignalR)

This app uses SignalR to receive live updates such as:

- New appointments
- Status changes
- Alerts for doctors

Make sure the backend SignalR Hub is running at:

```
https://localhost:5001/notificationHub
```

---

## 🔐 Authentication

- JWT-based authentication
- Token automatically attached via HTTP Interceptor
- Protected routes using Angular Guards

---
