function ErrorBanner({message}){
    let errorMessage = message || "에러입니당";

    return(
        <div data-testid="error-banner" style={{backgroundColor:"red", color:"white"}}>
            {errorMessage}
        </div>
    );
}

export default ErrorBanner;