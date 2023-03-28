import { axiosClassic } from '../api/interceptors';
import { getConferenciesUrl } from '../config/api.config';
//Не использован
export const ConferenciesService = {
    async getAll(SearchTerm = null) {
        return axiosClassic.get(getConferenciesUrl(''), {
            params: SearchTerm ? { SearchTerm } : {},
        }).then((res)=>{
            const conferenciesActual=[];
            const conferenciesOld=[];
            const date=Date.now();
            for (let i in res?.data) {
                if(date<Date.parse(res?.data[i]['date_start'])) {
                    conferenciesActual.push(res?.data[i]);

                }else{
                    conferenciesOld.push(res?.data[i]);
                }
            }

            // localStorage.setItem('actualConferencies', JSON.stringify(conferenciesActual));
            // localStorage.setItem('oldConferencies', JSON.stringify(conferenciesOld));
            return [conferenciesActual,conferenciesOld]
        });
    },
};