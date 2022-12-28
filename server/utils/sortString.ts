function sortString(first: string, second: string) : 1 | 0 | -1 {
    if (first < second) return -1;
    if (first === second) return 0;
    else return 1;
}

export default sortString;