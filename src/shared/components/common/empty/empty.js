import styles from './styles.module.scss';

const Empty = (props) => {
    const {title="Chưa có binhd luận nào"}=props;
    return (
        <div className={`d-center d-flex flex-column justify-content-center align-items-center ${styles.empty}`}>
            {/* icon */}
            <span style={{ marginTop: 10 }}>{title}</span>
        </div>
    );
};
export default Empty;
