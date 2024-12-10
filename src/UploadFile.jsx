import axios from 'axios';
import React, { useState } from 'react';

const statuses = {
    IDLE: 'idle',
    UPLOADING: 'uploading',
    COMPLETED: 'completed',
    FAILED: 'failed'
  };

const UploadFile = () => {
    const [files, setFiles] = useState([]);
    const [status, setStatus] = useState({}); 
    const [progressBar, setProgressBar] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
 

    function fileHandle(e) {
        e.preventDefault();
        const {files} = e.target;
        setFiles(Array.from(files))
    }

    async function HandleFileupload(e) {
        e.preventDefault();
        if (files.length === 0) return;
        for (const file of files) {
            setProgressBar(0);

            setStatus(prevState => ({
                ...prevState,
                [file.name]: {status: statuses.UPLOADING}
            }));

            setSelectedFile(file.name)
            const formData = new FormData();
            formData.append('file',file);
            try {
            await axios.post("https://httpbin.org/post", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                onUploadProgress: (ProgressEvent) => {
                    const progress = ProgressEvent.total ? Math.round((ProgressEvent.loaded * 100) / ProgressEvent.total) : 0;
                    setProgressBar(progress);
                }
            });

            setStatus(prevState => ({
                ...prevState,
                [file.name]: {status: statuses.COMPLETED}
            }));

            setProgressBar(100);
        } catch {
            setStatus(prevState => ({
                ...prevState,
                [file.name]: {status: statuses.FAILED}
            }));

            setProgressBar(0);
        };
    }
    }

    return(
        <div className="text-xl p-10 flex flex-col">
            <p className='mb-4'>UPLOAD FILES</p>
            <input onChange={fileHandle} type='file' multiple/>
            <br/>
            {files.length > 0 && (
                <div className='border border-red-300 px-10 pb-10 space-y-10'>
                {files.map((file,index) => {
                    const fileStatus = status[file.name]?.status || statuses.IDLE;
                    return(<div key={index} className='flex flex-col mt-10 w-full'>
                    <span>
                        {file.name}
                    </span>
                    <span>
                        {(file.size / 1024).toFixed(2)} MB
                    </span>
                    <span>
                        {file.type}
                    </span>
                    <span>
                    {fileStatus === statuses.COMPLETED && (
                                <div className="text-green-600">Uploaded Successfully</div>
                            )}

                            {fileStatus === statuses.FAILED && (
                                <div className="text-red-500">Upload failed :(</div>
                            )}
                    </span>
                    
                    {file.name === selectedFile && (
                        <>
                            {status[file.name].status === statuses.UPLOADING && (
                                <div className="space-y-2">
                                    <div className="h-2.5 w-full rounded-2xl bg-gray-200">
                                        <div
                                            className="h-2.5 w-full rounded-2xl bg-blue-600 transition-all duration-300"
                                            style={{ width: `${progressBar}%` }}
                                        ></div>
                                    </div>
                                    <p>{progressBar}%</p>
                                </div>
                            )}
                        </>
                    )}

                </div>);
                })
                }
                {files.length > 0 && status !== statuses.UPLOADING && <button
                    onClick={HandleFileupload} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-[200px]">Upload</button>}
                </div>
            )}
           
        </div>
    )
}

export default UploadFile;

//optimize the code and reduce the state