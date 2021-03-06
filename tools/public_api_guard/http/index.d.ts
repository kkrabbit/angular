/** @experimental */
export declare class BaseRequestOptions extends RequestOptions {
    constructor();
}

/** @experimental */
export declare class BaseResponseOptions extends ResponseOptions {
    constructor();
}

/** @experimental */
export declare class BrowserXhr {
    constructor();
    build(): any;
}

/** @experimental */
export declare abstract class Connection {
    readyState: ReadyState;
    request: Request;
    response: any;
}

/** @experimental */
export declare abstract class ConnectionBackend {
    abstract createConnection(request: any): Connection;
}

/** @experimental */
export declare class CookieXSRFStrategy implements XSRFStrategy {
    constructor(_cookieName?: string, _headerName?: string);
    configureRequest(req: Request): void;
}

/** @experimental */
export declare class Headers {
    constructor(headers?: Headers | {
        [key: string]: any;
    });
    append(name: string, value: string): void;
    delete(name: string): void;
    entries(): void;
    forEach(fn: (values: string[], name: string, headers: Map<string, string[]>) => void): void;
    get(header: string): string;
    getAll(header: string): string[];
    has(header: string): boolean;
    keys(): string[];
    set(header: string, value: string | string[]): void;
    toJSON(): {
        [key: string]: any;
    };
    values(): string[][];
    static fromResponseHeaderString(headersString: string): Headers;
}

/** @experimental */
export declare class Http {
    protected _backend: ConnectionBackend;
    protected _defaultOptions: RequestOptions;
    constructor(_backend: ConnectionBackend, _defaultOptions: RequestOptions);
    delete(url: string, options?: RequestOptionsArgs): Observable<Response>;
    get(url: string, options?: RequestOptionsArgs): Observable<Response>;
    head(url: string, options?: RequestOptionsArgs): Observable<Response>;
    patch(url: string, body: any, options?: RequestOptionsArgs): Observable<Response>;
    post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response>;
    put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response>;
    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response>;
}

/** @deprecated */
export declare const HTTP_BINDINGS: any[];

/** @experimental */
export declare const HTTP_PROVIDERS: any[];

/** @experimental */
export declare function httpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions): Http;

/** @deprecated */
export declare const JSON_BINDINGS: any[];

/** @experimental */
export declare class Jsonp extends Http {
    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions);
    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response>;
}

/** @experimental */
export declare const JSONP_PROVIDERS: any[];

/** @experimental */
export declare abstract class JSONPBackend extends ConnectionBackend {
}

/** @experimental */
export declare abstract class JSONPConnection implements Connection {
    readyState: ReadyState;
    request: Request;
    response: Observable<Response>;
    abstract finished(data?: any): void;
}

/** @experimental */
export declare class QueryEncoder {
    encodeKey(k: string): string;
    encodeValue(v: string): string;
}

/** @experimental */
export declare enum ReadyState {
    Unsent = 0,
    Open = 1,
    HeadersReceived = 2,
    Loading = 3,
    Done = 4,
    Cancelled = 5,
}

/** @experimental */
export declare class Request extends Body {
    headers: Headers;
    method: RequestMethod;
    responseType: ResponseContentType;
    url: string;
    withCredentials: boolean;
    constructor(requestOptions: RequestArgs);
    detectContentType(): ContentType;
    detectContentTypeFromBody(): ContentType;
    getBody(): any;
}

/** @experimental */
export declare enum RequestMethod {
    Get = 0,
    Post = 1,
    Put = 2,
    Delete = 3,
    Options = 4,
    Head = 5,
    Patch = 6,
}

/** @experimental */
export declare class RequestOptions {
    body: any;
    headers: Headers;
    method: RequestMethod | string;
    responseType: ResponseContentType;
    search: URLSearchParams;
    url: string;
    withCredentials: boolean;
    constructor({method, headers, body, url, search, withCredentials, responseType}?: RequestOptionsArgs);
    merge(options?: RequestOptionsArgs): RequestOptions;
}

/** @experimental */
export interface RequestOptionsArgs {
    body?: any;
    headers?: Headers;
    method?: string | RequestMethod;
    responseType?: ResponseContentType;
    search?: string | URLSearchParams;
    url?: string;
    withCredentials?: boolean;
}

/** @experimental */
export declare class Response extends Body {
    bytesLoaded: number;
    headers: Headers;
    ok: boolean;
    status: number;
    statusText: string;
    totalBytes: number;
    type: ResponseType;
    url: string;
    constructor(responseOptions: ResponseOptions);
    toString(): string;
}

/** @experimental */
export declare enum ResponseContentType {
    Text = 0,
    Json = 1,
    ArrayBuffer = 2,
    Blob = 3,
}

/** @experimental */
export declare class ResponseOptions {
    body: string | Object | ArrayBuffer | Blob;
    headers: Headers;
    status: number;
    url: string;
    constructor({body, status, headers, statusText, type, url}?: ResponseOptionsArgs);
    merge(options?: ResponseOptionsArgs): ResponseOptions;
}

/** @experimental */
export declare type ResponseOptionsArgs = {
    body?: string | Object | FormData | ArrayBuffer | Blob;
    status?: number;
    statusText?: string;
    headers?: Headers;
    type?: ResponseType;
    url?: string;
};

/** @experimental */
export declare enum ResponseType {
    Basic = 0,
    Cors = 1,
    Default = 2,
    Error = 3,
    Opaque = 4,
}

/** @experimental */
export declare class URLSearchParams {
    paramsMap: Map<string, string[]>;
    rawParams: string;
    constructor(rawParams?: string, queryEncoder?: QueryEncoder);
    append(param: string, val: string): void;
    appendAll(searchParams: URLSearchParams): void;
    clone(): URLSearchParams;
    delete(param: string): void;
    get(param: string): string;
    getAll(param: string): string[];
    has(param: string): boolean;
    replaceAll(searchParams: URLSearchParams): void;
    set(param: string, val: string): void;
    setAll(searchParams: URLSearchParams): void;
    toString(): string;
}

/** @experimental */
export declare class XHRBackend implements ConnectionBackend {
    constructor(_browserXHR: BrowserXhr, _baseResponseOptions: ResponseOptions, _xsrfStrategy: XSRFStrategy);
    createConnection(request: Request): XHRConnection;
}

/** @experimental */
export declare class XHRConnection implements Connection {
    readyState: ReadyState;
    request: Request;
    response: Observable<Response>;
    constructor(req: Request, browserXHR: BrowserXhr, baseResponseOptions?: ResponseOptions);
    setDetectedContentType(req: any, _xhr: any): void;
}

/** @experimental */
export declare abstract class XSRFStrategy {
    abstract configureRequest(req: Request): void;
}
