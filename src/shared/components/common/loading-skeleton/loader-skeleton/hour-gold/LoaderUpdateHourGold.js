import React from 'react'
import LoadingSkeleton from '../../LoadingSkeleton'

function LoaderUpdateHourGold() {
    return (
        <>
            <div className='mb-3' style={{ backgroundColor: '#FFFFFF', padding: '20px' }}>
                <div className='d-flex mb-5' style={{ columnGap: '40px' }} >
                    <div className='d-flex' style={{ flex: '1', columnGap: '40px' }}>
                        <div style={{ flex: '1' }}>
                            <LoadingSkeleton className="" height={35} />
                        </div>
                        <div style={{ flex: '1' }}>
                            <LoadingSkeleton className="" height={35} />
                        </div>
                    </div>
                    <div className='d-flex' style={{ flex: '1', columnGap: '40px' }}>
                        <div style={{ flex: '1' }}>
                            <LoadingSkeleton className="" height={35} />
                        </div>
                        <div style={{ flex: '1' }}>
                            <LoadingSkeleton className="" height={35} />
                        </div>
                    </div>
                </div>
                <div className='d-flex mb-2' style={{ columnGap: '40px' }} >
                    <div className='d-flex' style={{ flex: '1', columnGap: '40px' }}>
                        <div style={{ flex: '1' }}>
                            <LoadingSkeleton className="" height={35} />
                        </div>
                        <div style={{ flex: '1' }}>
                            <LoadingSkeleton className="" height={35} />
                        </div>
                    </div>
                    <div className='d-flex' style={{ flex: '1', columnGap: '40px' }}>
                        <div style={{ flex: '1' }}>
                            <LoadingSkeleton className="" height={35} />
                        </div>
                        <div style={{ flex: '1' }}>
                            <LoadingSkeleton className="" height={35} />
                        </div>
                    </div>
                </div>
                <div className='mb-3' style={{}}>
                    <LoadingSkeleton className="" height={150} width={150} />
                </div>
                <div className='d-flex mb-5' style={{ columnGap: '40px' }} >
                    <div className='d-flex' style={{ flex: '1', columnGap: '40px' }}>
                        <div style={{ flex: '1' }}>
                            <LoadingSkeleton className="" height={35} />
                        </div>
                        <div style={{ flex: '1' }}>
                            <LoadingSkeleton className="" height={35} />
                        </div>
                    </div>
                    <div className='d-flex' style={{ flex: '1', columnGap: '40px' }}>
                        <div style={{ flex: '1' }}>
                            <LoadingSkeleton className="" height={35} />
                        </div>
                        <div style={{ flex: '1' }}>
                            <LoadingSkeleton className="" height={35} />
                        </div>
                    </div>
                </div>
                <div className='d-flex mb-4' style={{ columnGap: '40px' }} >
                    <div className='d-flex' style={{ flex: '1', columnGap: '40px' }}>
                        <div style={{ flex: '1' }}>
                            <LoadingSkeleton className="" height={35} />
                        </div>
                        <div style={{ flex: '1' }}>
                            <LoadingSkeleton className="" height={35} />
                        </div>
                    </div>
                    <div className='d-flex' style={{ flex: '1', columnGap: '40px' }}>
                        <div style={{ flex: '1' }}>
                            <LoadingSkeleton className="" height={35} />
                        </div>
                        <div style={{ flex: '1' }}>
                            <LoadingSkeleton className="" height={35} />
                        </div>
                    </div>
                </div>
                <div className='mb-3' style={{}}>
                    <LoadingSkeleton className="" height={300}/>
                </div>
            </div>
        </>
    )
}

export default LoaderUpdateHourGold