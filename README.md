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

# MIT License

Copyright (c) 2025 Ishwar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
