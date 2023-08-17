import React from 'react'
import LoadingSkeleton from '../../LoadingSkeleton'
import ProductTableLoader from '../../product-table-loader/ProductTableLoader'

function LoaderEarnPointDetail() {
    return (
        <>
            <div className='mb-3' style={{ backgroundColor: '#FFFFFF', padding: '16px' }}>
                <div className='d-flex mb-3' style={{ columnGap: '60px' }} >
                    <div className='d-flex' style={{ flex: '1', columnGap: '20px' }}>
                        <div style={{ flex: '1' }}>
                            <LoadingSkeleton className="" height={24} />
                        </div>
                        <div style={{ flex: '1' }}>
                            <LoadingSkeleton className="" height={24} />
                        </div>
                    </div>
                    <div className='d-flex' style={{ flex: '1', columnGap: '20px' }}>
                        <div style={{ flex: '1' }}>
                            <LoadingSkeleton className="" height={24} />
                        </div>
                        <div style={{ flex: '1' }}>
                            <LoadingSkeleton className="" height={24} />
                        </div>
                    </div>
                </div>
                <div className='d-flex mb-3' style={{ columnGap: '60px' }} >
                    <div className='d-flex' style={{ flex: '1', columnGap: '20px' }}>
                        <div style={{ flex: '1' }}>
                            <LoadingSkeleton className="" height={24} />
                        </div>
                        <div style={{ flex: '1' }}>
                            <LoadingSkeleton className="" height={24} />
                        </div>
                    </div>
                    <div className='d-flex' style={{ flex: '1', columnGap: '20px' }}>
                        <div style={{ flex: '1' }}>
                            <LoadingSkeleton className="" height={24} />
                        </div>
                        <div style={{ flex: '1' }}>
                            <LoadingSkeleton className="" height={24} />
                        </div>
                    </div>
                </div>
                <div className='d-flex mb-3' style={{ columnGap: '60px' }} >
                    <div className='d-flex' style={{ flex: '1', columnGap: '20px' }}>
                        <div style={{ flex: '1' }}>
                            <LoadingSkeleton className="" height={24} />
                        </div>
                        <div style={{ flex: '1' }}>
                            <LoadingSkeleton className="" height={24} />
                        </div>
                    </div>
                    <div className='d-flex' style={{ flex: '1', columnGap: '20px' }}>
                        <div style={{ flex: '1' }}>
                            <LoadingSkeleton className="" height={24} />
                        </div>
                        <div style={{ flex: '1' }}>
                            <LoadingSkeleton className="" height={24} />
                        </div>
                    </div>
                </div>
                <div className='d-flex mb-3' style={{ columnGap: '60px' }} >
                    <div className='d-flex' style={{ flex: '1', columnGap: '20px' }}>
                        <div style={{ flex: '1' }}>
                            <LoadingSkeleton className="" height={24} />
                        </div>
                        <div style={{ flex: '1' }}>
                            <LoadingSkeleton className="" height={24} />
                        </div>
                    </div>
                    <div className='d-flex' style={{ flex: '1', columnGap: '20px' }}>
                        <div style={{ flex: '1' }}>
                            <LoadingSkeleton className="" height={24} />
                        </div>
                        <div style={{ flex: '1' }}>
                            <LoadingSkeleton className="" height={24} />
                        </div>
                    </div>
                </div>
                <div className='d-flex mb-3' style={{ columnGap: '60px' }} >
                    <div className='d-flex' style={{ flex: '1', columnGap: '20px' }}>
                        <div style={{ flex: '1' }}>
                            <LoadingSkeleton className="" height={24} />
                        </div>
                        <div style={{ flex: '1' }}>
                            <LoadingSkeleton className="" height={24} />
                        </div>
                    </div>
                    <div className='d-flex' style={{ flex: '1', columnGap: '20px' }}>
                        <div style={{ flex: '1' }}>
                            <LoadingSkeleton className="" height={24} />
                        </div>
                        <div style={{ flex: '1' }}>
                            <LoadingSkeleton className="" height={24} />
                        </div>
                    </div>
                </div>
            </div>
            <ProductTableLoader />
        </>
    )
}

export default LoaderEarnPointDetail