function Alert(props) {
    return (
        <>
            {props.alert !== null &&
                <h3 className={`alert-${props.alert.type}`}> {props.alert.msg}</h3>
            }
        </>
    )
}

export default Alert;