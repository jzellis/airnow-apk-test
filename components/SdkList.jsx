import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);


export default function SdkView(props) {

    return (
        <div id={props.type} className='grid justify-items-stretch'>
            <h2 className='justify-self-start w-full font-bold'><span className=' text-lg capitalize'>{props.type} SDKs</span>
                <div className='justify-self-end count float-right clear-none text-xl'>{props.sdks.length}</div>
            </h2>

            <div className='last-updated border-b-2 border-gray-400 py-4 mb-8'>Latest Update:
                {dayjs(props.latestUpdatedDate).format("MMM DD, YYYY")}

            </div>
            <ul className='sdk-list grid grid-cols-2 gap-4 mb-8'>
                {props.sdks.map((sdk, i) => {
                    return (
                        <li className="grid" key={i}>
                            <div className='underline'>
                                {sdk.categories[0]}
                            </div>
                            <div className='sdk-name text-sm'>{sdk.name} {dayjs(sdk.lastSeenDate).fromNow()}</div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )

}