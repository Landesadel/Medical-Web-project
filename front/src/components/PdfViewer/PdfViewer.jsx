import React, {useEffect, useState} from 'react';
import { Document, Page,pdfjs  } from  'react-pdf';
import {base64} from "../../services/base64.service";
import styles from './PdfViewer.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import DownloadPdfLink from "../DownloadPdfLink/DownloadPdfLink";
import {useAuth} from "../../hooks/useAuth";

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`


// const url='Program.pdf';
// let fileBase64=null;
const left = <FontAwesomeIcon icon={faChevronLeft} />;
const right = <FontAwesomeIcon icon={faChevronRight} />;

const PdfViewer = () => {
    const {user}=useAuth();
    const [file,setFile]=useState();
    const [fileDownload,setFileDownload]=useState();
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    base64.getBase64(setFileDownload,setFile).catch()



    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }



    return  <div className={`container ${styles.back}`}>

        <Document
            file={file}
             options={{ workerSrc: "/pdf.worker.js" }}
            onLoadSuccess={onDocumentLoadSuccess}
        >
            <Page pageNumber={pageNumber}/>
        </Document>
        <div className={styles.pdfButtons}>
            <p>
                {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
            </p>
            <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
                {left}
            </button>
            <button
                type="button"
                disabled={pageNumber >= numPages}
                onClick={nextPage}
            >
                {right}
            </button>
        </div>
        {user? (
            <DownloadPdfLink url={`statute2022.pdf`} text={`Скачать файл PDF`} style={styles.link}/>
        ) : ''
        }

    </div>
};

export  default PdfViewer;