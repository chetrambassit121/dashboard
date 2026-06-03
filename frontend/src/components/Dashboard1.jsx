// import { React, useState, useEffect } from 'react'
// import AxiosInstance from './Axios'
// import MyPieChart from './charts/PieChart'
// import MyChartBox from './charts/ChartBox'
// import StoreIcon from '@mui/icons-material/Store';
// import WcIcon from '@mui/icons-material/Wc';
// import MyDonutChart from './charts/DonutChart';
// import MyStackedBarChart from './charts/StackedBarCharts';
// import CategoryIcon from '@mui/icons-material/Category';

import {React, useState, useEffect} from 'react'
import AxiosInstance from './Axios'
import MyPieChart from './charts/PieChart'
import MyChartBox from './charts/ChartBox'
import StoreIcon from '@mui/icons-material/Store';
import MyDonutChart from './charts/DonutChart';
import WcIcon from '@mui/icons-material/Wc';
import MyStackedBarChart from './charts/StackedBarChart';
import CategoryIcon from '@mui/icons-material/Category';
import PublicIcon from '@mui/icons-material/Public';
import MyChartBox2 from './charts/ChartBox2';
import MyLineChart from './charts/LineChart';
import MyCombiChart from './charts/CombiChart';


const Dashboard1 = () => {

    const [myBranchData, setMyBranchData] = useState([])
    const [myGenderData, setMyGenderData] = useState([])
    const [myProductBrancheData, setMyProductBrancheData] = useState([])
    const [myCountryData, setMyCountryData] = useState([])
    console.log('myProductBrancheData: ', myProductBrancheData)


    const GetData = () => {
        AxiosInstance.get(`branchedata/`)
        .then((res) => {
            setMyBranchData(res.data)
        })
        AxiosInstance.get(`genderdata/`)
        .then((res) => {
            setMyGenderData(res.data)
        })
        AxiosInstance.get(`productbranchedata/`)
        .then((res) => {
            setMyProductBrancheData(res.data)
        } )
        AxiosInstance.get(`countrydata/`)
        .then((res) => {
            setMyCountryData(res.data)
        } )
    }

    useEffect(() => {
        GetData()
    }, [])

    const myseries = 
        [
          { dataKey: 'quantityBrancheA', label: 'Branche A', stack:"A"}, 
          { dataKey: 'quantityBrancheB', label: 'Branche B', stack:"A"}, 
          { dataKey: 'quantityBrancheC', label: 'Branche C', stack:"A"}, 
        ]
    
    const mycountryseries = 
        [
          { dataKey: 'quantityNetherlands', label: 'Netherlands'}, 
          { dataKey: 'quantityGermany', label: 'Germany'}, 
          { dataKey: 'quantityFrance', label: 'France'}, 
        ]

    const myproductbrancheseries = 
        [
          { dataKey: 'quantityBrancheA', label: 'Quantity Branche A', type: 'bar'}, 
          { dataKey: 'quantityBrancheB', label: 'Quantity Branche B', type: 'line'}, 
          { dataKey: 'quantityBrancheC', label: 'Quantity Branche C', type: 'line'}, 
        ]

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
                    centerlabel={myGenderData.reduce((sum, data) => sum + data.value,0)}/>}

                icon3 = {<CategoryIcon/>}
                title3 = {"Quantities per Productline & Branche"}
                chart3={ <MyStackedBarChart
                            dataset={myProductBrancheData}
                            XlabelName = {'productline__name'}
                            series = {myseries}

                        />}
            />

            <MyChartBox2
                 icon1 = {<PublicIcon/>}
                 title1 = {"Quantities per Month per Country"}
                 chart1={ <MyLineChart
                            mydata ={myCountryData} 
                            myxaxis={"month_name"}
                            myseries ={mycountryseries}
                             />}

                // icon2 = {<PublicIcon/>}
                // title2 = {"Quantities per Product Line per Branch"}
                // chart2={ <MyCombiChart
                //             data={myProductBrancheData}
                //             myseries = {myproductbrancheseries}
                //             xcolumn = {'productline__name'}
                            
                //         />}

            />
        
        </div>
    )
}

export default Dashboard1