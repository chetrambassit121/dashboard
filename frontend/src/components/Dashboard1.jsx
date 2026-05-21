import { React, useState, useEffect } from 'react'
import AxiosInstance from './Axios'

const Dashboard1 = () => {

    const [myData, setMyData] = useState([])
    console.log('myData: ', myData)

    const GetData = async () => {
        AxiosInstance.get(`supermarketsales/`)
        .then((res) => {
            setMyData(res.data)
        })
    }

    useEffect(() => {
        GetData()
    }, [])

    return(
        <div>This is the Dashboard1</div>
    )
}

export default Dashboard1