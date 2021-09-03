import headerStyle from '../styles/header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className={headerStyle.title}>
                <span>Webdev</span>News
            </h1>
            <p className={headerStyle.description}>Keep up to date</p>
        </div>
    )
}

export default Header
