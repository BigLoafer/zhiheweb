// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import http from '../../http';

const getMainInfo= async (req, res) => {
   const {data} = await http.get('http://c.sit.kuaiyufenqi.com/zhclientface/v3/mainPage');
    console.log(data);
    res.statusCode = 200
    res.json(data);
}

export default getMainInfo;

