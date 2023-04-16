import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {NormativesService} from "../../services/normatives.service";
import Loader from "../../components/Loader/Loader";
import PdfViewer from "../../components/PdfViewer/PdfViewer";
import {normatives} from "../normatives/Normatives";


const NormativeItem = () => {
    const { id } = useParams();

    const [normativeItem, setNormativeItem] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            // NormativesService.getById(id).then((res) => setNormativeItem(res));
            const doc=normatives?.find((item)=>String(item.id)===id);
            setNormativeItem(doc);
        } catch (error) {
            setError(error.message);
        }
    }, []);

    {if(!normativeItem) return <Loader/>}

    return normativeItem?.url.match(/\.(jpg|jpeg|png|gif|webp|svg)$/)?(
        <div className="container pt-5 pb-5">
        <img src={`/testDocs/${normativeItem.url}`} alt=""/></div>):
        (
            <PdfViewer url={normativeItem?.url}/>
        )
};

export default NormativeItem;