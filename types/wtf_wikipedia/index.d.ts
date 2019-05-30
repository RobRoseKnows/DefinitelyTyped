// Type definitions for wtf_wikipedia 7.3
// Project: https://github.com/spencermountain/wtf_wikipedia#readme
// Definitions by: My Self <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = wtf;
export as namespace wtf;

declare function wtf(wiki: string, options: any): any;

declare module wtf {

    export const version: string;

    export function category(cat: string, lang: string, options: object, cb: any): Promise<object>;

    export function fetch(title: string | string[], lang: string, options: object, cb: any): Promise<object>;

    export function random(lang: string, options: object, cb: any): any;

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

    class Document {

        title(str: string | undefined): string;

        isRedirect(): boolean;

        redirectTo(): any;

        function isDisambiguation(): boolean;

    function categories(clue: number): Category;

    function categories(): Category[];

    function sections(clue: number | string): object;

    function sections(): object[];

    function paragraphs(n: number): object;

    function paragraphs(): object[];

    function paragraph(n: number | undefined): object;

    function sentences(n: number): object;

    function sentences(): object[];

    function images(clue: number): object;

    function images(): object[];

    function links(clue: string | undefined | null): object[];

    function links(clue: number): object;

    function interwiki(clue: string | undefined | null): object[];

    function interwiki(clue: number): object;

    function lists(clue: string | undefined | null): object[];

    function lists(clue: number): object;

    function tables(clue: string | undefined | null): object[];

    function tables(clue: number): object;

    function templates(clue: string | undefined | null): object[];

    function templates(clue: number): object;

    function references(clue: string | undefined | null): object[];

    function references(clue: number): object;

    function coordinates(clue: string | undefined | null): object[];

    function coordinates(clue: number): object;

}

namespace Category {
    const prototype: {
    };
}

namespace Coordinate {
    const prototype: {
    };
}

namespace Section {
    const prototype: {
    };
}

namespace Infobox {
    const prototype: {
    };
}

namespace Table {
    const prototype: {
    };
}

namespace Reference {
    const prototype: {
    };
}

namespace Template {
    const prototype: {
    };
}

namespace Paragraph {
    const prototype: {
    };
}

namespace Image {
    const prototype: {
    };
}

namespace List {
    const prototype: {
    };
}

namespace Sentence {
    const prototype: {
    };
}
}

