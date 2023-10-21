import Academy from '../../components/Academy/Academy'
import './Details.scss'
const Details = () => {
    return (
        <div className='detail'>
            <div className="detail__top">
                <Academy />
                <button className='detail__top-button'>Skip</button>
            </div>
            <div className="detail__slider">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.2502 17.6483C15.4752 17.4233 15.6016 17.1181 15.6016 16.7999C15.6016 16.4817 15.4752 16.1765 15.2502 15.9515L11.2986 11.9999L15.2502 8.0483C15.4688 7.82198 15.5898 7.51886 15.587 7.20422C15.5843 6.88959 15.4581 6.58861 15.2356 6.36612C15.0131 6.14363 14.7121 6.01743 14.3975 6.01469C14.0829 6.01196 13.7797 6.13291 13.5534 6.3515L8.75342 11.1515C8.52845 11.3765 8.40207 11.6817 8.40207 11.9999C8.40207 12.3181 8.52845 12.6233 8.75342 12.8483L13.5534 17.6483C13.7785 17.8733 14.0836 17.9996 14.4018 17.9996C14.72 17.9996 15.0252 17.8733 15.2502 17.6483Z" fill="white" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.74978 6.3517C8.52482 6.57673 8.39844 6.8819 8.39844 7.2001C8.39844 7.5183 8.52482 7.82346 8.74978 8.0485L12.7014 12.0001L8.74978 15.9517C8.53119 16.178 8.41024 16.4811 8.41297 16.7958C8.41571 17.1104 8.54191 17.4114 8.7644 17.6339C8.98689 17.8564 9.28786 17.9826 9.6025 17.9853C9.91714 17.988 10.2203 17.8671 10.4466 17.6485L15.2466 12.8485C15.4715 12.6235 15.5979 12.3183 15.5979 12.0001C15.5979 11.6819 15.4715 11.3767 15.2466 11.1517L10.4466 6.3517C10.2215 6.12673 9.91638 6.00035 9.59818 6.00035C9.27999 6.00035 8.97482 6.12673 8.74978 6.3517Z" fill="white" />
                </svg>
            </div>
            <div className="detail__body">
                <div className="detail__body-first">
                    <h2 className='detail__body-first-title'>Introduction</h2>
                    <div className="detail__body-first-bottom"></div>
                </div>
                <div className="detail__body-second">
                    <h2 className='detail__body-second-title'>Introduction</h2>
                    <div className="detail__body-second-bottom"></div>
                </div>
                <div className="detail__body-third">
                    <h2 className='detail__body-third-title'>Introduction</h2>
                    <div className="detail__body-third-bottom"></div>
                </div>
            </div>
        </div>
    )
}

export default Details
