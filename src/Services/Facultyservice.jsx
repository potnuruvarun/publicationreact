import axios from "axios";

class Facultyservice {
    getalldata()
    {
        return axios.get("http://localhost:5281/api/Publish/Get");
    }

    getstudentdata()
    {
        return axios.get("http://localhost:5281/api/Publish/Studentdata");
    }
    getfacultydata()
    {
        return axios.get('http://localhost:5281/api/Publish/Facultydata');
    }
    login(input)
    {
        return axios.post("http://localhost:5281/api/Login",input);
    }
    register(input)
    {
        return axios.post("http://localhost:5281/api/Login/register",input);
    }
    reset(input){
        return axios.post("http://localhost:5281/api/Login/reset" , input );
    }

    export()
    {
        return axios.get("http://localhost:5281/api/Publish/GetExcelfile/ExportExcel");
    }
    help(input)
    {
        return axios.post("http://localhost:5281/api/Login/Sendmail",input);
    }

    // verify()
    // {

    // }
    
}
export default new  Facultyservice;