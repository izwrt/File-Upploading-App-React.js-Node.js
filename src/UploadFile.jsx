import axios from 'axios';
import React, {useState} from 'react';

const statuses = {
    IDLE: 'idle',
    UPLOADING: 'uploading',
    COMPLETED: 'completed',
    FAILED: 'failed'
  };

const UploadFile = () => {
    const [file, setFile] = useState(null);
    const [status, setStatus] = useState(statuses.IDLE); 
    const [progressBar, setProgressBar] = useState(null);

    function fileHandle(e) {
        e.preventDefault();
        setFile(e.target.files[0])
    }

    async function HandleFileupload(e) {
        e.preventDefault();
        if(!file) return;
        setProgressBar(0);
        setStatus(statuses.UPLOADING);

        const formData = new FormData();
        formData.append('file',file);

        try {
            await axios.post("https://httpbin.org/post", formData, {
                header: {
                    'Content-Type': 'multipart/form-data'
                },
                onUploadProgress: (ProgressEvent) => {
                    const progress = ProgressEvent.total ? Math.rount((ProgressEvent.loaded * 100) / ProgressEvent.total) : 0;
                    setProgressBar(progress);
                }
            });

            setStatus(statuses.COMPLETED);
            setProgressBar(100);
        } catch {
            setStatus(statuses.FAILED)
            setProgressBar(0);
        };
    }

     console.log(file)

    return(
        <div className="text-xl space-y-10 p-10">
            Upload a file... here
            <input onChange={fileHandle} type='file'/>
            <br/>
            {file && (
                <div className='flex flex-col space-y-4 border border-red-300 p-10 w-[400px]'>
                    <span>
                        {file.name}
                    </span>
                    <span>
                        {(file.size / 1024).toFixed(2)} MB
                    </span>
                    <span>
                        {file.type}
                    </span>
                    {file && status !== 'uploading' && <button
                    onClick={HandleFileupload} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-[200px]">Upload</button>}

                    {file && status === 'completed' && (
                        <div className='text-green-600'>Uploaded Sucessfully</div>
                    )}

                    {file && status === 'failed' &&(
                        <div className='text-red-500'>Upload failed :(</div>
                    )}
                </div>
            )}
           
        </div>
    )
}

export default UploadFile;