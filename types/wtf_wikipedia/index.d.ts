// Type definitions for wtf_wikipedia 7.3
// Project: https://github.com/spencermountain/wtf_wikipedia#readme
// Definitions by: My Self <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = wtf;
export as namespace wtf;

declare function wtf(wiki: string, options: any): any;

declare namespace wtf {
    const prototype: {
    };

    const version: string;

    function category(cat: string, lang: string, options: object, cb: any): Promise<object>;

    function fetch(title: string | string[], lang: string, options: object, cb: any): Promise<object>;

    function random(lang: string, options: object, cb: any): any;

    namespace category {
        const prototype: {
        };

    }

    namespace fetch {
        const prototype: {
        };

    }

    namespace random {
        const prototype: {
        };

    }

}

