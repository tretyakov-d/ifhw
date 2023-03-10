export function formatNumber(x: number, delimiter = ' ') {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, delimiter);
}
