# File Uploading Application

This application demonstrates both single and multiple file uploading using **React.js** on the frontend and **Node.js** with **Express** (and [Multer](https://github.com/expressjs/multer)) on the backend.

## Features

- **Single File Upload:** Upload one file at a time.
- **Multiple File Upload:** Upload several files in one go.
- **Progress Indicator:** Visual feedback during uploads.
- **Basic File Validation:** Ensure files meet specified criteria.

## Technologies Used

- **Frontend:** React.js, Axios, HTML, CSS
- **Backend:** Node.js, Express, Multer
1. **Clone the Repository:**

   ```bash
   git clone https://github.com/izwrt/File-Upploading-App-React.js-Node.js.git
   cd File-Upploading-App-React.js-Node.js
   ```
2. **Setup the Backend:**

Navigate to the backend directory and install dependencies:

```bash
cd backend
npm install
```
3.**Setup the Frontend**:

Navigate to the frontend directory and install dependencies:

```bash
cd ../frontend
npm install
```

How It Works
Single File Upload:
Navigate to the single file upload section on the frontend, select a file, and click "Upload". The file is sent to the backend for processing and storage.

Multiple File Upload:
Use the multiple file upload section to select several files at once and upload them concurrently.

Folder Structure
php
Copy
Edit
File-Upploading-App-React.js-Node.js/
│
├── backend/                # Node.js backend code (Express & Multer)
│   ├── uploads/            # Folder for storing uploaded files
│   ├── server.js           # Main server file
│   └── package.json        # Backend dependencies and scripts
│
├── frontend/               # React frontend code
│   ├── src/                # React components and assets
│   ├── public/             # Public static files
│   └── package.json        # Frontend dependencies and scripts
│
└── README.md               # This documentation
