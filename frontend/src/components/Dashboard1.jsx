import { React, useState, useEffect } from 'react'
import AxiosInstance from './Axios'
import MyPieChart from './charts/PieChart'
import MyChartBox from './charts/ChartBox'
import StoreIcon from '@mui/icons-material/Store';
import WcIcon from '@mui/icons-material/Wc';
import MyDonutChart from './charts/DonutChart';


const Dashboard1 = () => {

    const [myBranchData, setMyBranchData] = useState([])
    console.log('myBranchData: ', myBranchData)
    const [myGenderData, setMyGenderData] = useState([])
    console.log('myGenderData: ', myGenderData)

    const GetData = async () => {
        AxiosInstance.get(`branchedata/`)
        .then((res) => {
            setMyBranchData(res.data)
        })
        AxiosInstance.get(`genderdata/`)
        .then((res) => {
            setMyGenderData(res.data)
        })
    }

    useEffect(() => {
        GetData()
    }, [])

    return(
        <div>
            <MyChartBox
                icon1 = {<StoreIcon />}
                title1 = {'Quantity per branches'}
                chart1 = {<MyPieChart 
                        data={myBranchData}
                        myData={myBranchData}/>}
                
                icon2 = {<WcIcon />}
                title2 = {'Quantity per gender'}
                chart2 = {<MyDonutChart 
                    data={myGenderData}
                    centerlabel={myGenderData.reduce((sum, data) => sum + data.value,0)}
                />}
            />
        </div>
    )
}

export default Dashboard1