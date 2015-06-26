declare module sky {
    interface skySvgProvider {
        setPath(value: string): string;
        $get(): skySvg;
    }
    interface skySvg {
        getPath(): string;
        getSvg(name: string): string;
    }
}
