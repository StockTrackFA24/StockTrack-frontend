import {ShieldExclamationIcon} from "@heroicons/react/24/solid";

export default function PermissionDenied({text}) {
    return (
        <div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                height: '50vh',
                width: '90vw',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 'auto'
            }}>
                <div className="w-40">
                    <ShieldExclamationIcon style={{height: 200, width: 200}}/>
                </div>
                <p className="text-lg p-20">
                    {text}
                </p>

            </div>
        </div>
    )
}