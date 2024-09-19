import axios  from 'axios';

const baseURL = 'http://localhost:8080';

export const saveInvoice = async (payload) => {
    try {
        return await axios.post(`${baseURL}/invoice`, payload);
    } catch (e) {
        console.log('Error while calling addInvoice api', e.message);
        return e.response.data;
    }
}

export const getAllInvoices = async () =>{
    try{
    return axios.get(`${baseURL}/invoice`);
    } catch(e){
        console.log("Error while calling getAllInvoices api", e.message);
        return e.response.data;
    }
}

export const deleteInvoice = async(id) => {
    try{
        return await axios.delete(`${baseURL}/invoice/${id}`, id)
    } catch(e){
        console.log("Error while calling deleteInvoice api", e.message);
        return e.response.data;
    }
}