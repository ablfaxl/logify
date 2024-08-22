type LogLevel = "debug" | "info" | "warn" | "error";
export declare class Logger<T = unknown> {
    private level;
    constructor(level?: LogLevel);
    private getPersianDate;
    private log;
    debug(message: string, meta?: T): void;
    info(message: string, meta?: T): void;
    warn(message: string, meta?: T): void;
    error(message: string, meta?: T): void;
}
declare const serverLogger: Logger<unknown>;
export default serverLogger;
//# sourceMappingURL=client-logger.d.ts.map