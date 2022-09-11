import { useState, useEffect } from 'react';
import SdkList from '../components/SdkList';



export default function SdkView(props) {

    const [activeTab, setActiveTab] = useState("installed");
    const [sdkData, setSdkData] = useState(props.data || {});
    const [dataLoaded, setDataLoaded] = useState(props.data ? true : false)
    const [dataError, setDataError] = useState(false);

    /* This loads the sdk data from the api via fetch if it's not passed as a prop to the component */
    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/sdk")
                let data = await response.json();
                data = JSON.parse(JSON.stringify(data));
                const installed = data.installed.data.installedSdks.sort((a, b) => a.categories[0] > b.categories[0]);
                const uninstalled = data.uninstalled.data.uninstalledSdks.sort((a, b) => a.categories[0] > b.categories[0]);
                console.log(installed)
                setSdkData({
                    installed: {
                        data: installed,
                        latestUpdatedDate: data.installed.data.latestUpdatedDate
                    },
                    uninstalled: {
                        data: uninstalled,
                        latestUpdatedDate: data.uninstalled.data.latestUpdatedDate
                    }

                })
                console.log(sdkData)
                setDataLoaded(true);

            } catch (e) {
                console.error(e)
                setDataError(Error(e))
                console.log(dataError)
            }


        }

        fetchData().catch(console.error)
    }, []);

    return dataLoaded ? (
        <>
            <div className='w-1/2'>

                <div className="tabs tabs-boxed">
                    <a className={`tab ${activeTab === "installed" && " tab-active"}`} onClick={() => { setActiveTab("installed") }}>installed</a>
                    <a className={`tab ${activeTab === "uninstalled" && " tab-active"}`} onClick={() => { setActiveTab("uninstalled") }}>Uninstalled</a>

                </div>
                <div className='border-2 border-gray-400 rounded p-4'>
                    {activeTab === "installed" ?
                        <SdkList type="installed" sdks={sdkData.installed.data} latestUpdatedDate={sdkData.installed.latestUpdatedDate} />
                        : ""}
                    {activeTab === "uninstalled" ?
                        <SdkList type="Uninstalled" sdks={sdkData.uninstalled.data} latestUpdatedDate={sdkData.uninstalled.latestUpdatedDate} />

                        : ""}
                </div>
            </div>
            {dataError ?
                <div className="transition transition-opacity ease-in toast toast-top toast-center w-1/4">
                    <div className="alert alert-error text-white">
                        <div className='w-full'>
                            There was an error loading data.
                        </div>
                    </div>
                </div>
                : ""}
        </>
    ) : ("Loading")

}