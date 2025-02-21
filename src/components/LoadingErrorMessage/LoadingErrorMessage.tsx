const LoadingErrorMessage: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-64">
            <p className="text-2xl font-bold text-gray-400 text-center">There was a problem getting the data. Refresh the page to try again (F5) or come back later.</p>
        </div>
    );
}

export { LoadingErrorMessage };