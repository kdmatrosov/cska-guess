export function secondsToMmSs(secs: number): string {
    // Calculate minutes and seconds
    const minutes = Math.floor(secs / 60); // Get the whole minutes
    const seconds = Math.floor(secs % 60); // Get the remaining seconds

    // Use padStart to ensure two digits for both minutes and seconds
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}
