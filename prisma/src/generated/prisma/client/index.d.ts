
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Country
 * 
 */
export type Country = $Result.DefaultSelection<Prisma.$CountryPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Size
 * 
 */
export type Size = $Result.DefaultSelection<Prisma.$SizePayload>
/**
 * Model Conversion
 * 
 */
export type Conversion = $Result.DefaultSelection<Prisma.$ConversionPayload>
/**
 * Model FavoriteSize
 * 
 */
export type FavoriteSize = $Result.DefaultSelection<Prisma.$FavoriteSizePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  CUSTOMER: 'CUSTOMER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  UNISEX: 'UNISEX'
};

export type Gender = (typeof Gender)[keyof typeof Gender]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Customers
 * const customers = await prisma.customer.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Customers
   * const customers = await prisma.customer.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.country`: Exposes CRUD operations for the **Country** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Countries
    * const countries = await prisma.country.findMany()
    * ```
    */
  get country(): Prisma.CountryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.size`: Exposes CRUD operations for the **Size** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sizes
    * const sizes = await prisma.size.findMany()
    * ```
    */
  get size(): Prisma.SizeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conversion`: Exposes CRUD operations for the **Conversion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conversions
    * const conversions = await prisma.conversion.findMany()
    * ```
    */
  get conversion(): Prisma.ConversionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favoriteSize`: Exposes CRUD operations for the **FavoriteSize** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FavoriteSizes
    * const favoriteSizes = await prisma.favoriteSize.findMany()
    * ```
    */
  get favoriteSize(): Prisma.FavoriteSizeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Customer: 'Customer',
    Country: 'Country',
    Category: 'Category',
    Size: 'Size',
    Conversion: 'Conversion',
    FavoriteSize: 'FavoriteSize'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "customer" | "country" | "category" | "size" | "conversion" | "favoriteSize"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Country: {
        payload: Prisma.$CountryPayload<ExtArgs>
        fields: Prisma.CountryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CountryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CountryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          findFirst: {
            args: Prisma.CountryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CountryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          findMany: {
            args: Prisma.CountryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          create: {
            args: Prisma.CountryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          createMany: {
            args: Prisma.CountryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CountryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          delete: {
            args: Prisma.CountryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          update: {
            args: Prisma.CountryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          deleteMany: {
            args: Prisma.CountryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CountryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CountryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          upsert: {
            args: Prisma.CountryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          aggregate: {
            args: Prisma.CountryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCountry>
          }
          groupBy: {
            args: Prisma.CountryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CountryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CountryCountArgs<ExtArgs>
            result: $Utils.Optional<CountryCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Size: {
        payload: Prisma.$SizePayload<ExtArgs>
        fields: Prisma.SizeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SizeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SizePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SizeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SizePayload>
          }
          findFirst: {
            args: Prisma.SizeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SizePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SizeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SizePayload>
          }
          findMany: {
            args: Prisma.SizeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SizePayload>[]
          }
          create: {
            args: Prisma.SizeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SizePayload>
          }
          createMany: {
            args: Prisma.SizeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SizeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SizePayload>[]
          }
          delete: {
            args: Prisma.SizeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SizePayload>
          }
          update: {
            args: Prisma.SizeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SizePayload>
          }
          deleteMany: {
            args: Prisma.SizeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SizeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SizeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SizePayload>[]
          }
          upsert: {
            args: Prisma.SizeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SizePayload>
          }
          aggregate: {
            args: Prisma.SizeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSize>
          }
          groupBy: {
            args: Prisma.SizeGroupByArgs<ExtArgs>
            result: $Utils.Optional<SizeGroupByOutputType>[]
          }
          count: {
            args: Prisma.SizeCountArgs<ExtArgs>
            result: $Utils.Optional<SizeCountAggregateOutputType> | number
          }
        }
      }
      Conversion: {
        payload: Prisma.$ConversionPayload<ExtArgs>
        fields: Prisma.ConversionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConversionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConversionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversionPayload>
          }
          findFirst: {
            args: Prisma.ConversionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConversionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversionPayload>
          }
          findMany: {
            args: Prisma.ConversionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversionPayload>[]
          }
          create: {
            args: Prisma.ConversionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversionPayload>
          }
          createMany: {
            args: Prisma.ConversionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConversionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversionPayload>[]
          }
          delete: {
            args: Prisma.ConversionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversionPayload>
          }
          update: {
            args: Prisma.ConversionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversionPayload>
          }
          deleteMany: {
            args: Prisma.ConversionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConversionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConversionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversionPayload>[]
          }
          upsert: {
            args: Prisma.ConversionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversionPayload>
          }
          aggregate: {
            args: Prisma.ConversionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConversion>
          }
          groupBy: {
            args: Prisma.ConversionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConversionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConversionCountArgs<ExtArgs>
            result: $Utils.Optional<ConversionCountAggregateOutputType> | number
          }
        }
      }
      FavoriteSize: {
        payload: Prisma.$FavoriteSizePayload<ExtArgs>
        fields: Prisma.FavoriteSizeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavoriteSizeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteSizePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoriteSizeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteSizePayload>
          }
          findFirst: {
            args: Prisma.FavoriteSizeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteSizePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoriteSizeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteSizePayload>
          }
          findMany: {
            args: Prisma.FavoriteSizeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteSizePayload>[]
          }
          create: {
            args: Prisma.FavoriteSizeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteSizePayload>
          }
          createMany: {
            args: Prisma.FavoriteSizeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FavoriteSizeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteSizePayload>[]
          }
          delete: {
            args: Prisma.FavoriteSizeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteSizePayload>
          }
          update: {
            args: Prisma.FavoriteSizeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteSizePayload>
          }
          deleteMany: {
            args: Prisma.FavoriteSizeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavoriteSizeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FavoriteSizeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteSizePayload>[]
          }
          upsert: {
            args: Prisma.FavoriteSizeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteSizePayload>
          }
          aggregate: {
            args: Prisma.FavoriteSizeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavoriteSize>
          }
          groupBy: {
            args: Prisma.FavoriteSizeGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavoriteSizeGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavoriteSizeCountArgs<ExtArgs>
            result: $Utils.Optional<FavoriteSizeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    customer?: CustomerOmit
    country?: CountryOmit
    category?: CategoryOmit
    size?: SizeOmit
    conversion?: ConversionOmit
    favoriteSize?: FavoriteSizeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    conversions: number
    favoriteSizes: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversions?: boolean | CustomerCountOutputTypeCountConversionsArgs
    favoriteSizes?: boolean | CustomerCountOutputTypeCountFavoriteSizesArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountConversionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversionWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountFavoriteSizesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteSizeWhereInput
  }


  /**
   * Count Type CountryCountOutputType
   */

  export type CountryCountOutputType = {
    sizes: number
    favoriteSizes: number
  }

  export type CountryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sizes?: boolean | CountryCountOutputTypeCountSizesArgs
    favoriteSizes?: boolean | CountryCountOutputTypeCountFavoriteSizesArgs
  }

  // Custom InputTypes
  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryCountOutputType
     */
    select?: CountryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeCountSizesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SizeWhereInput
  }

  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeCountFavoriteSizesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteSizeWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    sizes: number
    favoriteSizes: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sizes?: boolean | CategoryCountOutputTypeCountSizesArgs
    favoriteSizes?: boolean | CategoryCountOutputTypeCountFavoriteSizesArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountSizesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SizeWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountFavoriteSizesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteSizeWhereInput
  }


  /**
   * Count Type SizeCountOutputType
   */

  export type SizeCountOutputType = {
    favoriteSizes: number
    fromConversions: number
    toConversions: number
  }

  export type SizeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favoriteSizes?: boolean | SizeCountOutputTypeCountFavoriteSizesArgs
    fromConversions?: boolean | SizeCountOutputTypeCountFromConversionsArgs
    toConversions?: boolean | SizeCountOutputTypeCountToConversionsArgs
  }

  // Custom InputTypes
  /**
   * SizeCountOutputType without action
   */
  export type SizeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SizeCountOutputType
     */
    select?: SizeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SizeCountOutputType without action
   */
  export type SizeCountOutputTypeCountFavoriteSizesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteSizeWhereInput
  }

  /**
   * SizeCountOutputType without action
   */
  export type SizeCountOutputTypeCountFromConversionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversionWhereInput
  }

  /**
   * SizeCountOutputType without action
   */
  export type SizeCountOutputTypeCountToConversionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    id: number | null
  }

  export type CustomerSumAggregateOutputType = {
    id: number | null
  }

  export type CustomerMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    image: string | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    image: string | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    email: number
    name: number
    image: number
    role: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    id?: true
  }

  export type CustomerSumAggregateInputType = {
    id?: true
  }

  export type CustomerMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    image?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    image?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    image?: true
    role?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: number
    email: string
    name: string | null
    image: string | null
    role: $Enums.Role[]
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    image?: boolean
    role?: boolean
    conversions?: boolean | Customer$conversionsArgs<ExtArgs>
    favoriteSizes?: boolean | Customer$favoriteSizesArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    image?: boolean
    role?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    image?: boolean
    role?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    image?: boolean
    role?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "image" | "role", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversions?: boolean | Customer$conversionsArgs<ExtArgs>
    favoriteSizes?: boolean | Customer$favoriteSizesArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      conversions: Prisma.$ConversionPayload<ExtArgs>[]
      favoriteSizes: Prisma.$FavoriteSizePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string | null
      image: string | null
      role: $Enums.Role[]
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conversions<T extends Customer$conversionsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$conversionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favoriteSizes<T extends Customer$favoriteSizesArgs<ExtArgs> = {}>(args?: Subset<T, Customer$favoriteSizesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteSizePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'Int'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly image: FieldRef<"Customer", 'String'>
    readonly role: FieldRef<"Customer", 'Role[]'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.conversions
   */
  export type Customer$conversionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversion
     */
    select?: ConversionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversion
     */
    omit?: ConversionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionInclude<ExtArgs> | null
    where?: ConversionWhereInput
    orderBy?: ConversionOrderByWithRelationInput | ConversionOrderByWithRelationInput[]
    cursor?: ConversionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversionScalarFieldEnum | ConversionScalarFieldEnum[]
  }

  /**
   * Customer.favoriteSizes
   */
  export type Customer$favoriteSizesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteSize
     */
    select?: FavoriteSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteSize
     */
    omit?: FavoriteSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteSizeInclude<ExtArgs> | null
    where?: FavoriteSizeWhereInput
    orderBy?: FavoriteSizeOrderByWithRelationInput | FavoriteSizeOrderByWithRelationInput[]
    cursor?: FavoriteSizeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteSizeScalarFieldEnum | FavoriteSizeScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Country
   */

  export type AggregateCountry = {
    _count: CountryCountAggregateOutputType | null
    _avg: CountryAvgAggregateOutputType | null
    _sum: CountrySumAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  export type CountryAvgAggregateOutputType = {
    id: number | null
  }

  export type CountrySumAggregateOutputType = {
    id: number | null
  }

  export type CountryMinAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
  }

  export type CountryMaxAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
  }

  export type CountryCountAggregateOutputType = {
    id: number
    code: number
    name: number
    _all: number
  }


  export type CountryAvgAggregateInputType = {
    id?: true
  }

  export type CountrySumAggregateInputType = {
    id?: true
  }

  export type CountryMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
  }

  export type CountryMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
  }

  export type CountryCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    _all?: true
  }

  export type CountryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Country to aggregate.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Countries
    **/
    _count?: true | CountryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CountryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CountrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountryMaxAggregateInputType
  }

  export type GetCountryAggregateType<T extends CountryAggregateArgs> = {
        [P in keyof T & keyof AggregateCountry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountry[P]>
      : GetScalarType<T[P], AggregateCountry[P]>
  }




  export type CountryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CountryWhereInput
    orderBy?: CountryOrderByWithAggregationInput | CountryOrderByWithAggregationInput[]
    by: CountryScalarFieldEnum[] | CountryScalarFieldEnum
    having?: CountryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountryCountAggregateInputType | true
    _avg?: CountryAvgAggregateInputType
    _sum?: CountrySumAggregateInputType
    _min?: CountryMinAggregateInputType
    _max?: CountryMaxAggregateInputType
  }

  export type CountryGroupByOutputType = {
    id: number
    code: string
    name: string
    _count: CountryCountAggregateOutputType | null
    _avg: CountryAvgAggregateOutputType | null
    _sum: CountrySumAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  type GetCountryGroupByPayload<T extends CountryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CountryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountryGroupByOutputType[P]>
            : GetScalarType<T[P], CountryGroupByOutputType[P]>
        }
      >
    >


  export type CountrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    sizes?: boolean | Country$sizesArgs<ExtArgs>
    favoriteSizes?: boolean | Country$favoriteSizesArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["country"]>

  export type CountrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
  }, ExtArgs["result"]["country"]>

  export type CountrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
  }, ExtArgs["result"]["country"]>

  export type CountrySelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
  }

  export type CountryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name", ExtArgs["result"]["country"]>
  export type CountryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sizes?: boolean | Country$sizesArgs<ExtArgs>
    favoriteSizes?: boolean | Country$favoriteSizesArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CountryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CountryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CountryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Country"
    objects: {
      sizes: Prisma.$SizePayload<ExtArgs>[]
      favoriteSizes: Prisma.$FavoriteSizePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      name: string
    }, ExtArgs["result"]["country"]>
    composites: {}
  }

  type CountryGetPayload<S extends boolean | null | undefined | CountryDefaultArgs> = $Result.GetResult<Prisma.$CountryPayload, S>

  type CountryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CountryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CountryCountAggregateInputType | true
    }

  export interface CountryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Country'], meta: { name: 'Country' } }
    /**
     * Find zero or one Country that matches the filter.
     * @param {CountryFindUniqueArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CountryFindUniqueArgs>(args: SelectSubset<T, CountryFindUniqueArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Country that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CountryFindUniqueOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CountryFindUniqueOrThrowArgs>(args: SelectSubset<T, CountryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Country that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CountryFindFirstArgs>(args?: SelectSubset<T, CountryFindFirstArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Country that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CountryFindFirstOrThrowArgs>(args?: SelectSubset<T, CountryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Countries
     * const countries = await prisma.country.findMany()
     * 
     * // Get first 10 Countries
     * const countries = await prisma.country.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const countryWithIdOnly = await prisma.country.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CountryFindManyArgs>(args?: SelectSubset<T, CountryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Country.
     * @param {CountryCreateArgs} args - Arguments to create a Country.
     * @example
     * // Create one Country
     * const Country = await prisma.country.create({
     *   data: {
     *     // ... data to create a Country
     *   }
     * })
     * 
     */
    create<T extends CountryCreateArgs>(args: SelectSubset<T, CountryCreateArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Countries.
     * @param {CountryCreateManyArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const country = await prisma.country.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CountryCreateManyArgs>(args?: SelectSubset<T, CountryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Countries and returns the data saved in the database.
     * @param {CountryCreateManyAndReturnArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const country = await prisma.country.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Countries and only return the `id`
     * const countryWithIdOnly = await prisma.country.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CountryCreateManyAndReturnArgs>(args?: SelectSubset<T, CountryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Country.
     * @param {CountryDeleteArgs} args - Arguments to delete one Country.
     * @example
     * // Delete one Country
     * const Country = await prisma.country.delete({
     *   where: {
     *     // ... filter to delete one Country
     *   }
     * })
     * 
     */
    delete<T extends CountryDeleteArgs>(args: SelectSubset<T, CountryDeleteArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Country.
     * @param {CountryUpdateArgs} args - Arguments to update one Country.
     * @example
     * // Update one Country
     * const country = await prisma.country.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CountryUpdateArgs>(args: SelectSubset<T, CountryUpdateArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Countries.
     * @param {CountryDeleteManyArgs} args - Arguments to filter Countries to delete.
     * @example
     * // Delete a few Countries
     * const { count } = await prisma.country.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CountryDeleteManyArgs>(args?: SelectSubset<T, CountryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CountryUpdateManyArgs>(args: SelectSubset<T, CountryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries and returns the data updated in the database.
     * @param {CountryUpdateManyAndReturnArgs} args - Arguments to update many Countries.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Countries and only return the `id`
     * const countryWithIdOnly = await prisma.country.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CountryUpdateManyAndReturnArgs>(args: SelectSubset<T, CountryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Country.
     * @param {CountryUpsertArgs} args - Arguments to update or create a Country.
     * @example
     * // Update or create a Country
     * const country = await prisma.country.upsert({
     *   create: {
     *     // ... data to create a Country
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Country we want to update
     *   }
     * })
     */
    upsert<T extends CountryUpsertArgs>(args: SelectSubset<T, CountryUpsertArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryCountArgs} args - Arguments to filter Countries to count.
     * @example
     * // Count the number of Countries
     * const count = await prisma.country.count({
     *   where: {
     *     // ... the filter for the Countries we want to count
     *   }
     * })
    **/
    count<T extends CountryCountArgs>(
      args?: Subset<T, CountryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CountryAggregateArgs>(args: Subset<T, CountryAggregateArgs>): Prisma.PrismaPromise<GetCountryAggregateType<T>>

    /**
     * Group by Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CountryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CountryGroupByArgs['orderBy'] }
        : { orderBy?: CountryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CountryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Country model
   */
  readonly fields: CountryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Country.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CountryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sizes<T extends Country$sizesArgs<ExtArgs> = {}>(args?: Subset<T, Country$sizesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favoriteSizes<T extends Country$favoriteSizesArgs<ExtArgs> = {}>(args?: Subset<T, Country$favoriteSizesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteSizePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Country model
   */
  interface CountryFieldRefs {
    readonly id: FieldRef<"Country", 'Int'>
    readonly code: FieldRef<"Country", 'String'>
    readonly name: FieldRef<"Country", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Country findUnique
   */
  export type CountryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country findUniqueOrThrow
   */
  export type CountryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country findFirst
   */
  export type CountryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country findFirstOrThrow
   */
  export type CountryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country findMany
   */
  export type CountryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Countries to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country create
   */
  export type CountryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to create a Country.
     */
    data: XOR<CountryCreateInput, CountryUncheckedCreateInput>
  }

  /**
   * Country createMany
   */
  export type CountryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Countries.
     */
    data: CountryCreateManyInput | CountryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Country createManyAndReturn
   */
  export type CountryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * The data used to create many Countries.
     */
    data: CountryCreateManyInput | CountryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Country update
   */
  export type CountryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to update a Country.
     */
    data: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
    /**
     * Choose, which Country to update.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country updateMany
   */
  export type CountryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Countries.
     */
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyInput>
    /**
     * Filter which Countries to update
     */
    where?: CountryWhereInput
    /**
     * Limit how many Countries to update.
     */
    limit?: number
  }

  /**
   * Country updateManyAndReturn
   */
  export type CountryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * The data used to update Countries.
     */
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyInput>
    /**
     * Filter which Countries to update
     */
    where?: CountryWhereInput
    /**
     * Limit how many Countries to update.
     */
    limit?: number
  }

  /**
   * Country upsert
   */
  export type CountryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The filter to search for the Country to update in case it exists.
     */
    where: CountryWhereUniqueInput
    /**
     * In case the Country found by the `where` argument doesn't exist, create a new Country with this data.
     */
    create: XOR<CountryCreateInput, CountryUncheckedCreateInput>
    /**
     * In case the Country was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
  }

  /**
   * Country delete
   */
  export type CountryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter which Country to delete.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country deleteMany
   */
  export type CountryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Countries to delete
     */
    where?: CountryWhereInput
    /**
     * Limit how many Countries to delete.
     */
    limit?: number
  }

  /**
   * Country.sizes
   */
  export type Country$sizesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Size
     */
    omit?: SizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SizeInclude<ExtArgs> | null
    where?: SizeWhereInput
    orderBy?: SizeOrderByWithRelationInput | SizeOrderByWithRelationInput[]
    cursor?: SizeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SizeScalarFieldEnum | SizeScalarFieldEnum[]
  }

  /**
   * Country.favoriteSizes
   */
  export type Country$favoriteSizesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteSize
     */
    select?: FavoriteSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteSize
     */
    omit?: FavoriteSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteSizeInclude<ExtArgs> | null
    where?: FavoriteSizeWhereInput
    orderBy?: FavoriteSizeOrderByWithRelationInput | FavoriteSizeOrderByWithRelationInput[]
    cursor?: FavoriteSizeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteSizeScalarFieldEnum | FavoriteSizeScalarFieldEnum[]
  }

  /**
   * Country without action
   */
  export type CountryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    type: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    type: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    type: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    type?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    type?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    type?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    type: string
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    sizes?: boolean | Category$sizesArgs<ExtArgs>
    favoriteSizes?: boolean | Category$favoriteSizesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    type?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sizes?: boolean | Category$sizesArgs<ExtArgs>
    favoriteSizes?: boolean | Category$favoriteSizesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      sizes: Prisma.$SizePayload<ExtArgs>[]
      favoriteSizes: Prisma.$FavoriteSizePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sizes<T extends Category$sizesArgs<ExtArgs> = {}>(args?: Subset<T, Category$sizesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favoriteSizes<T extends Category$favoriteSizesArgs<ExtArgs> = {}>(args?: Subset<T, Category$favoriteSizesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteSizePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly type: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.sizes
   */
  export type Category$sizesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Size
     */
    omit?: SizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SizeInclude<ExtArgs> | null
    where?: SizeWhereInput
    orderBy?: SizeOrderByWithRelationInput | SizeOrderByWithRelationInput[]
    cursor?: SizeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SizeScalarFieldEnum | SizeScalarFieldEnum[]
  }

  /**
   * Category.favoriteSizes
   */
  export type Category$favoriteSizesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteSize
     */
    select?: FavoriteSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteSize
     */
    omit?: FavoriteSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteSizeInclude<ExtArgs> | null
    where?: FavoriteSizeWhereInput
    orderBy?: FavoriteSizeOrderByWithRelationInput | FavoriteSizeOrderByWithRelationInput[]
    cursor?: FavoriteSizeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteSizeScalarFieldEnum | FavoriteSizeScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Size
   */

  export type AggregateSize = {
    _count: SizeCountAggregateOutputType | null
    _avg: SizeAvgAggregateOutputType | null
    _sum: SizeSumAggregateOutputType | null
    _min: SizeMinAggregateOutputType | null
    _max: SizeMaxAggregateOutputType | null
  }

  export type SizeAvgAggregateOutputType = {
    id: number | null
    category_id: number | null
    country_id: number | null
  }

  export type SizeSumAggregateOutputType = {
    id: number | null
    category_id: number | null
    country_id: number | null
  }

  export type SizeMinAggregateOutputType = {
    id: number | null
    category_id: number | null
    country_id: number | null
    size_label: string | null
  }

  export type SizeMaxAggregateOutputType = {
    id: number | null
    category_id: number | null
    country_id: number | null
    size_label: string | null
  }

  export type SizeCountAggregateOutputType = {
    id: number
    category_id: number
    country_id: number
    size_label: number
    _all: number
  }


  export type SizeAvgAggregateInputType = {
    id?: true
    category_id?: true
    country_id?: true
  }

  export type SizeSumAggregateInputType = {
    id?: true
    category_id?: true
    country_id?: true
  }

  export type SizeMinAggregateInputType = {
    id?: true
    category_id?: true
    country_id?: true
    size_label?: true
  }

  export type SizeMaxAggregateInputType = {
    id?: true
    category_id?: true
    country_id?: true
    size_label?: true
  }

  export type SizeCountAggregateInputType = {
    id?: true
    category_id?: true
    country_id?: true
    size_label?: true
    _all?: true
  }

  export type SizeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Size to aggregate.
     */
    where?: SizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sizes to fetch.
     */
    orderBy?: SizeOrderByWithRelationInput | SizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sizes
    **/
    _count?: true | SizeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SizeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SizeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SizeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SizeMaxAggregateInputType
  }

  export type GetSizeAggregateType<T extends SizeAggregateArgs> = {
        [P in keyof T & keyof AggregateSize]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSize[P]>
      : GetScalarType<T[P], AggregateSize[P]>
  }




  export type SizeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SizeWhereInput
    orderBy?: SizeOrderByWithAggregationInput | SizeOrderByWithAggregationInput[]
    by: SizeScalarFieldEnum[] | SizeScalarFieldEnum
    having?: SizeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SizeCountAggregateInputType | true
    _avg?: SizeAvgAggregateInputType
    _sum?: SizeSumAggregateInputType
    _min?: SizeMinAggregateInputType
    _max?: SizeMaxAggregateInputType
  }

  export type SizeGroupByOutputType = {
    id: number
    category_id: number
    country_id: number
    size_label: string
    _count: SizeCountAggregateOutputType | null
    _avg: SizeAvgAggregateOutputType | null
    _sum: SizeSumAggregateOutputType | null
    _min: SizeMinAggregateOutputType | null
    _max: SizeMaxAggregateOutputType | null
  }

  type GetSizeGroupByPayload<T extends SizeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SizeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SizeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SizeGroupByOutputType[P]>
            : GetScalarType<T[P], SizeGroupByOutputType[P]>
        }
      >
    >


  export type SizeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category_id?: boolean
    country_id?: boolean
    size_label?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    country?: boolean | CountryDefaultArgs<ExtArgs>
    favoriteSizes?: boolean | Size$favoriteSizesArgs<ExtArgs>
    fromConversions?: boolean | Size$fromConversionsArgs<ExtArgs>
    toConversions?: boolean | Size$toConversionsArgs<ExtArgs>
    _count?: boolean | SizeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["size"]>

  export type SizeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category_id?: boolean
    country_id?: boolean
    size_label?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    country?: boolean | CountryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["size"]>

  export type SizeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category_id?: boolean
    country_id?: boolean
    size_label?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    country?: boolean | CountryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["size"]>

  export type SizeSelectScalar = {
    id?: boolean
    category_id?: boolean
    country_id?: boolean
    size_label?: boolean
  }

  export type SizeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "category_id" | "country_id" | "size_label", ExtArgs["result"]["size"]>
  export type SizeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    country?: boolean | CountryDefaultArgs<ExtArgs>
    favoriteSizes?: boolean | Size$favoriteSizesArgs<ExtArgs>
    fromConversions?: boolean | Size$fromConversionsArgs<ExtArgs>
    toConversions?: boolean | Size$toConversionsArgs<ExtArgs>
    _count?: boolean | SizeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SizeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    country?: boolean | CountryDefaultArgs<ExtArgs>
  }
  export type SizeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    country?: boolean | CountryDefaultArgs<ExtArgs>
  }

  export type $SizePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Size"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      country: Prisma.$CountryPayload<ExtArgs>
      favoriteSizes: Prisma.$FavoriteSizePayload<ExtArgs>[]
      fromConversions: Prisma.$ConversionPayload<ExtArgs>[]
      toConversions: Prisma.$ConversionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      category_id: number
      country_id: number
      size_label: string
    }, ExtArgs["result"]["size"]>
    composites: {}
  }

  type SizeGetPayload<S extends boolean | null | undefined | SizeDefaultArgs> = $Result.GetResult<Prisma.$SizePayload, S>

  type SizeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SizeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SizeCountAggregateInputType | true
    }

  export interface SizeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Size'], meta: { name: 'Size' } }
    /**
     * Find zero or one Size that matches the filter.
     * @param {SizeFindUniqueArgs} args - Arguments to find a Size
     * @example
     * // Get one Size
     * const size = await prisma.size.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SizeFindUniqueArgs>(args: SelectSubset<T, SizeFindUniqueArgs<ExtArgs>>): Prisma__SizeClient<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Size that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SizeFindUniqueOrThrowArgs} args - Arguments to find a Size
     * @example
     * // Get one Size
     * const size = await prisma.size.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SizeFindUniqueOrThrowArgs>(args: SelectSubset<T, SizeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SizeClient<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Size that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizeFindFirstArgs} args - Arguments to find a Size
     * @example
     * // Get one Size
     * const size = await prisma.size.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SizeFindFirstArgs>(args?: SelectSubset<T, SizeFindFirstArgs<ExtArgs>>): Prisma__SizeClient<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Size that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizeFindFirstOrThrowArgs} args - Arguments to find a Size
     * @example
     * // Get one Size
     * const size = await prisma.size.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SizeFindFirstOrThrowArgs>(args?: SelectSubset<T, SizeFindFirstOrThrowArgs<ExtArgs>>): Prisma__SizeClient<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sizes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sizes
     * const sizes = await prisma.size.findMany()
     * 
     * // Get first 10 Sizes
     * const sizes = await prisma.size.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sizeWithIdOnly = await prisma.size.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SizeFindManyArgs>(args?: SelectSubset<T, SizeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Size.
     * @param {SizeCreateArgs} args - Arguments to create a Size.
     * @example
     * // Create one Size
     * const Size = await prisma.size.create({
     *   data: {
     *     // ... data to create a Size
     *   }
     * })
     * 
     */
    create<T extends SizeCreateArgs>(args: SelectSubset<T, SizeCreateArgs<ExtArgs>>): Prisma__SizeClient<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sizes.
     * @param {SizeCreateManyArgs} args - Arguments to create many Sizes.
     * @example
     * // Create many Sizes
     * const size = await prisma.size.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SizeCreateManyArgs>(args?: SelectSubset<T, SizeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sizes and returns the data saved in the database.
     * @param {SizeCreateManyAndReturnArgs} args - Arguments to create many Sizes.
     * @example
     * // Create many Sizes
     * const size = await prisma.size.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sizes and only return the `id`
     * const sizeWithIdOnly = await prisma.size.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SizeCreateManyAndReturnArgs>(args?: SelectSubset<T, SizeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Size.
     * @param {SizeDeleteArgs} args - Arguments to delete one Size.
     * @example
     * // Delete one Size
     * const Size = await prisma.size.delete({
     *   where: {
     *     // ... filter to delete one Size
     *   }
     * })
     * 
     */
    delete<T extends SizeDeleteArgs>(args: SelectSubset<T, SizeDeleteArgs<ExtArgs>>): Prisma__SizeClient<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Size.
     * @param {SizeUpdateArgs} args - Arguments to update one Size.
     * @example
     * // Update one Size
     * const size = await prisma.size.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SizeUpdateArgs>(args: SelectSubset<T, SizeUpdateArgs<ExtArgs>>): Prisma__SizeClient<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sizes.
     * @param {SizeDeleteManyArgs} args - Arguments to filter Sizes to delete.
     * @example
     * // Delete a few Sizes
     * const { count } = await prisma.size.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SizeDeleteManyArgs>(args?: SelectSubset<T, SizeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sizes
     * const size = await prisma.size.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SizeUpdateManyArgs>(args: SelectSubset<T, SizeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sizes and returns the data updated in the database.
     * @param {SizeUpdateManyAndReturnArgs} args - Arguments to update many Sizes.
     * @example
     * // Update many Sizes
     * const size = await prisma.size.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sizes and only return the `id`
     * const sizeWithIdOnly = await prisma.size.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SizeUpdateManyAndReturnArgs>(args: SelectSubset<T, SizeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Size.
     * @param {SizeUpsertArgs} args - Arguments to update or create a Size.
     * @example
     * // Update or create a Size
     * const size = await prisma.size.upsert({
     *   create: {
     *     // ... data to create a Size
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Size we want to update
     *   }
     * })
     */
    upsert<T extends SizeUpsertArgs>(args: SelectSubset<T, SizeUpsertArgs<ExtArgs>>): Prisma__SizeClient<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizeCountArgs} args - Arguments to filter Sizes to count.
     * @example
     * // Count the number of Sizes
     * const count = await prisma.size.count({
     *   where: {
     *     // ... the filter for the Sizes we want to count
     *   }
     * })
    **/
    count<T extends SizeCountArgs>(
      args?: Subset<T, SizeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SizeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Size.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SizeAggregateArgs>(args: Subset<T, SizeAggregateArgs>): Prisma.PrismaPromise<GetSizeAggregateType<T>>

    /**
     * Group by Size.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SizeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SizeGroupByArgs['orderBy'] }
        : { orderBy?: SizeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SizeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSizeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Size model
   */
  readonly fields: SizeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Size.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SizeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    country<T extends CountryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CountryDefaultArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    favoriteSizes<T extends Size$favoriteSizesArgs<ExtArgs> = {}>(args?: Subset<T, Size$favoriteSizesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteSizePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fromConversions<T extends Size$fromConversionsArgs<ExtArgs> = {}>(args?: Subset<T, Size$fromConversionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    toConversions<T extends Size$toConversionsArgs<ExtArgs> = {}>(args?: Subset<T, Size$toConversionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Size model
   */
  interface SizeFieldRefs {
    readonly id: FieldRef<"Size", 'Int'>
    readonly category_id: FieldRef<"Size", 'Int'>
    readonly country_id: FieldRef<"Size", 'Int'>
    readonly size_label: FieldRef<"Size", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Size findUnique
   */
  export type SizeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Size
     */
    omit?: SizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SizeInclude<ExtArgs> | null
    /**
     * Filter, which Size to fetch.
     */
    where: SizeWhereUniqueInput
  }

  /**
   * Size findUniqueOrThrow
   */
  export type SizeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Size
     */
    omit?: SizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SizeInclude<ExtArgs> | null
    /**
     * Filter, which Size to fetch.
     */
    where: SizeWhereUniqueInput
  }

  /**
   * Size findFirst
   */
  export type SizeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Size
     */
    omit?: SizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SizeInclude<ExtArgs> | null
    /**
     * Filter, which Size to fetch.
     */
    where?: SizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sizes to fetch.
     */
    orderBy?: SizeOrderByWithRelationInput | SizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sizes.
     */
    cursor?: SizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sizes.
     */
    distinct?: SizeScalarFieldEnum | SizeScalarFieldEnum[]
  }

  /**
   * Size findFirstOrThrow
   */
  export type SizeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Size
     */
    omit?: SizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SizeInclude<ExtArgs> | null
    /**
     * Filter, which Size to fetch.
     */
    where?: SizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sizes to fetch.
     */
    orderBy?: SizeOrderByWithRelationInput | SizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sizes.
     */
    cursor?: SizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sizes.
     */
    distinct?: SizeScalarFieldEnum | SizeScalarFieldEnum[]
  }

  /**
   * Size findMany
   */
  export type SizeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Size
     */
    omit?: SizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SizeInclude<ExtArgs> | null
    /**
     * Filter, which Sizes to fetch.
     */
    where?: SizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sizes to fetch.
     */
    orderBy?: SizeOrderByWithRelationInput | SizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sizes.
     */
    cursor?: SizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sizes.
     */
    skip?: number
    distinct?: SizeScalarFieldEnum | SizeScalarFieldEnum[]
  }

  /**
   * Size create
   */
  export type SizeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Size
     */
    omit?: SizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SizeInclude<ExtArgs> | null
    /**
     * The data needed to create a Size.
     */
    data: XOR<SizeCreateInput, SizeUncheckedCreateInput>
  }

  /**
   * Size createMany
   */
  export type SizeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sizes.
     */
    data: SizeCreateManyInput | SizeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Size createManyAndReturn
   */
  export type SizeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Size
     */
    omit?: SizeOmit<ExtArgs> | null
    /**
     * The data used to create many Sizes.
     */
    data: SizeCreateManyInput | SizeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SizeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Size update
   */
  export type SizeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Size
     */
    omit?: SizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SizeInclude<ExtArgs> | null
    /**
     * The data needed to update a Size.
     */
    data: XOR<SizeUpdateInput, SizeUncheckedUpdateInput>
    /**
     * Choose, which Size to update.
     */
    where: SizeWhereUniqueInput
  }

  /**
   * Size updateMany
   */
  export type SizeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sizes.
     */
    data: XOR<SizeUpdateManyMutationInput, SizeUncheckedUpdateManyInput>
    /**
     * Filter which Sizes to update
     */
    where?: SizeWhereInput
    /**
     * Limit how many Sizes to update.
     */
    limit?: number
  }

  /**
   * Size updateManyAndReturn
   */
  export type SizeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Size
     */
    omit?: SizeOmit<ExtArgs> | null
    /**
     * The data used to update Sizes.
     */
    data: XOR<SizeUpdateManyMutationInput, SizeUncheckedUpdateManyInput>
    /**
     * Filter which Sizes to update
     */
    where?: SizeWhereInput
    /**
     * Limit how many Sizes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SizeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Size upsert
   */
  export type SizeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Size
     */
    omit?: SizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SizeInclude<ExtArgs> | null
    /**
     * The filter to search for the Size to update in case it exists.
     */
    where: SizeWhereUniqueInput
    /**
     * In case the Size found by the `where` argument doesn't exist, create a new Size with this data.
     */
    create: XOR<SizeCreateInput, SizeUncheckedCreateInput>
    /**
     * In case the Size was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SizeUpdateInput, SizeUncheckedUpdateInput>
  }

  /**
   * Size delete
   */
  export type SizeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Size
     */
    omit?: SizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SizeInclude<ExtArgs> | null
    /**
     * Filter which Size to delete.
     */
    where: SizeWhereUniqueInput
  }

  /**
   * Size deleteMany
   */
  export type SizeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sizes to delete
     */
    where?: SizeWhereInput
    /**
     * Limit how many Sizes to delete.
     */
    limit?: number
  }

  /**
   * Size.favoriteSizes
   */
  export type Size$favoriteSizesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteSize
     */
    select?: FavoriteSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteSize
     */
    omit?: FavoriteSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteSizeInclude<ExtArgs> | null
    where?: FavoriteSizeWhereInput
    orderBy?: FavoriteSizeOrderByWithRelationInput | FavoriteSizeOrderByWithRelationInput[]
    cursor?: FavoriteSizeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteSizeScalarFieldEnum | FavoriteSizeScalarFieldEnum[]
  }

  /**
   * Size.fromConversions
   */
  export type Size$fromConversionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversion
     */
    select?: ConversionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversion
     */
    omit?: ConversionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionInclude<ExtArgs> | null
    where?: ConversionWhereInput
    orderBy?: ConversionOrderByWithRelationInput | ConversionOrderByWithRelationInput[]
    cursor?: ConversionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversionScalarFieldEnum | ConversionScalarFieldEnum[]
  }

  /**
   * Size.toConversions
   */
  export type Size$toConversionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversion
     */
    select?: ConversionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversion
     */
    omit?: ConversionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionInclude<ExtArgs> | null
    where?: ConversionWhereInput
    orderBy?: ConversionOrderByWithRelationInput | ConversionOrderByWithRelationInput[]
    cursor?: ConversionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversionScalarFieldEnum | ConversionScalarFieldEnum[]
  }

  /**
   * Size without action
   */
  export type SizeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Size
     */
    omit?: SizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SizeInclude<ExtArgs> | null
  }


  /**
   * Model Conversion
   */

  export type AggregateConversion = {
    _count: ConversionCountAggregateOutputType | null
    _avg: ConversionAvgAggregateOutputType | null
    _sum: ConversionSumAggregateOutputType | null
    _min: ConversionMinAggregateOutputType | null
    _max: ConversionMaxAggregateOutputType | null
  }

  export type ConversionAvgAggregateOutputType = {
    id: number | null
    customer_id: number | null
    from_size_id: number | null
    to_size_id: number | null
  }

  export type ConversionSumAggregateOutputType = {
    id: number | null
    customer_id: number | null
    from_size_id: number | null
    to_size_id: number | null
  }

  export type ConversionMinAggregateOutputType = {
    id: number | null
    customer_id: number | null
    from_size_id: number | null
    to_size_id: number | null
  }

  export type ConversionMaxAggregateOutputType = {
    id: number | null
    customer_id: number | null
    from_size_id: number | null
    to_size_id: number | null
  }

  export type ConversionCountAggregateOutputType = {
    id: number
    customer_id: number
    from_size_id: number
    to_size_id: number
    _all: number
  }


  export type ConversionAvgAggregateInputType = {
    id?: true
    customer_id?: true
    from_size_id?: true
    to_size_id?: true
  }

  export type ConversionSumAggregateInputType = {
    id?: true
    customer_id?: true
    from_size_id?: true
    to_size_id?: true
  }

  export type ConversionMinAggregateInputType = {
    id?: true
    customer_id?: true
    from_size_id?: true
    to_size_id?: true
  }

  export type ConversionMaxAggregateInputType = {
    id?: true
    customer_id?: true
    from_size_id?: true
    to_size_id?: true
  }

  export type ConversionCountAggregateInputType = {
    id?: true
    customer_id?: true
    from_size_id?: true
    to_size_id?: true
    _all?: true
  }

  export type ConversionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversion to aggregate.
     */
    where?: ConversionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversions to fetch.
     */
    orderBy?: ConversionOrderByWithRelationInput | ConversionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConversionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Conversions
    **/
    _count?: true | ConversionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConversionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConversionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversionMaxAggregateInputType
  }

  export type GetConversionAggregateType<T extends ConversionAggregateArgs> = {
        [P in keyof T & keyof AggregateConversion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversion[P]>
      : GetScalarType<T[P], AggregateConversion[P]>
  }




  export type ConversionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversionWhereInput
    orderBy?: ConversionOrderByWithAggregationInput | ConversionOrderByWithAggregationInput[]
    by: ConversionScalarFieldEnum[] | ConversionScalarFieldEnum
    having?: ConversionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversionCountAggregateInputType | true
    _avg?: ConversionAvgAggregateInputType
    _sum?: ConversionSumAggregateInputType
    _min?: ConversionMinAggregateInputType
    _max?: ConversionMaxAggregateInputType
  }

  export type ConversionGroupByOutputType = {
    id: number
    customer_id: number
    from_size_id: number
    to_size_id: number
    _count: ConversionCountAggregateOutputType | null
    _avg: ConversionAvgAggregateOutputType | null
    _sum: ConversionSumAggregateOutputType | null
    _min: ConversionMinAggregateOutputType | null
    _max: ConversionMaxAggregateOutputType | null
  }

  type GetConversionGroupByPayload<T extends ConversionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversionGroupByOutputType[P]>
            : GetScalarType<T[P], ConversionGroupByOutputType[P]>
        }
      >
    >


  export type ConversionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customer_id?: boolean
    from_size_id?: boolean
    to_size_id?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    fromSize?: boolean | SizeDefaultArgs<ExtArgs>
    toSize?: boolean | SizeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversion"]>

  export type ConversionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customer_id?: boolean
    from_size_id?: boolean
    to_size_id?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    fromSize?: boolean | SizeDefaultArgs<ExtArgs>
    toSize?: boolean | SizeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversion"]>

  export type ConversionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customer_id?: boolean
    from_size_id?: boolean
    to_size_id?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    fromSize?: boolean | SizeDefaultArgs<ExtArgs>
    toSize?: boolean | SizeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversion"]>

  export type ConversionSelectScalar = {
    id?: boolean
    customer_id?: boolean
    from_size_id?: boolean
    to_size_id?: boolean
  }

  export type ConversionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customer_id" | "from_size_id" | "to_size_id", ExtArgs["result"]["conversion"]>
  export type ConversionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    fromSize?: boolean | SizeDefaultArgs<ExtArgs>
    toSize?: boolean | SizeDefaultArgs<ExtArgs>
  }
  export type ConversionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    fromSize?: boolean | SizeDefaultArgs<ExtArgs>
    toSize?: boolean | SizeDefaultArgs<ExtArgs>
  }
  export type ConversionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    fromSize?: boolean | SizeDefaultArgs<ExtArgs>
    toSize?: boolean | SizeDefaultArgs<ExtArgs>
  }

  export type $ConversionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Conversion"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      fromSize: Prisma.$SizePayload<ExtArgs>
      toSize: Prisma.$SizePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      customer_id: number
      from_size_id: number
      to_size_id: number
    }, ExtArgs["result"]["conversion"]>
    composites: {}
  }

  type ConversionGetPayload<S extends boolean | null | undefined | ConversionDefaultArgs> = $Result.GetResult<Prisma.$ConversionPayload, S>

  type ConversionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConversionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConversionCountAggregateInputType | true
    }

  export interface ConversionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Conversion'], meta: { name: 'Conversion' } }
    /**
     * Find zero or one Conversion that matches the filter.
     * @param {ConversionFindUniqueArgs} args - Arguments to find a Conversion
     * @example
     * // Get one Conversion
     * const conversion = await prisma.conversion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConversionFindUniqueArgs>(args: SelectSubset<T, ConversionFindUniqueArgs<ExtArgs>>): Prisma__ConversionClient<$Result.GetResult<Prisma.$ConversionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Conversion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConversionFindUniqueOrThrowArgs} args - Arguments to find a Conversion
     * @example
     * // Get one Conversion
     * const conversion = await prisma.conversion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConversionFindUniqueOrThrowArgs>(args: SelectSubset<T, ConversionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConversionClient<$Result.GetResult<Prisma.$ConversionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversionFindFirstArgs} args - Arguments to find a Conversion
     * @example
     * // Get one Conversion
     * const conversion = await prisma.conversion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConversionFindFirstArgs>(args?: SelectSubset<T, ConversionFindFirstArgs<ExtArgs>>): Prisma__ConversionClient<$Result.GetResult<Prisma.$ConversionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversionFindFirstOrThrowArgs} args - Arguments to find a Conversion
     * @example
     * // Get one Conversion
     * const conversion = await prisma.conversion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConversionFindFirstOrThrowArgs>(args?: SelectSubset<T, ConversionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConversionClient<$Result.GetResult<Prisma.$ConversionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conversions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conversions
     * const conversions = await prisma.conversion.findMany()
     * 
     * // Get first 10 Conversions
     * const conversions = await prisma.conversion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversionWithIdOnly = await prisma.conversion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConversionFindManyArgs>(args?: SelectSubset<T, ConversionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Conversion.
     * @param {ConversionCreateArgs} args - Arguments to create a Conversion.
     * @example
     * // Create one Conversion
     * const Conversion = await prisma.conversion.create({
     *   data: {
     *     // ... data to create a Conversion
     *   }
     * })
     * 
     */
    create<T extends ConversionCreateArgs>(args: SelectSubset<T, ConversionCreateArgs<ExtArgs>>): Prisma__ConversionClient<$Result.GetResult<Prisma.$ConversionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Conversions.
     * @param {ConversionCreateManyArgs} args - Arguments to create many Conversions.
     * @example
     * // Create many Conversions
     * const conversion = await prisma.conversion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConversionCreateManyArgs>(args?: SelectSubset<T, ConversionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Conversions and returns the data saved in the database.
     * @param {ConversionCreateManyAndReturnArgs} args - Arguments to create many Conversions.
     * @example
     * // Create many Conversions
     * const conversion = await prisma.conversion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Conversions and only return the `id`
     * const conversionWithIdOnly = await prisma.conversion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConversionCreateManyAndReturnArgs>(args?: SelectSubset<T, ConversionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Conversion.
     * @param {ConversionDeleteArgs} args - Arguments to delete one Conversion.
     * @example
     * // Delete one Conversion
     * const Conversion = await prisma.conversion.delete({
     *   where: {
     *     // ... filter to delete one Conversion
     *   }
     * })
     * 
     */
    delete<T extends ConversionDeleteArgs>(args: SelectSubset<T, ConversionDeleteArgs<ExtArgs>>): Prisma__ConversionClient<$Result.GetResult<Prisma.$ConversionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Conversion.
     * @param {ConversionUpdateArgs} args - Arguments to update one Conversion.
     * @example
     * // Update one Conversion
     * const conversion = await prisma.conversion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConversionUpdateArgs>(args: SelectSubset<T, ConversionUpdateArgs<ExtArgs>>): Prisma__ConversionClient<$Result.GetResult<Prisma.$ConversionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Conversions.
     * @param {ConversionDeleteManyArgs} args - Arguments to filter Conversions to delete.
     * @example
     * // Delete a few Conversions
     * const { count } = await prisma.conversion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConversionDeleteManyArgs>(args?: SelectSubset<T, ConversionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conversions
     * const conversion = await prisma.conversion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConversionUpdateManyArgs>(args: SelectSubset<T, ConversionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversions and returns the data updated in the database.
     * @param {ConversionUpdateManyAndReturnArgs} args - Arguments to update many Conversions.
     * @example
     * // Update many Conversions
     * const conversion = await prisma.conversion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Conversions and only return the `id`
     * const conversionWithIdOnly = await prisma.conversion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConversionUpdateManyAndReturnArgs>(args: SelectSubset<T, ConversionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Conversion.
     * @param {ConversionUpsertArgs} args - Arguments to update or create a Conversion.
     * @example
     * // Update or create a Conversion
     * const conversion = await prisma.conversion.upsert({
     *   create: {
     *     // ... data to create a Conversion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conversion we want to update
     *   }
     * })
     */
    upsert<T extends ConversionUpsertArgs>(args: SelectSubset<T, ConversionUpsertArgs<ExtArgs>>): Prisma__ConversionClient<$Result.GetResult<Prisma.$ConversionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Conversions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversionCountArgs} args - Arguments to filter Conversions to count.
     * @example
     * // Count the number of Conversions
     * const count = await prisma.conversion.count({
     *   where: {
     *     // ... the filter for the Conversions we want to count
     *   }
     * })
    **/
    count<T extends ConversionCountArgs>(
      args?: Subset<T, ConversionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conversion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConversionAggregateArgs>(args: Subset<T, ConversionAggregateArgs>): Prisma.PrismaPromise<GetConversionAggregateType<T>>

    /**
     * Group by Conversion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConversionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConversionGroupByArgs['orderBy'] }
        : { orderBy?: ConversionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConversionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Conversion model
   */
  readonly fields: ConversionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Conversion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConversionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fromSize<T extends SizeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SizeDefaultArgs<ExtArgs>>): Prisma__SizeClient<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    toSize<T extends SizeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SizeDefaultArgs<ExtArgs>>): Prisma__SizeClient<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Conversion model
   */
  interface ConversionFieldRefs {
    readonly id: FieldRef<"Conversion", 'Int'>
    readonly customer_id: FieldRef<"Conversion", 'Int'>
    readonly from_size_id: FieldRef<"Conversion", 'Int'>
    readonly to_size_id: FieldRef<"Conversion", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Conversion findUnique
   */
  export type ConversionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversion
     */
    select?: ConversionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversion
     */
    omit?: ConversionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionInclude<ExtArgs> | null
    /**
     * Filter, which Conversion to fetch.
     */
    where: ConversionWhereUniqueInput
  }

  /**
   * Conversion findUniqueOrThrow
   */
  export type ConversionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversion
     */
    select?: ConversionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversion
     */
    omit?: ConversionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionInclude<ExtArgs> | null
    /**
     * Filter, which Conversion to fetch.
     */
    where: ConversionWhereUniqueInput
  }

  /**
   * Conversion findFirst
   */
  export type ConversionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversion
     */
    select?: ConversionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversion
     */
    omit?: ConversionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionInclude<ExtArgs> | null
    /**
     * Filter, which Conversion to fetch.
     */
    where?: ConversionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversions to fetch.
     */
    orderBy?: ConversionOrderByWithRelationInput | ConversionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversions.
     */
    cursor?: ConversionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversions.
     */
    distinct?: ConversionScalarFieldEnum | ConversionScalarFieldEnum[]
  }

  /**
   * Conversion findFirstOrThrow
   */
  export type ConversionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversion
     */
    select?: ConversionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversion
     */
    omit?: ConversionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionInclude<ExtArgs> | null
    /**
     * Filter, which Conversion to fetch.
     */
    where?: ConversionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversions to fetch.
     */
    orderBy?: ConversionOrderByWithRelationInput | ConversionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversions.
     */
    cursor?: ConversionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversions.
     */
    distinct?: ConversionScalarFieldEnum | ConversionScalarFieldEnum[]
  }

  /**
   * Conversion findMany
   */
  export type ConversionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversion
     */
    select?: ConversionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversion
     */
    omit?: ConversionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionInclude<ExtArgs> | null
    /**
     * Filter, which Conversions to fetch.
     */
    where?: ConversionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversions to fetch.
     */
    orderBy?: ConversionOrderByWithRelationInput | ConversionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Conversions.
     */
    cursor?: ConversionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversions.
     */
    skip?: number
    distinct?: ConversionScalarFieldEnum | ConversionScalarFieldEnum[]
  }

  /**
   * Conversion create
   */
  export type ConversionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversion
     */
    select?: ConversionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversion
     */
    omit?: ConversionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionInclude<ExtArgs> | null
    /**
     * The data needed to create a Conversion.
     */
    data: XOR<ConversionCreateInput, ConversionUncheckedCreateInput>
  }

  /**
   * Conversion createMany
   */
  export type ConversionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Conversions.
     */
    data: ConversionCreateManyInput | ConversionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Conversion createManyAndReturn
   */
  export type ConversionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversion
     */
    select?: ConversionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conversion
     */
    omit?: ConversionOmit<ExtArgs> | null
    /**
     * The data used to create many Conversions.
     */
    data: ConversionCreateManyInput | ConversionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conversion update
   */
  export type ConversionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversion
     */
    select?: ConversionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversion
     */
    omit?: ConversionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionInclude<ExtArgs> | null
    /**
     * The data needed to update a Conversion.
     */
    data: XOR<ConversionUpdateInput, ConversionUncheckedUpdateInput>
    /**
     * Choose, which Conversion to update.
     */
    where: ConversionWhereUniqueInput
  }

  /**
   * Conversion updateMany
   */
  export type ConversionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Conversions.
     */
    data: XOR<ConversionUpdateManyMutationInput, ConversionUncheckedUpdateManyInput>
    /**
     * Filter which Conversions to update
     */
    where?: ConversionWhereInput
    /**
     * Limit how many Conversions to update.
     */
    limit?: number
  }

  /**
   * Conversion updateManyAndReturn
   */
  export type ConversionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversion
     */
    select?: ConversionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conversion
     */
    omit?: ConversionOmit<ExtArgs> | null
    /**
     * The data used to update Conversions.
     */
    data: XOR<ConversionUpdateManyMutationInput, ConversionUncheckedUpdateManyInput>
    /**
     * Filter which Conversions to update
     */
    where?: ConversionWhereInput
    /**
     * Limit how many Conversions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conversion upsert
   */
  export type ConversionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversion
     */
    select?: ConversionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversion
     */
    omit?: ConversionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionInclude<ExtArgs> | null
    /**
     * The filter to search for the Conversion to update in case it exists.
     */
    where: ConversionWhereUniqueInput
    /**
     * In case the Conversion found by the `where` argument doesn't exist, create a new Conversion with this data.
     */
    create: XOR<ConversionCreateInput, ConversionUncheckedCreateInput>
    /**
     * In case the Conversion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConversionUpdateInput, ConversionUncheckedUpdateInput>
  }

  /**
   * Conversion delete
   */
  export type ConversionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversion
     */
    select?: ConversionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversion
     */
    omit?: ConversionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionInclude<ExtArgs> | null
    /**
     * Filter which Conversion to delete.
     */
    where: ConversionWhereUniqueInput
  }

  /**
   * Conversion deleteMany
   */
  export type ConversionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversions to delete
     */
    where?: ConversionWhereInput
    /**
     * Limit how many Conversions to delete.
     */
    limit?: number
  }

  /**
   * Conversion without action
   */
  export type ConversionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversion
     */
    select?: ConversionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversion
     */
    omit?: ConversionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionInclude<ExtArgs> | null
  }


  /**
   * Model FavoriteSize
   */

  export type AggregateFavoriteSize = {
    _count: FavoriteSizeCountAggregateOutputType | null
    _avg: FavoriteSizeAvgAggregateOutputType | null
    _sum: FavoriteSizeSumAggregateOutputType | null
    _min: FavoriteSizeMinAggregateOutputType | null
    _max: FavoriteSizeMaxAggregateOutputType | null
  }

  export type FavoriteSizeAvgAggregateOutputType = {
    id: number | null
    customer_id: number | null
    country_id: number | null
    category_id: number | null
    size_id: number | null
  }

  export type FavoriteSizeSumAggregateOutputType = {
    id: number | null
    customer_id: number | null
    country_id: number | null
    category_id: number | null
    size_id: number | null
  }

  export type FavoriteSizeMinAggregateOutputType = {
    id: number | null
    customer_id: number | null
    title: string | null
    description: string | null
    country_id: number | null
    category_id: number | null
    size_id: number | null
  }

  export type FavoriteSizeMaxAggregateOutputType = {
    id: number | null
    customer_id: number | null
    title: string | null
    description: string | null
    country_id: number | null
    category_id: number | null
    size_id: number | null
  }

  export type FavoriteSizeCountAggregateOutputType = {
    id: number
    customer_id: number
    title: number
    description: number
    gender: number
    country_id: number
    category_id: number
    size_id: number
    _all: number
  }


  export type FavoriteSizeAvgAggregateInputType = {
    id?: true
    customer_id?: true
    country_id?: true
    category_id?: true
    size_id?: true
  }

  export type FavoriteSizeSumAggregateInputType = {
    id?: true
    customer_id?: true
    country_id?: true
    category_id?: true
    size_id?: true
  }

  export type FavoriteSizeMinAggregateInputType = {
    id?: true
    customer_id?: true
    title?: true
    description?: true
    country_id?: true
    category_id?: true
    size_id?: true
  }

  export type FavoriteSizeMaxAggregateInputType = {
    id?: true
    customer_id?: true
    title?: true
    description?: true
    country_id?: true
    category_id?: true
    size_id?: true
  }

  export type FavoriteSizeCountAggregateInputType = {
    id?: true
    customer_id?: true
    title?: true
    description?: true
    gender?: true
    country_id?: true
    category_id?: true
    size_id?: true
    _all?: true
  }

  export type FavoriteSizeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FavoriteSize to aggregate.
     */
    where?: FavoriteSizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteSizes to fetch.
     */
    orderBy?: FavoriteSizeOrderByWithRelationInput | FavoriteSizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoriteSizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteSizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteSizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FavoriteSizes
    **/
    _count?: true | FavoriteSizeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FavoriteSizeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FavoriteSizeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoriteSizeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoriteSizeMaxAggregateInputType
  }

  export type GetFavoriteSizeAggregateType<T extends FavoriteSizeAggregateArgs> = {
        [P in keyof T & keyof AggregateFavoriteSize]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavoriteSize[P]>
      : GetScalarType<T[P], AggregateFavoriteSize[P]>
  }




  export type FavoriteSizeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteSizeWhereInput
    orderBy?: FavoriteSizeOrderByWithAggregationInput | FavoriteSizeOrderByWithAggregationInput[]
    by: FavoriteSizeScalarFieldEnum[] | FavoriteSizeScalarFieldEnum
    having?: FavoriteSizeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoriteSizeCountAggregateInputType | true
    _avg?: FavoriteSizeAvgAggregateInputType
    _sum?: FavoriteSizeSumAggregateInputType
    _min?: FavoriteSizeMinAggregateInputType
    _max?: FavoriteSizeMaxAggregateInputType
  }

  export type FavoriteSizeGroupByOutputType = {
    id: number
    customer_id: number
    title: string
    description: string | null
    gender: $Enums.Gender[]
    country_id: number
    category_id: number
    size_id: number
    _count: FavoriteSizeCountAggregateOutputType | null
    _avg: FavoriteSizeAvgAggregateOutputType | null
    _sum: FavoriteSizeSumAggregateOutputType | null
    _min: FavoriteSizeMinAggregateOutputType | null
    _max: FavoriteSizeMaxAggregateOutputType | null
  }

  type GetFavoriteSizeGroupByPayload<T extends FavoriteSizeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoriteSizeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoriteSizeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoriteSizeGroupByOutputType[P]>
            : GetScalarType<T[P], FavoriteSizeGroupByOutputType[P]>
        }
      >
    >


  export type FavoriteSizeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customer_id?: boolean
    title?: boolean
    description?: boolean
    gender?: boolean
    country_id?: boolean
    category_id?: boolean
    size_id?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    country?: boolean | CountryDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    size?: boolean | SizeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favoriteSize"]>

  export type FavoriteSizeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customer_id?: boolean
    title?: boolean
    description?: boolean
    gender?: boolean
    country_id?: boolean
    category_id?: boolean
    size_id?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    country?: boolean | CountryDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    size?: boolean | SizeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favoriteSize"]>

  export type FavoriteSizeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customer_id?: boolean
    title?: boolean
    description?: boolean
    gender?: boolean
    country_id?: boolean
    category_id?: boolean
    size_id?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    country?: boolean | CountryDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    size?: boolean | SizeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favoriteSize"]>

  export type FavoriteSizeSelectScalar = {
    id?: boolean
    customer_id?: boolean
    title?: boolean
    description?: boolean
    gender?: boolean
    country_id?: boolean
    category_id?: boolean
    size_id?: boolean
  }

  export type FavoriteSizeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customer_id" | "title" | "description" | "gender" | "country_id" | "category_id" | "size_id", ExtArgs["result"]["favoriteSize"]>
  export type FavoriteSizeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    country?: boolean | CountryDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    size?: boolean | SizeDefaultArgs<ExtArgs>
  }
  export type FavoriteSizeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    country?: boolean | CountryDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    size?: boolean | SizeDefaultArgs<ExtArgs>
  }
  export type FavoriteSizeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    country?: boolean | CountryDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    size?: boolean | SizeDefaultArgs<ExtArgs>
  }

  export type $FavoriteSizePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FavoriteSize"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      country: Prisma.$CountryPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
      size: Prisma.$SizePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      customer_id: number
      title: string
      description: string | null
      gender: $Enums.Gender[]
      country_id: number
      category_id: number
      size_id: number
    }, ExtArgs["result"]["favoriteSize"]>
    composites: {}
  }

  type FavoriteSizeGetPayload<S extends boolean | null | undefined | FavoriteSizeDefaultArgs> = $Result.GetResult<Prisma.$FavoriteSizePayload, S>

  type FavoriteSizeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavoriteSizeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavoriteSizeCountAggregateInputType | true
    }

  export interface FavoriteSizeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FavoriteSize'], meta: { name: 'FavoriteSize' } }
    /**
     * Find zero or one FavoriteSize that matches the filter.
     * @param {FavoriteSizeFindUniqueArgs} args - Arguments to find a FavoriteSize
     * @example
     * // Get one FavoriteSize
     * const favoriteSize = await prisma.favoriteSize.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavoriteSizeFindUniqueArgs>(args: SelectSubset<T, FavoriteSizeFindUniqueArgs<ExtArgs>>): Prisma__FavoriteSizeClient<$Result.GetResult<Prisma.$FavoriteSizePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FavoriteSize that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavoriteSizeFindUniqueOrThrowArgs} args - Arguments to find a FavoriteSize
     * @example
     * // Get one FavoriteSize
     * const favoriteSize = await prisma.favoriteSize.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavoriteSizeFindUniqueOrThrowArgs>(args: SelectSubset<T, FavoriteSizeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavoriteSizeClient<$Result.GetResult<Prisma.$FavoriteSizePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FavoriteSize that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteSizeFindFirstArgs} args - Arguments to find a FavoriteSize
     * @example
     * // Get one FavoriteSize
     * const favoriteSize = await prisma.favoriteSize.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavoriteSizeFindFirstArgs>(args?: SelectSubset<T, FavoriteSizeFindFirstArgs<ExtArgs>>): Prisma__FavoriteSizeClient<$Result.GetResult<Prisma.$FavoriteSizePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FavoriteSize that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteSizeFindFirstOrThrowArgs} args - Arguments to find a FavoriteSize
     * @example
     * // Get one FavoriteSize
     * const favoriteSize = await prisma.favoriteSize.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavoriteSizeFindFirstOrThrowArgs>(args?: SelectSubset<T, FavoriteSizeFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavoriteSizeClient<$Result.GetResult<Prisma.$FavoriteSizePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FavoriteSizes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteSizeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FavoriteSizes
     * const favoriteSizes = await prisma.favoriteSize.findMany()
     * 
     * // Get first 10 FavoriteSizes
     * const favoriteSizes = await prisma.favoriteSize.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favoriteSizeWithIdOnly = await prisma.favoriteSize.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FavoriteSizeFindManyArgs>(args?: SelectSubset<T, FavoriteSizeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteSizePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FavoriteSize.
     * @param {FavoriteSizeCreateArgs} args - Arguments to create a FavoriteSize.
     * @example
     * // Create one FavoriteSize
     * const FavoriteSize = await prisma.favoriteSize.create({
     *   data: {
     *     // ... data to create a FavoriteSize
     *   }
     * })
     * 
     */
    create<T extends FavoriteSizeCreateArgs>(args: SelectSubset<T, FavoriteSizeCreateArgs<ExtArgs>>): Prisma__FavoriteSizeClient<$Result.GetResult<Prisma.$FavoriteSizePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FavoriteSizes.
     * @param {FavoriteSizeCreateManyArgs} args - Arguments to create many FavoriteSizes.
     * @example
     * // Create many FavoriteSizes
     * const favoriteSize = await prisma.favoriteSize.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavoriteSizeCreateManyArgs>(args?: SelectSubset<T, FavoriteSizeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FavoriteSizes and returns the data saved in the database.
     * @param {FavoriteSizeCreateManyAndReturnArgs} args - Arguments to create many FavoriteSizes.
     * @example
     * // Create many FavoriteSizes
     * const favoriteSize = await prisma.favoriteSize.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FavoriteSizes and only return the `id`
     * const favoriteSizeWithIdOnly = await prisma.favoriteSize.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FavoriteSizeCreateManyAndReturnArgs>(args?: SelectSubset<T, FavoriteSizeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteSizePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FavoriteSize.
     * @param {FavoriteSizeDeleteArgs} args - Arguments to delete one FavoriteSize.
     * @example
     * // Delete one FavoriteSize
     * const FavoriteSize = await prisma.favoriteSize.delete({
     *   where: {
     *     // ... filter to delete one FavoriteSize
     *   }
     * })
     * 
     */
    delete<T extends FavoriteSizeDeleteArgs>(args: SelectSubset<T, FavoriteSizeDeleteArgs<ExtArgs>>): Prisma__FavoriteSizeClient<$Result.GetResult<Prisma.$FavoriteSizePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FavoriteSize.
     * @param {FavoriteSizeUpdateArgs} args - Arguments to update one FavoriteSize.
     * @example
     * // Update one FavoriteSize
     * const favoriteSize = await prisma.favoriteSize.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavoriteSizeUpdateArgs>(args: SelectSubset<T, FavoriteSizeUpdateArgs<ExtArgs>>): Prisma__FavoriteSizeClient<$Result.GetResult<Prisma.$FavoriteSizePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FavoriteSizes.
     * @param {FavoriteSizeDeleteManyArgs} args - Arguments to filter FavoriteSizes to delete.
     * @example
     * // Delete a few FavoriteSizes
     * const { count } = await prisma.favoriteSize.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavoriteSizeDeleteManyArgs>(args?: SelectSubset<T, FavoriteSizeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FavoriteSizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteSizeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FavoriteSizes
     * const favoriteSize = await prisma.favoriteSize.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavoriteSizeUpdateManyArgs>(args: SelectSubset<T, FavoriteSizeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FavoriteSizes and returns the data updated in the database.
     * @param {FavoriteSizeUpdateManyAndReturnArgs} args - Arguments to update many FavoriteSizes.
     * @example
     * // Update many FavoriteSizes
     * const favoriteSize = await prisma.favoriteSize.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FavoriteSizes and only return the `id`
     * const favoriteSizeWithIdOnly = await prisma.favoriteSize.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FavoriteSizeUpdateManyAndReturnArgs>(args: SelectSubset<T, FavoriteSizeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteSizePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FavoriteSize.
     * @param {FavoriteSizeUpsertArgs} args - Arguments to update or create a FavoriteSize.
     * @example
     * // Update or create a FavoriteSize
     * const favoriteSize = await prisma.favoriteSize.upsert({
     *   create: {
     *     // ... data to create a FavoriteSize
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FavoriteSize we want to update
     *   }
     * })
     */
    upsert<T extends FavoriteSizeUpsertArgs>(args: SelectSubset<T, FavoriteSizeUpsertArgs<ExtArgs>>): Prisma__FavoriteSizeClient<$Result.GetResult<Prisma.$FavoriteSizePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FavoriteSizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteSizeCountArgs} args - Arguments to filter FavoriteSizes to count.
     * @example
     * // Count the number of FavoriteSizes
     * const count = await prisma.favoriteSize.count({
     *   where: {
     *     // ... the filter for the FavoriteSizes we want to count
     *   }
     * })
    **/
    count<T extends FavoriteSizeCountArgs>(
      args?: Subset<T, FavoriteSizeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoriteSizeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FavoriteSize.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteSizeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FavoriteSizeAggregateArgs>(args: Subset<T, FavoriteSizeAggregateArgs>): Prisma.PrismaPromise<GetFavoriteSizeAggregateType<T>>

    /**
     * Group by FavoriteSize.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteSizeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FavoriteSizeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoriteSizeGroupByArgs['orderBy'] }
        : { orderBy?: FavoriteSizeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FavoriteSizeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoriteSizeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FavoriteSize model
   */
  readonly fields: FavoriteSizeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FavoriteSize.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoriteSizeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    country<T extends CountryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CountryDefaultArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    size<T extends SizeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SizeDefaultArgs<ExtArgs>>): Prisma__SizeClient<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FavoriteSize model
   */
  interface FavoriteSizeFieldRefs {
    readonly id: FieldRef<"FavoriteSize", 'Int'>
    readonly customer_id: FieldRef<"FavoriteSize", 'Int'>
    readonly title: FieldRef<"FavoriteSize", 'String'>
    readonly description: FieldRef<"FavoriteSize", 'String'>
    readonly gender: FieldRef<"FavoriteSize", 'Gender[]'>
    readonly country_id: FieldRef<"FavoriteSize", 'Int'>
    readonly category_id: FieldRef<"FavoriteSize", 'Int'>
    readonly size_id: FieldRef<"FavoriteSize", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * FavoriteSize findUnique
   */
  export type FavoriteSizeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteSize
     */
    select?: FavoriteSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteSize
     */
    omit?: FavoriteSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteSizeInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteSize to fetch.
     */
    where: FavoriteSizeWhereUniqueInput
  }

  /**
   * FavoriteSize findUniqueOrThrow
   */
  export type FavoriteSizeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteSize
     */
    select?: FavoriteSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteSize
     */
    omit?: FavoriteSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteSizeInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteSize to fetch.
     */
    where: FavoriteSizeWhereUniqueInput
  }

  /**
   * FavoriteSize findFirst
   */
  export type FavoriteSizeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteSize
     */
    select?: FavoriteSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteSize
     */
    omit?: FavoriteSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteSizeInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteSize to fetch.
     */
    where?: FavoriteSizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteSizes to fetch.
     */
    orderBy?: FavoriteSizeOrderByWithRelationInput | FavoriteSizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FavoriteSizes.
     */
    cursor?: FavoriteSizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteSizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteSizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FavoriteSizes.
     */
    distinct?: FavoriteSizeScalarFieldEnum | FavoriteSizeScalarFieldEnum[]
  }

  /**
   * FavoriteSize findFirstOrThrow
   */
  export type FavoriteSizeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteSize
     */
    select?: FavoriteSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteSize
     */
    omit?: FavoriteSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteSizeInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteSize to fetch.
     */
    where?: FavoriteSizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteSizes to fetch.
     */
    orderBy?: FavoriteSizeOrderByWithRelationInput | FavoriteSizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FavoriteSizes.
     */
    cursor?: FavoriteSizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteSizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteSizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FavoriteSizes.
     */
    distinct?: FavoriteSizeScalarFieldEnum | FavoriteSizeScalarFieldEnum[]
  }

  /**
   * FavoriteSize findMany
   */
  export type FavoriteSizeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteSize
     */
    select?: FavoriteSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteSize
     */
    omit?: FavoriteSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteSizeInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteSizes to fetch.
     */
    where?: FavoriteSizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteSizes to fetch.
     */
    orderBy?: FavoriteSizeOrderByWithRelationInput | FavoriteSizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FavoriteSizes.
     */
    cursor?: FavoriteSizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteSizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteSizes.
     */
    skip?: number
    distinct?: FavoriteSizeScalarFieldEnum | FavoriteSizeScalarFieldEnum[]
  }

  /**
   * FavoriteSize create
   */
  export type FavoriteSizeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteSize
     */
    select?: FavoriteSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteSize
     */
    omit?: FavoriteSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteSizeInclude<ExtArgs> | null
    /**
     * The data needed to create a FavoriteSize.
     */
    data: XOR<FavoriteSizeCreateInput, FavoriteSizeUncheckedCreateInput>
  }

  /**
   * FavoriteSize createMany
   */
  export type FavoriteSizeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FavoriteSizes.
     */
    data: FavoriteSizeCreateManyInput | FavoriteSizeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FavoriteSize createManyAndReturn
   */
  export type FavoriteSizeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteSize
     */
    select?: FavoriteSizeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteSize
     */
    omit?: FavoriteSizeOmit<ExtArgs> | null
    /**
     * The data used to create many FavoriteSizes.
     */
    data: FavoriteSizeCreateManyInput | FavoriteSizeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteSizeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FavoriteSize update
   */
  export type FavoriteSizeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteSize
     */
    select?: FavoriteSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteSize
     */
    omit?: FavoriteSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteSizeInclude<ExtArgs> | null
    /**
     * The data needed to update a FavoriteSize.
     */
    data: XOR<FavoriteSizeUpdateInput, FavoriteSizeUncheckedUpdateInput>
    /**
     * Choose, which FavoriteSize to update.
     */
    where: FavoriteSizeWhereUniqueInput
  }

  /**
   * FavoriteSize updateMany
   */
  export type FavoriteSizeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FavoriteSizes.
     */
    data: XOR<FavoriteSizeUpdateManyMutationInput, FavoriteSizeUncheckedUpdateManyInput>
    /**
     * Filter which FavoriteSizes to update
     */
    where?: FavoriteSizeWhereInput
    /**
     * Limit how many FavoriteSizes to update.
     */
    limit?: number
  }

  /**
   * FavoriteSize updateManyAndReturn
   */
  export type FavoriteSizeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteSize
     */
    select?: FavoriteSizeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteSize
     */
    omit?: FavoriteSizeOmit<ExtArgs> | null
    /**
     * The data used to update FavoriteSizes.
     */
    data: XOR<FavoriteSizeUpdateManyMutationInput, FavoriteSizeUncheckedUpdateManyInput>
    /**
     * Filter which FavoriteSizes to update
     */
    where?: FavoriteSizeWhereInput
    /**
     * Limit how many FavoriteSizes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteSizeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FavoriteSize upsert
   */
  export type FavoriteSizeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteSize
     */
    select?: FavoriteSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteSize
     */
    omit?: FavoriteSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteSizeInclude<ExtArgs> | null
    /**
     * The filter to search for the FavoriteSize to update in case it exists.
     */
    where: FavoriteSizeWhereUniqueInput
    /**
     * In case the FavoriteSize found by the `where` argument doesn't exist, create a new FavoriteSize with this data.
     */
    create: XOR<FavoriteSizeCreateInput, FavoriteSizeUncheckedCreateInput>
    /**
     * In case the FavoriteSize was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoriteSizeUpdateInput, FavoriteSizeUncheckedUpdateInput>
  }

  /**
   * FavoriteSize delete
   */
  export type FavoriteSizeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteSize
     */
    select?: FavoriteSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteSize
     */
    omit?: FavoriteSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteSizeInclude<ExtArgs> | null
    /**
     * Filter which FavoriteSize to delete.
     */
    where: FavoriteSizeWhereUniqueInput
  }

  /**
   * FavoriteSize deleteMany
   */
  export type FavoriteSizeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FavoriteSizes to delete
     */
    where?: FavoriteSizeWhereInput
    /**
     * Limit how many FavoriteSizes to delete.
     */
    limit?: number
  }

  /**
   * FavoriteSize without action
   */
  export type FavoriteSizeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteSize
     */
    select?: FavoriteSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteSize
     */
    omit?: FavoriteSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteSizeInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    image: 'image',
    role: 'role'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const CountryScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name'
  };

  export type CountryScalarFieldEnum = (typeof CountryScalarFieldEnum)[keyof typeof CountryScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    type: 'type'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const SizeScalarFieldEnum: {
    id: 'id',
    category_id: 'category_id',
    country_id: 'country_id',
    size_label: 'size_label'
  };

  export type SizeScalarFieldEnum = (typeof SizeScalarFieldEnum)[keyof typeof SizeScalarFieldEnum]


  export const ConversionScalarFieldEnum: {
    id: 'id',
    customer_id: 'customer_id',
    from_size_id: 'from_size_id',
    to_size_id: 'to_size_id'
  };

  export type ConversionScalarFieldEnum = (typeof ConversionScalarFieldEnum)[keyof typeof ConversionScalarFieldEnum]


  export const FavoriteSizeScalarFieldEnum: {
    id: 'id',
    customer_id: 'customer_id',
    title: 'title',
    description: 'description',
    gender: 'gender',
    country_id: 'country_id',
    category_id: 'category_id',
    size_id: 'size_id'
  };

  export type FavoriteSizeScalarFieldEnum = (typeof FavoriteSizeScalarFieldEnum)[keyof typeof FavoriteSizeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: IntFilter<"Customer"> | number
    email?: StringFilter<"Customer"> | string
    name?: StringNullableFilter<"Customer"> | string | null
    image?: StringNullableFilter<"Customer"> | string | null
    role?: EnumRoleNullableListFilter<"Customer">
    conversions?: ConversionListRelationFilter
    favoriteSizes?: FavoriteSizeListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    conversions?: ConversionOrderByRelationAggregateInput
    favoriteSizes?: FavoriteSizeOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringNullableFilter<"Customer"> | string | null
    image?: StringNullableFilter<"Customer"> | string | null
    role?: EnumRoleNullableListFilter<"Customer">
    conversions?: ConversionListRelationFilter
    favoriteSizes?: FavoriteSizeListRelationFilter
  }, "id" | "email">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Customer"> | number
    email?: StringWithAggregatesFilter<"Customer"> | string
    name?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    image?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    role?: EnumRoleNullableListFilter<"Customer">
  }

  export type CountryWhereInput = {
    AND?: CountryWhereInput | CountryWhereInput[]
    OR?: CountryWhereInput[]
    NOT?: CountryWhereInput | CountryWhereInput[]
    id?: IntFilter<"Country"> | number
    code?: StringFilter<"Country"> | string
    name?: StringFilter<"Country"> | string
    sizes?: SizeListRelationFilter
    favoriteSizes?: FavoriteSizeListRelationFilter
  }

  export type CountryOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    sizes?: SizeOrderByRelationAggregateInput
    favoriteSizes?: FavoriteSizeOrderByRelationAggregateInput
  }

  export type CountryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CountryWhereInput | CountryWhereInput[]
    OR?: CountryWhereInput[]
    NOT?: CountryWhereInput | CountryWhereInput[]
    code?: StringFilter<"Country"> | string
    sizes?: SizeListRelationFilter
    favoriteSizes?: FavoriteSizeListRelationFilter
  }, "id" | "name">

  export type CountryOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    _count?: CountryCountOrderByAggregateInput
    _avg?: CountryAvgOrderByAggregateInput
    _max?: CountryMaxOrderByAggregateInput
    _min?: CountryMinOrderByAggregateInput
    _sum?: CountrySumOrderByAggregateInput
  }

  export type CountryScalarWhereWithAggregatesInput = {
    AND?: CountryScalarWhereWithAggregatesInput | CountryScalarWhereWithAggregatesInput[]
    OR?: CountryScalarWhereWithAggregatesInput[]
    NOT?: CountryScalarWhereWithAggregatesInput | CountryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Country"> | number
    code?: StringWithAggregatesFilter<"Country"> | string
    name?: StringWithAggregatesFilter<"Country"> | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    type?: StringFilter<"Category"> | string
    sizes?: SizeListRelationFilter
    favoriteSizes?: FavoriteSizeListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    sizes?: SizeOrderByRelationAggregateInput
    favoriteSizes?: FavoriteSizeOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    type?: StringFilter<"Category"> | string
    sizes?: SizeListRelationFilter
    favoriteSizes?: FavoriteSizeListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    type?: StringWithAggregatesFilter<"Category"> | string
  }

  export type SizeWhereInput = {
    AND?: SizeWhereInput | SizeWhereInput[]
    OR?: SizeWhereInput[]
    NOT?: SizeWhereInput | SizeWhereInput[]
    id?: IntFilter<"Size"> | number
    category_id?: IntFilter<"Size"> | number
    country_id?: IntFilter<"Size"> | number
    size_label?: StringFilter<"Size"> | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    country?: XOR<CountryScalarRelationFilter, CountryWhereInput>
    favoriteSizes?: FavoriteSizeListRelationFilter
    fromConversions?: ConversionListRelationFilter
    toConversions?: ConversionListRelationFilter
  }

  export type SizeOrderByWithRelationInput = {
    id?: SortOrder
    category_id?: SortOrder
    country_id?: SortOrder
    size_label?: SortOrder
    category?: CategoryOrderByWithRelationInput
    country?: CountryOrderByWithRelationInput
    favoriteSizes?: FavoriteSizeOrderByRelationAggregateInput
    fromConversions?: ConversionOrderByRelationAggregateInput
    toConversions?: ConversionOrderByRelationAggregateInput
  }

  export type SizeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SizeWhereInput | SizeWhereInput[]
    OR?: SizeWhereInput[]
    NOT?: SizeWhereInput | SizeWhereInput[]
    category_id?: IntFilter<"Size"> | number
    country_id?: IntFilter<"Size"> | number
    size_label?: StringFilter<"Size"> | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    country?: XOR<CountryScalarRelationFilter, CountryWhereInput>
    favoriteSizes?: FavoriteSizeListRelationFilter
    fromConversions?: ConversionListRelationFilter
    toConversions?: ConversionListRelationFilter
  }, "id">

  export type SizeOrderByWithAggregationInput = {
    id?: SortOrder
    category_id?: SortOrder
    country_id?: SortOrder
    size_label?: SortOrder
    _count?: SizeCountOrderByAggregateInput
    _avg?: SizeAvgOrderByAggregateInput
    _max?: SizeMaxOrderByAggregateInput
    _min?: SizeMinOrderByAggregateInput
    _sum?: SizeSumOrderByAggregateInput
  }

  export type SizeScalarWhereWithAggregatesInput = {
    AND?: SizeScalarWhereWithAggregatesInput | SizeScalarWhereWithAggregatesInput[]
    OR?: SizeScalarWhereWithAggregatesInput[]
    NOT?: SizeScalarWhereWithAggregatesInput | SizeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Size"> | number
    category_id?: IntWithAggregatesFilter<"Size"> | number
    country_id?: IntWithAggregatesFilter<"Size"> | number
    size_label?: StringWithAggregatesFilter<"Size"> | string
  }

  export type ConversionWhereInput = {
    AND?: ConversionWhereInput | ConversionWhereInput[]
    OR?: ConversionWhereInput[]
    NOT?: ConversionWhereInput | ConversionWhereInput[]
    id?: IntFilter<"Conversion"> | number
    customer_id?: IntFilter<"Conversion"> | number
    from_size_id?: IntFilter<"Conversion"> | number
    to_size_id?: IntFilter<"Conversion"> | number
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    fromSize?: XOR<SizeScalarRelationFilter, SizeWhereInput>
    toSize?: XOR<SizeScalarRelationFilter, SizeWhereInput>
  }

  export type ConversionOrderByWithRelationInput = {
    id?: SortOrder
    customer_id?: SortOrder
    from_size_id?: SortOrder
    to_size_id?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    fromSize?: SizeOrderByWithRelationInput
    toSize?: SizeOrderByWithRelationInput
  }

  export type ConversionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ConversionWhereInput | ConversionWhereInput[]
    OR?: ConversionWhereInput[]
    NOT?: ConversionWhereInput | ConversionWhereInput[]
    customer_id?: IntFilter<"Conversion"> | number
    from_size_id?: IntFilter<"Conversion"> | number
    to_size_id?: IntFilter<"Conversion"> | number
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    fromSize?: XOR<SizeScalarRelationFilter, SizeWhereInput>
    toSize?: XOR<SizeScalarRelationFilter, SizeWhereInput>
  }, "id">

  export type ConversionOrderByWithAggregationInput = {
    id?: SortOrder
    customer_id?: SortOrder
    from_size_id?: SortOrder
    to_size_id?: SortOrder
    _count?: ConversionCountOrderByAggregateInput
    _avg?: ConversionAvgOrderByAggregateInput
    _max?: ConversionMaxOrderByAggregateInput
    _min?: ConversionMinOrderByAggregateInput
    _sum?: ConversionSumOrderByAggregateInput
  }

  export type ConversionScalarWhereWithAggregatesInput = {
    AND?: ConversionScalarWhereWithAggregatesInput | ConversionScalarWhereWithAggregatesInput[]
    OR?: ConversionScalarWhereWithAggregatesInput[]
    NOT?: ConversionScalarWhereWithAggregatesInput | ConversionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Conversion"> | number
    customer_id?: IntWithAggregatesFilter<"Conversion"> | number
    from_size_id?: IntWithAggregatesFilter<"Conversion"> | number
    to_size_id?: IntWithAggregatesFilter<"Conversion"> | number
  }

  export type FavoriteSizeWhereInput = {
    AND?: FavoriteSizeWhereInput | FavoriteSizeWhereInput[]
    OR?: FavoriteSizeWhereInput[]
    NOT?: FavoriteSizeWhereInput | FavoriteSizeWhereInput[]
    id?: IntFilter<"FavoriteSize"> | number
    customer_id?: IntFilter<"FavoriteSize"> | number
    title?: StringFilter<"FavoriteSize"> | string
    description?: StringNullableFilter<"FavoriteSize"> | string | null
    gender?: EnumGenderNullableListFilter<"FavoriteSize">
    country_id?: IntFilter<"FavoriteSize"> | number
    category_id?: IntFilter<"FavoriteSize"> | number
    size_id?: IntFilter<"FavoriteSize"> | number
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    country?: XOR<CountryScalarRelationFilter, CountryWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    size?: XOR<SizeScalarRelationFilter, SizeWhereInput>
  }

  export type FavoriteSizeOrderByWithRelationInput = {
    id?: SortOrder
    customer_id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    gender?: SortOrder
    country_id?: SortOrder
    category_id?: SortOrder
    size_id?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    country?: CountryOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    size?: SizeOrderByWithRelationInput
  }

  export type FavoriteSizeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FavoriteSizeWhereInput | FavoriteSizeWhereInput[]
    OR?: FavoriteSizeWhereInput[]
    NOT?: FavoriteSizeWhereInput | FavoriteSizeWhereInput[]
    customer_id?: IntFilter<"FavoriteSize"> | number
    title?: StringFilter<"FavoriteSize"> | string
    description?: StringNullableFilter<"FavoriteSize"> | string | null
    gender?: EnumGenderNullableListFilter<"FavoriteSize">
    country_id?: IntFilter<"FavoriteSize"> | number
    category_id?: IntFilter<"FavoriteSize"> | number
    size_id?: IntFilter<"FavoriteSize"> | number
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    country?: XOR<CountryScalarRelationFilter, CountryWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    size?: XOR<SizeScalarRelationFilter, SizeWhereInput>
  }, "id">

  export type FavoriteSizeOrderByWithAggregationInput = {
    id?: SortOrder
    customer_id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    gender?: SortOrder
    country_id?: SortOrder
    category_id?: SortOrder
    size_id?: SortOrder
    _count?: FavoriteSizeCountOrderByAggregateInput
    _avg?: FavoriteSizeAvgOrderByAggregateInput
    _max?: FavoriteSizeMaxOrderByAggregateInput
    _min?: FavoriteSizeMinOrderByAggregateInput
    _sum?: FavoriteSizeSumOrderByAggregateInput
  }

  export type FavoriteSizeScalarWhereWithAggregatesInput = {
    AND?: FavoriteSizeScalarWhereWithAggregatesInput | FavoriteSizeScalarWhereWithAggregatesInput[]
    OR?: FavoriteSizeScalarWhereWithAggregatesInput[]
    NOT?: FavoriteSizeScalarWhereWithAggregatesInput | FavoriteSizeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FavoriteSize"> | number
    customer_id?: IntWithAggregatesFilter<"FavoriteSize"> | number
    title?: StringWithAggregatesFilter<"FavoriteSize"> | string
    description?: StringNullableWithAggregatesFilter<"FavoriteSize"> | string | null
    gender?: EnumGenderNullableListFilter<"FavoriteSize">
    country_id?: IntWithAggregatesFilter<"FavoriteSize"> | number
    category_id?: IntWithAggregatesFilter<"FavoriteSize"> | number
    size_id?: IntWithAggregatesFilter<"FavoriteSize"> | number
  }

  export type CustomerCreateInput = {
    email: string
    name?: string | null
    image?: string | null
    role?: CustomerCreateroleInput | $Enums.Role[]
    conversions?: ConversionCreateNestedManyWithoutCustomerInput
    favoriteSizes?: FavoriteSizeCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: number
    email: string
    name?: string | null
    image?: string | null
    role?: CustomerCreateroleInput | $Enums.Role[]
    conversions?: ConversionUncheckedCreateNestedManyWithoutCustomerInput
    favoriteSizes?: FavoriteSizeUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: CustomerUpdateroleInput | $Enums.Role[]
    conversions?: ConversionUpdateManyWithoutCustomerNestedInput
    favoriteSizes?: FavoriteSizeUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: CustomerUpdateroleInput | $Enums.Role[]
    conversions?: ConversionUncheckedUpdateManyWithoutCustomerNestedInput
    favoriteSizes?: FavoriteSizeUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: number
    email: string
    name?: string | null
    image?: string | null
    role?: CustomerCreateroleInput | $Enums.Role[]
  }

  export type CustomerUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: CustomerUpdateroleInput | $Enums.Role[]
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: CustomerUpdateroleInput | $Enums.Role[]
  }

  export type CountryCreateInput = {
    code: string
    name: string
    sizes?: SizeCreateNestedManyWithoutCountryInput
    favoriteSizes?: FavoriteSizeCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateInput = {
    id?: number
    code: string
    name: string
    sizes?: SizeUncheckedCreateNestedManyWithoutCountryInput
    favoriteSizes?: FavoriteSizeUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sizes?: SizeUpdateManyWithoutCountryNestedInput
    favoriteSizes?: FavoriteSizeUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sizes?: SizeUncheckedUpdateManyWithoutCountryNestedInput
    favoriteSizes?: FavoriteSizeUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type CountryCreateManyInput = {
    id?: number
    code: string
    name: string
  }

  export type CountryUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CountryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryCreateInput = {
    type: string
    sizes?: SizeCreateNestedManyWithoutCategoryInput
    favoriteSizes?: FavoriteSizeCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    type: string
    sizes?: SizeUncheckedCreateNestedManyWithoutCategoryInput
    favoriteSizes?: FavoriteSizeUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    sizes?: SizeUpdateManyWithoutCategoryNestedInput
    favoriteSizes?: FavoriteSizeUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    sizes?: SizeUncheckedUpdateManyWithoutCategoryNestedInput
    favoriteSizes?: FavoriteSizeUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    type: string
  }

  export type CategoryUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type SizeCreateInput = {
    size_label: string
    category: CategoryCreateNestedOneWithoutSizesInput
    country: CountryCreateNestedOneWithoutSizesInput
    favoriteSizes?: FavoriteSizeCreateNestedManyWithoutSizeInput
    fromConversions?: ConversionCreateNestedManyWithoutFromSizeInput
    toConversions?: ConversionCreateNestedManyWithoutToSizeInput
  }

  export type SizeUncheckedCreateInput = {
    id?: number
    category_id: number
    country_id: number
    size_label: string
    favoriteSizes?: FavoriteSizeUncheckedCreateNestedManyWithoutSizeInput
    fromConversions?: ConversionUncheckedCreateNestedManyWithoutFromSizeInput
    toConversions?: ConversionUncheckedCreateNestedManyWithoutToSizeInput
  }

  export type SizeUpdateInput = {
    size_label?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneRequiredWithoutSizesNestedInput
    country?: CountryUpdateOneRequiredWithoutSizesNestedInput
    favoriteSizes?: FavoriteSizeUpdateManyWithoutSizeNestedInput
    fromConversions?: ConversionUpdateManyWithoutFromSizeNestedInput
    toConversions?: ConversionUpdateManyWithoutToSizeNestedInput
  }

  export type SizeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    country_id?: IntFieldUpdateOperationsInput | number
    size_label?: StringFieldUpdateOperationsInput | string
    favoriteSizes?: FavoriteSizeUncheckedUpdateManyWithoutSizeNestedInput
    fromConversions?: ConversionUncheckedUpdateManyWithoutFromSizeNestedInput
    toConversions?: ConversionUncheckedUpdateManyWithoutToSizeNestedInput
  }

  export type SizeCreateManyInput = {
    id?: number
    category_id: number
    country_id: number
    size_label: string
  }

  export type SizeUpdateManyMutationInput = {
    size_label?: StringFieldUpdateOperationsInput | string
  }

  export type SizeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    country_id?: IntFieldUpdateOperationsInput | number
    size_label?: StringFieldUpdateOperationsInput | string
  }

  export type ConversionCreateInput = {
    customer: CustomerCreateNestedOneWithoutConversionsInput
    fromSize: SizeCreateNestedOneWithoutFromConversionsInput
    toSize: SizeCreateNestedOneWithoutToConversionsInput
  }

  export type ConversionUncheckedCreateInput = {
    id?: number
    customer_id: number
    from_size_id: number
    to_size_id: number
  }

  export type ConversionUpdateInput = {
    customer?: CustomerUpdateOneRequiredWithoutConversionsNestedInput
    fromSize?: SizeUpdateOneRequiredWithoutFromConversionsNestedInput
    toSize?: SizeUpdateOneRequiredWithoutToConversionsNestedInput
  }

  export type ConversionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    from_size_id?: IntFieldUpdateOperationsInput | number
    to_size_id?: IntFieldUpdateOperationsInput | number
  }

  export type ConversionCreateManyInput = {
    id?: number
    customer_id: number
    from_size_id: number
    to_size_id: number
  }

  export type ConversionUpdateManyMutationInput = {

  }

  export type ConversionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    from_size_id?: IntFieldUpdateOperationsInput | number
    to_size_id?: IntFieldUpdateOperationsInput | number
  }

  export type FavoriteSizeCreateInput = {
    title: string
    description?: string | null
    gender?: FavoriteSizeCreategenderInput | $Enums.Gender[]
    customer: CustomerCreateNestedOneWithoutFavoriteSizesInput
    country: CountryCreateNestedOneWithoutFavoriteSizesInput
    category: CategoryCreateNestedOneWithoutFavoriteSizesInput
    size: SizeCreateNestedOneWithoutFavoriteSizesInput
  }

  export type FavoriteSizeUncheckedCreateInput = {
    id?: number
    customer_id: number
    title: string
    description?: string | null
    gender?: FavoriteSizeCreategenderInput | $Enums.Gender[]
    country_id: number
    category_id: number
    size_id: number
  }

  export type FavoriteSizeUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: FavoriteSizeUpdategenderInput | $Enums.Gender[]
    customer?: CustomerUpdateOneRequiredWithoutFavoriteSizesNestedInput
    country?: CountryUpdateOneRequiredWithoutFavoriteSizesNestedInput
    category?: CategoryUpdateOneRequiredWithoutFavoriteSizesNestedInput
    size?: SizeUpdateOneRequiredWithoutFavoriteSizesNestedInput
  }

  export type FavoriteSizeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: FavoriteSizeUpdategenderInput | $Enums.Gender[]
    country_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    size_id?: IntFieldUpdateOperationsInput | number
  }

  export type FavoriteSizeCreateManyInput = {
    id?: number
    customer_id: number
    title: string
    description?: string | null
    gender?: FavoriteSizeCreategenderInput | $Enums.Gender[]
    country_id: number
    category_id: number
    size_id: number
  }

  export type FavoriteSizeUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: FavoriteSizeUpdategenderInput | $Enums.Gender[]
  }

  export type FavoriteSizeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: FavoriteSizeUpdategenderInput | $Enums.Gender[]
    country_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    size_id?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    has?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    hasSome?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ConversionListRelationFilter = {
    every?: ConversionWhereInput
    some?: ConversionWhereInput
    none?: ConversionWhereInput
  }

  export type FavoriteSizeListRelationFilter = {
    every?: FavoriteSizeWhereInput
    some?: FavoriteSizeWhereInput
    none?: FavoriteSizeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ConversionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FavoriteSizeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    image?: SortOrder
    role?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    image?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    image?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type SizeListRelationFilter = {
    every?: SizeWhereInput
    some?: SizeWhereInput
    none?: SizeWhereInput
  }

  export type SizeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CountryCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
  }

  export type CountryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CountryMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
  }

  export type CountryMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
  }

  export type CountrySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type CountryScalarRelationFilter = {
    is?: CountryWhereInput
    isNot?: CountryWhereInput
  }

  export type SizeCountOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    country_id?: SortOrder
    size_label?: SortOrder
  }

  export type SizeAvgOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    country_id?: SortOrder
  }

  export type SizeMaxOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    country_id?: SortOrder
    size_label?: SortOrder
  }

  export type SizeMinOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    country_id?: SortOrder
    size_label?: SortOrder
  }

  export type SizeSumOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    country_id?: SortOrder
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type SizeScalarRelationFilter = {
    is?: SizeWhereInput
    isNot?: SizeWhereInput
  }

  export type ConversionCountOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    from_size_id?: SortOrder
    to_size_id?: SortOrder
  }

  export type ConversionAvgOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    from_size_id?: SortOrder
    to_size_id?: SortOrder
  }

  export type ConversionMaxOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    from_size_id?: SortOrder
    to_size_id?: SortOrder
  }

  export type ConversionMinOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    from_size_id?: SortOrder
    to_size_id?: SortOrder
  }

  export type ConversionSumOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    from_size_id?: SortOrder
    to_size_id?: SortOrder
  }

  export type EnumGenderNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    has?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    hasSome?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type FavoriteSizeCountOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    gender?: SortOrder
    country_id?: SortOrder
    category_id?: SortOrder
    size_id?: SortOrder
  }

  export type FavoriteSizeAvgOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    country_id?: SortOrder
    category_id?: SortOrder
    size_id?: SortOrder
  }

  export type FavoriteSizeMaxOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    country_id?: SortOrder
    category_id?: SortOrder
    size_id?: SortOrder
  }

  export type FavoriteSizeMinOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    country_id?: SortOrder
    category_id?: SortOrder
    size_id?: SortOrder
  }

  export type FavoriteSizeSumOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    country_id?: SortOrder
    category_id?: SortOrder
    size_id?: SortOrder
  }

  export type CustomerCreateroleInput = {
    set: $Enums.Role[]
  }

  export type ConversionCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ConversionCreateWithoutCustomerInput, ConversionUncheckedCreateWithoutCustomerInput> | ConversionCreateWithoutCustomerInput[] | ConversionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ConversionCreateOrConnectWithoutCustomerInput | ConversionCreateOrConnectWithoutCustomerInput[]
    createMany?: ConversionCreateManyCustomerInputEnvelope
    connect?: ConversionWhereUniqueInput | ConversionWhereUniqueInput[]
  }

  export type FavoriteSizeCreateNestedManyWithoutCustomerInput = {
    create?: XOR<FavoriteSizeCreateWithoutCustomerInput, FavoriteSizeUncheckedCreateWithoutCustomerInput> | FavoriteSizeCreateWithoutCustomerInput[] | FavoriteSizeUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: FavoriteSizeCreateOrConnectWithoutCustomerInput | FavoriteSizeCreateOrConnectWithoutCustomerInput[]
    createMany?: FavoriteSizeCreateManyCustomerInputEnvelope
    connect?: FavoriteSizeWhereUniqueInput | FavoriteSizeWhereUniqueInput[]
  }

  export type ConversionUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ConversionCreateWithoutCustomerInput, ConversionUncheckedCreateWithoutCustomerInput> | ConversionCreateWithoutCustomerInput[] | ConversionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ConversionCreateOrConnectWithoutCustomerInput | ConversionCreateOrConnectWithoutCustomerInput[]
    createMany?: ConversionCreateManyCustomerInputEnvelope
    connect?: ConversionWhereUniqueInput | ConversionWhereUniqueInput[]
  }

  export type FavoriteSizeUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<FavoriteSizeCreateWithoutCustomerInput, FavoriteSizeUncheckedCreateWithoutCustomerInput> | FavoriteSizeCreateWithoutCustomerInput[] | FavoriteSizeUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: FavoriteSizeCreateOrConnectWithoutCustomerInput | FavoriteSizeCreateOrConnectWithoutCustomerInput[]
    createMany?: FavoriteSizeCreateManyCustomerInputEnvelope
    connect?: FavoriteSizeWhereUniqueInput | FavoriteSizeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CustomerUpdateroleInput = {
    set?: $Enums.Role[]
    push?: $Enums.Role | $Enums.Role[]
  }

  export type ConversionUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ConversionCreateWithoutCustomerInput, ConversionUncheckedCreateWithoutCustomerInput> | ConversionCreateWithoutCustomerInput[] | ConversionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ConversionCreateOrConnectWithoutCustomerInput | ConversionCreateOrConnectWithoutCustomerInput[]
    upsert?: ConversionUpsertWithWhereUniqueWithoutCustomerInput | ConversionUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ConversionCreateManyCustomerInputEnvelope
    set?: ConversionWhereUniqueInput | ConversionWhereUniqueInput[]
    disconnect?: ConversionWhereUniqueInput | ConversionWhereUniqueInput[]
    delete?: ConversionWhereUniqueInput | ConversionWhereUniqueInput[]
    connect?: ConversionWhereUniqueInput | ConversionWhereUniqueInput[]
    update?: ConversionUpdateWithWhereUniqueWithoutCustomerInput | ConversionUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ConversionUpdateManyWithWhereWithoutCustomerInput | ConversionUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ConversionScalarWhereInput | ConversionScalarWhereInput[]
  }

  export type FavoriteSizeUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<FavoriteSizeCreateWithoutCustomerInput, FavoriteSizeUncheckedCreateWithoutCustomerInput> | FavoriteSizeCreateWithoutCustomerInput[] | FavoriteSizeUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: FavoriteSizeCreateOrConnectWithoutCustomerInput | FavoriteSizeCreateOrConnectWithoutCustomerInput[]
    upsert?: FavoriteSizeUpsertWithWhereUniqueWithoutCustomerInput | FavoriteSizeUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: FavoriteSizeCreateManyCustomerInputEnvelope
    set?: FavoriteSizeWhereUniqueInput | FavoriteSizeWhereUniqueInput[]
    disconnect?: FavoriteSizeWhereUniqueInput | FavoriteSizeWhereUniqueInput[]
    delete?: FavoriteSizeWhereUniqueInput | FavoriteSizeWhereUniqueInput[]
    connect?: FavoriteSizeWhereUniqueInput | FavoriteSizeWhereUniqueInput[]
    update?: FavoriteSizeUpdateWithWhereUniqueWithoutCustomerInput | FavoriteSizeUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: FavoriteSizeUpdateManyWithWhereWithoutCustomerInput | FavoriteSizeUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: FavoriteSizeScalarWhereInput | FavoriteSizeScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ConversionUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ConversionCreateWithoutCustomerInput, ConversionUncheckedCreateWithoutCustomerInput> | ConversionCreateWithoutCustomerInput[] | ConversionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ConversionCreateOrConnectWithoutCustomerInput | ConversionCreateOrConnectWithoutCustomerInput[]
    upsert?: ConversionUpsertWithWhereUniqueWithoutCustomerInput | ConversionUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ConversionCreateManyCustomerInputEnvelope
    set?: ConversionWhereUniqueInput | ConversionWhereUniqueInput[]
    disconnect?: ConversionWhereUniqueInput | ConversionWhereUniqueInput[]
    delete?: ConversionWhereUniqueInput | ConversionWhereUniqueInput[]
    connect?: ConversionWhereUniqueInput | ConversionWhereUniqueInput[]
    update?: ConversionUpdateWithWhereUniqueWithoutCustomerInput | ConversionUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ConversionUpdateManyWithWhereWithoutCustomerInput | ConversionUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ConversionScalarWhereInput | ConversionScalarWhereInput[]
  }

  export type FavoriteSizeUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<FavoriteSizeCreateWithoutCustomerInput, FavoriteSizeUncheckedCreateWithoutCustomerInput> | FavoriteSizeCreateWithoutCustomerInput[] | FavoriteSizeUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: FavoriteSizeCreateOrConnectWithoutCustomerInput | FavoriteSizeCreateOrConnectWithoutCustomerInput[]
    upsert?: FavoriteSizeUpsertWithWhereUniqueWithoutCustomerInput | FavoriteSizeUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: FavoriteSizeCreateManyCustomerInputEnvelope
    set?: FavoriteSizeWhereUniqueInput | FavoriteSizeWhereUniqueInput[]
    disconnect?: FavoriteSizeWhereUniqueInput | FavoriteSizeWhereUniqueInput[]
    delete?: FavoriteSizeWhereUniqueInput | FavoriteSizeWhereUniqueInput[]
    connect?: FavoriteSizeWhereUniqueInput | FavoriteSizeWhereUniqueInput[]
    update?: FavoriteSizeUpdateWithWhereUniqueWithoutCustomerInput | FavoriteSizeUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: FavoriteSizeUpdateManyWithWhereWithoutCustomerInput | FavoriteSizeUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: FavoriteSizeScalarWhereInput | FavoriteSizeScalarWhereInput[]
  }

  export type SizeCreateNestedManyWithoutCountryInput = {
    create?: XOR<SizeCreateWithoutCountryInput, SizeUncheckedCreateWithoutCountryInput> | SizeCreateWithoutCountryInput[] | SizeUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: SizeCreateOrConnectWithoutCountryInput | SizeCreateOrConnectWithoutCountryInput[]
    createMany?: SizeCreateManyCountryInputEnvelope
    connect?: SizeWhereUniqueInput | SizeWhereUniqueInput[]
  }

  export type FavoriteSizeCreateNestedManyWithoutCountryInput = {
    create?: XOR<FavoriteSizeCreateWithoutCountryInput, FavoriteSizeUncheckedCreateWithoutCountryInput> | FavoriteSizeCreateWithoutCountryInput[] | FavoriteSizeUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: FavoriteSizeCreateOrConnectWithoutCountryInput | FavoriteSizeCreateOrConnectWithoutCountryInput[]
    createMany?: FavoriteSizeCreateManyCountryInputEnvelope
    connect?: FavoriteSizeWhereUniqueInput | FavoriteSizeWhereUniqueInput[]
  }

  export type SizeUncheckedCreateNestedManyWithoutCountryInput = {
    create?: XOR<SizeCreateWithoutCountryInput, SizeUncheckedCreateWithoutCountryInput> | SizeCreateWithoutCountryInput[] | SizeUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: SizeCreateOrConnectWithoutCountryInput | SizeCreateOrConnectWithoutCountryInput[]
    createMany?: SizeCreateManyCountryInputEnvelope
    connect?: SizeWhereUniqueInput | SizeWhereUniqueInput[]
  }

  export type FavoriteSizeUncheckedCreateNestedManyWithoutCountryInput = {
    create?: XOR<FavoriteSizeCreateWithoutCountryInput, FavoriteSizeUncheckedCreateWithoutCountryInput> | FavoriteSizeCreateWithoutCountryInput[] | FavoriteSizeUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: FavoriteSizeCreateOrConnectWithoutCountryInput | FavoriteSizeCreateOrConnectWithoutCountryInput[]
    createMany?: FavoriteSizeCreateManyCountryInputEnvelope
    connect?: FavoriteSizeWhereUniqueInput | FavoriteSizeWhereUniqueInput[]
  }

  export type SizeUpdateManyWithoutCountryNestedInput = {
    create?: XOR<SizeCreateWithoutCountryInput, SizeUncheckedCreateWithoutCountryInput> | SizeCreateWithoutCountryInput[] | SizeUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: SizeCreateOrConnectWithoutCountryInput | SizeCreateOrConnectWithoutCountryInput[]
    upsert?: SizeUpsertWithWhereUniqueWithoutCountryInput | SizeUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: SizeCreateManyCountryInputEnvelope
    set?: SizeWhereUniqueInput | SizeWhereUniqueInput[]
    disconnect?: SizeWhereUniqueInput | SizeWhereUniqueInput[]
    delete?: SizeWhereUniqueInput | SizeWhereUniqueInput[]
    connect?: SizeWhereUniqueInput | SizeWhereUniqueInput[]
    update?: SizeUpdateWithWhereUniqueWithoutCountryInput | SizeUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: SizeUpdateManyWithWhereWithoutCountryInput | SizeUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: SizeScalarWhereInput | SizeScalarWhereInput[]
  }

  export type FavoriteSizeUpdateManyWithoutCountryNestedInput = {
    create?: XOR<FavoriteSizeCreateWithoutCountryInput, FavoriteSizeUncheckedCreateWithoutCountryInput> | FavoriteSizeCreateWithoutCountryInput[] | FavoriteSizeUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: FavoriteSizeCreateOrConnectWithoutCountryInput | FavoriteSizeCreateOrConnectWithoutCountryInput[]
    upsert?: FavoriteSizeUpsertWithWhereUniqueWithoutCountryInput | FavoriteSizeUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: FavoriteSizeCreateManyCountryInputEnvelope
    set?: FavoriteSizeWhereUniqueInput | FavoriteSizeWhereUniqueInput[]
    disconnect?: FavoriteSizeWhereUniqueInput | FavoriteSizeWhereUniqueInput[]
    delete?: FavoriteSizeWhereUniqueInput | FavoriteSizeWhereUniqueInput[]
    connect?: FavoriteSizeWhereUniqueInput | FavoriteSizeWhereUniqueInput[]
    update?: FavoriteSizeUpdateWithWhereUniqueWithoutCountryInput | FavoriteSizeUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: FavoriteSizeUpdateManyWithWhereWithoutCountryInput | FavoriteSizeUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: FavoriteSizeScalarWhereInput | FavoriteSizeScalarWhereInput[]
  }

  export type SizeUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: XOR<SizeCreateWithoutCountryInput, SizeUncheckedCreateWithoutCountryInput> | SizeCreateWithoutCountryInput[] | SizeUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: SizeCreateOrConnectWithoutCountryInput | SizeCreateOrConnectWithoutCountryInput[]
    upsert?: SizeUpsertWithWhereUniqueWithoutCountryInput | SizeUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: SizeCreateManyCountryInputEnvelope
    set?: SizeWhereUniqueInput | SizeWhereUniqueInput[]
    disconnect?: SizeWhereUniqueInput | SizeWhereUniqueInput[]
    delete?: SizeWhereUniqueInput | SizeWhereUniqueInput[]
    connect?: SizeWhereUniqueInput | SizeWhereUniqueInput[]
    update?: SizeUpdateWithWhereUniqueWithoutCountryInput | SizeUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: SizeUpdateManyWithWhereWithoutCountryInput | SizeUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: SizeScalarWhereInput | SizeScalarWhereInput[]
  }

  export type FavoriteSizeUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: XOR<FavoriteSizeCreateWithoutCountryInput, FavoriteSizeUncheckedCreateWithoutCountryInput> | FavoriteSizeCreateWithoutCountryInput[] | FavoriteSizeUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: FavoriteSizeCreateOrConnectWithoutCountryInput | FavoriteSizeCreateOrConnectWithoutCountryInput[]
    upsert?: FavoriteSizeUpsertWithWhereUniqueWithoutCountryInput | FavoriteSizeUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: FavoriteSizeCreateManyCountryInputEnvelope
    set?: FavoriteSizeWhereUniqueInput | FavoriteSizeWhereUniqueInput[]
    disconnect?: FavoriteSizeWhereUniqueInput | FavoriteSizeWhereUniqueInput[]
    delete?: FavoriteSizeWhereUniqueInput | FavoriteSizeWhereUniqueInput[]
    connect?: FavoriteSizeWhereUniqueInput | FavoriteSizeWhereUniqueInput[]
    update?: FavoriteSizeUpdateWithWhereUniqueWithoutCountryInput | FavoriteSizeUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: FavoriteSizeUpdateManyWithWhereWithoutCountryInput | FavoriteSizeUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: FavoriteSizeScalarWhereInput | FavoriteSizeScalarWhereInput[]
  }

  export type SizeCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SizeCreateWithoutCategoryInput, SizeUncheckedCreateWithoutCategoryInput> | SizeCreateWithoutCategoryInput[] | SizeUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SizeCreateOrConnectWithoutCategoryInput | SizeCreateOrConnectWithoutCategoryInput[]
    createMany?: SizeCreateManyCategoryInputEnvelope
    connect?: SizeWhereUniqueInput | SizeWhereUniqueInput[]
  }

  export type FavoriteSizeCreateNestedManyWithoutCategoryInput = {
    create?: XOR<FavoriteSizeCreateWithoutCategoryInput, FavoriteSizeUncheckedCreateWithoutCategoryInput> | FavoriteSizeCreateWithoutCategoryInput[] | FavoriteSizeUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FavoriteSizeCreateOrConnectWithoutCategoryInput | FavoriteSizeCreateOrConnectWithoutCategoryInput[]
    createMany?: FavoriteSizeCreateManyCategoryInputEnvelope
    connect?: FavoriteSizeWhereUniqueInput | FavoriteSizeWhereUniqueInput[]
  }

  export type SizeUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SizeCreateWithoutCategoryInput, SizeUncheckedCreateWithoutCategoryInput> | SizeCreateWithoutCategoryInput[] | SizeUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SizeCreateOrConnectWithoutCategoryInput | SizeCreateOrConnectWithoutCategoryInput[]
    createMany?: SizeCreateManyCategoryInputEnvelope
    connect?: SizeWhereUniqueInput | SizeWhereUniqueInput[]
  }

  export type FavoriteSizeUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<FavoriteSizeCreateWithoutCategoryInput, FavoriteSizeUncheckedCreateWithoutCategoryInput> | FavoriteSizeCreateWithoutCategoryInput[] | FavoriteSizeUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FavoriteSizeCreateOrConnectWithoutCategoryInput | FavoriteSizeCreateOrConnectWithoutCategoryInput[]
    createMany?: FavoriteSizeCreateManyCategoryInputEnvelope
    connect?: FavoriteSizeWhereUniqueInput | FavoriteSizeWhereUniqueInput[]
  }

  export type SizeUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SizeCreateWithoutCategoryInput, SizeUncheckedCreateWithoutCategoryInput> | SizeCreateWithoutCategoryInput[] | SizeUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SizeCreateOrConnectWithoutCategoryInput | SizeCreateOrConnectWithoutCategoryInput[]
    upsert?: SizeUpsertWithWhereUniqueWithoutCategoryInput | SizeUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SizeCreateManyCategoryInputEnvelope
    set?: SizeWhereUniqueInput | SizeWhereUniqueInput[]
    disconnect?: SizeWhereUniqueInput | SizeWhereUniqueInput[]
    delete?: SizeWhereUniqueInput | SizeWhereUniqueInput[]
    connect?: SizeWhereUniqueInput | SizeWhereUniqueInput[]
    update?: SizeUpdateWithWhereUniqueWithoutCategoryInput | SizeUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SizeUpdateManyWithWhereWithoutCategoryInput | SizeUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SizeScalarWhereInput | SizeScalarWhereInput[]
  }

  export type FavoriteSizeUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<FavoriteSizeCreateWithoutCategoryInput, FavoriteSizeUncheckedCreateWithoutCategoryInput> | FavoriteSizeCreateWithoutCategoryInput[] | FavoriteSizeUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FavoriteSizeCreateOrConnectWithoutCategoryInput | FavoriteSizeCreateOrConnectWithoutCategoryInput[]
    upsert?: FavoriteSizeUpsertWithWhereUniqueWithoutCategoryInput | FavoriteSizeUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: FavoriteSizeCreateManyCategoryInputEnvelope
    set?: FavoriteSizeWhereUniqueInput | FavoriteSizeWhereUniqueInput[]
    disconnect?: FavoriteSizeWhereUniqueInput | FavoriteSizeWhereUniqueInput[]
    delete?: FavoriteSizeWhereUniqueInput | FavoriteSizeWhereUniqueInput[]
    connect?: FavoriteSizeWhereUniqueInput | FavoriteSizeWhereUniqueInput[]
    update?: FavoriteSizeUpdateWithWhereUniqueWithoutCategoryInput | FavoriteSizeUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: FavoriteSizeUpdateManyWithWhereWithoutCategoryInput | FavoriteSizeUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: FavoriteSizeScalarWhereInput | FavoriteSizeScalarWhereInput[]
  }

  export type SizeUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SizeCreateWithoutCategoryInput, SizeUncheckedCreateWithoutCategoryInput> | SizeCreateWithoutCategoryInput[] | SizeUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SizeCreateOrConnectWithoutCategoryInput | SizeCreateOrConnectWithoutCategoryInput[]
    upsert?: SizeUpsertWithWhereUniqueWithoutCategoryInput | SizeUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SizeCreateManyCategoryInputEnvelope
    set?: SizeWhereUniqueInput | SizeWhereUniqueInput[]
    disconnect?: SizeWhereUniqueInput | SizeWhereUniqueInput[]
    delete?: SizeWhereUniqueInput | SizeWhereUniqueInput[]
    connect?: SizeWhereUniqueInput | SizeWhereUniqueInput[]
    update?: SizeUpdateWithWhereUniqueWithoutCategoryInput | SizeUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SizeUpdateManyWithWhereWithoutCategoryInput | SizeUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SizeScalarWhereInput | SizeScalarWhereInput[]
  }

  export type FavoriteSizeUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<FavoriteSizeCreateWithoutCategoryInput, FavoriteSizeUncheckedCreateWithoutCategoryInput> | FavoriteSizeCreateWithoutCategoryInput[] | FavoriteSizeUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FavoriteSizeCreateOrConnectWithoutCategoryInput | FavoriteSizeCreateOrConnectWithoutCategoryInput[]
    upsert?: FavoriteSizeUpsertWithWhereUniqueWithoutCategoryInput | FavoriteSizeUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: FavoriteSizeCreateManyCategoryInputEnvelope
    set?: FavoriteSizeWhereUniqueInput | FavoriteSizeWhereUniqueInput[]
    disconnect?: FavoriteSizeWhereUniqueInput | FavoriteSizeWhereUniqueInput[]
    delete?: FavoriteSizeWhereUniqueInput | FavoriteSizeWhereUniqueInput[]
    connect?: FavoriteSizeWhereUniqueInput | FavoriteSizeWhereUniqueInput[]
    update?: FavoriteSizeUpdateWithWhereUniqueWithoutCategoryInput | FavoriteSizeUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: FavoriteSizeUpdateManyWithWhereWithoutCategoryInput | FavoriteSizeUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: FavoriteSizeScalarWhereInput | FavoriteSizeScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutSizesInput = {
    create?: XOR<CategoryCreateWithoutSizesInput, CategoryUncheckedCreateWithoutSizesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSizesInput
    connect?: CategoryWhereUniqueInput
  }

  export type CountryCreateNestedOneWithoutSizesInput = {
    create?: XOR<CountryCreateWithoutSizesInput, CountryUncheckedCreateWithoutSizesInput>
    connectOrCreate?: CountryCreateOrConnectWithoutSizesInput
    connect?: CountryWhereUniqueInput
  }

  export type FavoriteSizeCreateNestedManyWithoutSizeInput = {
    create?: XOR<FavoriteSizeCreateWithoutSizeInput, FavoriteSizeUncheckedCreateWithoutSizeInput> | FavoriteSizeCreateWithoutSizeInput[] | FavoriteSizeUncheckedCreateWithoutSizeInput[]
    connectOrCreate?: FavoriteSizeCreateOrConnectWithoutSizeInput | FavoriteSizeCreateOrConnectWithoutSizeInput[]
    createMany?: FavoriteSizeCreateManySizeInputEnvelope
    connect?: FavoriteSizeWhereUniqueInput | FavoriteSizeWhereUniqueInput[]
  }

  export type ConversionCreateNestedManyWithoutFromSizeInput = {
    create?: XOR<ConversionCreateWithoutFromSizeInput, ConversionUncheckedCreateWithoutFromSizeInput> | ConversionCreateWithoutFromSizeInput[] | ConversionUncheckedCreateWithoutFromSizeInput[]
    connectOrCreate?: ConversionCreateOrConnectWithoutFromSizeInput | ConversionCreateOrConnectWithoutFromSizeInput[]
    createMany?: ConversionCreateManyFromSizeInputEnvelope
    connect?: ConversionWhereUniqueInput | ConversionWhereUniqueInput[]
  }

  export type ConversionCreateNestedManyWithoutToSizeInput = {
    create?: XOR<ConversionCreateWithoutToSizeInput, ConversionUncheckedCreateWithoutToSizeInput> | ConversionCreateWithoutToSizeInput[] | ConversionUncheckedCreateWithoutToSizeInput[]
    connectOrCreate?: ConversionCreateOrConnectWithoutToSizeInput | ConversionCreateOrConnectWithoutToSizeInput[]
    createMany?: ConversionCreateManyToSizeInputEnvelope
    connect?: ConversionWhereUniqueInput | ConversionWhereUniqueInput[]
  }

  export type FavoriteSizeUncheckedCreateNestedManyWithoutSizeInput = {
    create?: XOR<FavoriteSizeCreateWithoutSizeInput, FavoriteSizeUncheckedCreateWithoutSizeInput> | FavoriteSizeCreateWithoutSizeInput[] | FavoriteSizeUncheckedCreateWithoutSizeInput[]
    connectOrCreate?: FavoriteSizeCreateOrConnectWithoutSizeInput | FavoriteSizeCreateOrConnectWithoutSizeInput[]
    createMany?: FavoriteSizeCreateManySizeInputEnvelope
    connect?: FavoriteSizeWhereUniqueInput | FavoriteSizeWhereUniqueInput[]
  }

  export type ConversionUncheckedCreateNestedManyWithoutFromSizeInput = {
    create?: XOR<ConversionCreateWithoutFromSizeInput, ConversionUncheckedCreateWithoutFromSizeInput> | ConversionCreateWithoutFromSizeInput[] | ConversionUncheckedCreateWithoutFromSizeInput[]
    connectOrCreate?: ConversionCreateOrConnectWithoutFromSizeInput | ConversionCreateOrConnectWithoutFromSizeInput[]
    createMany?: ConversionCreateManyFromSizeInputEnvelope
    connect?: ConversionWhereUniqueInput | ConversionWhereUniqueInput[]
  }

  export type ConversionUncheckedCreateNestedManyWithoutToSizeInput = {
    create?: XOR<ConversionCreateWithoutToSizeInput, ConversionUncheckedCreateWithoutToSizeInput> | ConversionCreateWithoutToSizeInput[] | ConversionUncheckedCreateWithoutToSizeInput[]
    connectOrCreate?: ConversionCreateOrConnectWithoutToSizeInput | ConversionCreateOrConnectWithoutToSizeInput[]
    createMany?: ConversionCreateManyToSizeInputEnvelope
    connect?: ConversionWhereUniqueInput | ConversionWhereUniqueInput[]
  }

  export type CategoryUpdateOneRequiredWithoutSizesNestedInput = {
    create?: XOR<CategoryCreateWithoutSizesInput, CategoryUncheckedCreateWithoutSizesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSizesInput
    upsert?: CategoryUpsertWithoutSizesInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutSizesInput, CategoryUpdateWithoutSizesInput>, CategoryUncheckedUpdateWithoutSizesInput>
  }

  export type CountryUpdateOneRequiredWithoutSizesNestedInput = {
    create?: XOR<CountryCreateWithoutSizesInput, CountryUncheckedCreateWithoutSizesInput>
    connectOrCreate?: CountryCreateOrConnectWithoutSizesInput
    upsert?: CountryUpsertWithoutSizesInput
    connect?: CountryWhereUniqueInput
    update?: XOR<XOR<CountryUpdateToOneWithWhereWithoutSizesInput, CountryUpdateWithoutSizesInput>, CountryUncheckedUpdateWithoutSizesInput>
  }

  export type FavoriteSizeUpdateManyWithoutSizeNestedInput = {
    create?: XOR<FavoriteSizeCreateWithoutSizeInput, FavoriteSizeUncheckedCreateWithoutSizeInput> | FavoriteSizeCreateWithoutSizeInput[] | FavoriteSizeUncheckedCreateWithoutSizeInput[]
    connectOrCreate?: FavoriteSizeCreateOrConnectWithoutSizeInput | FavoriteSizeCreateOrConnectWithoutSizeInput[]
    upsert?: FavoriteSizeUpsertWithWhereUniqueWithoutSizeInput | FavoriteSizeUpsertWithWhereUniqueWithoutSizeInput[]
    createMany?: FavoriteSizeCreateManySizeInputEnvelope
    set?: FavoriteSizeWhereUniqueInput | FavoriteSizeWhereUniqueInput[]
    disconnect?: FavoriteSizeWhereUniqueInput | FavoriteSizeWhereUniqueInput[]
    delete?: FavoriteSizeWhereUniqueInput | FavoriteSizeWhereUniqueInput[]
    connect?: FavoriteSizeWhereUniqueInput | FavoriteSizeWhereUniqueInput[]
    update?: FavoriteSizeUpdateWithWhereUniqueWithoutSizeInput | FavoriteSizeUpdateWithWhereUniqueWithoutSizeInput[]
    updateMany?: FavoriteSizeUpdateManyWithWhereWithoutSizeInput | FavoriteSizeUpdateManyWithWhereWithoutSizeInput[]
    deleteMany?: FavoriteSizeScalarWhereInput | FavoriteSizeScalarWhereInput[]
  }

  export type ConversionUpdateManyWithoutFromSizeNestedInput = {
    create?: XOR<ConversionCreateWithoutFromSizeInput, ConversionUncheckedCreateWithoutFromSizeInput> | ConversionCreateWithoutFromSizeInput[] | ConversionUncheckedCreateWithoutFromSizeInput[]
    connectOrCreate?: ConversionCreateOrConnectWithoutFromSizeInput | ConversionCreateOrConnectWithoutFromSizeInput[]
    upsert?: ConversionUpsertWithWhereUniqueWithoutFromSizeInput | ConversionUpsertWithWhereUniqueWithoutFromSizeInput[]
    createMany?: ConversionCreateManyFromSizeInputEnvelope
    set?: ConversionWhereUniqueInput | ConversionWhereUniqueInput[]
    disconnect?: ConversionWhereUniqueInput | ConversionWhereUniqueInput[]
    delete?: ConversionWhereUniqueInput | ConversionWhereUniqueInput[]
    connect?: ConversionWhereUniqueInput | ConversionWhereUniqueInput[]
    update?: ConversionUpdateWithWhereUniqueWithoutFromSizeInput | ConversionUpdateWithWhereUniqueWithoutFromSizeInput[]
    updateMany?: ConversionUpdateManyWithWhereWithoutFromSizeInput | ConversionUpdateManyWithWhereWithoutFromSizeInput[]
    deleteMany?: ConversionScalarWhereInput | ConversionScalarWhereInput[]
  }

  export type ConversionUpdateManyWithoutToSizeNestedInput = {
    create?: XOR<ConversionCreateWithoutToSizeInput, ConversionUncheckedCreateWithoutToSizeInput> | ConversionCreateWithoutToSizeInput[] | ConversionUncheckedCreateWithoutToSizeInput[]
    connectOrCreate?: ConversionCreateOrConnectWithoutToSizeInput | ConversionCreateOrConnectWithoutToSizeInput[]
    upsert?: ConversionUpsertWithWhereUniqueWithoutToSizeInput | ConversionUpsertWithWhereUniqueWithoutToSizeInput[]
    createMany?: ConversionCreateManyToSizeInputEnvelope
    set?: ConversionWhereUniqueInput | ConversionWhereUniqueInput[]
    disconnect?: ConversionWhereUniqueInput | ConversionWhereUniqueInput[]
    delete?: ConversionWhereUniqueInput | ConversionWhereUniqueInput[]
    connect?: ConversionWhereUniqueInput | ConversionWhereUniqueInput[]
    update?: ConversionUpdateWithWhereUniqueWithoutToSizeInput | ConversionUpdateWithWhereUniqueWithoutToSizeInput[]
    updateMany?: ConversionUpdateManyWithWhereWithoutToSizeInput | ConversionUpdateManyWithWhereWithoutToSizeInput[]
    deleteMany?: ConversionScalarWhereInput | ConversionScalarWhereInput[]
  }

  export type FavoriteSizeUncheckedUpdateManyWithoutSizeNestedInput = {
    create?: XOR<FavoriteSizeCreateWithoutSizeInput, FavoriteSizeUncheckedCreateWithoutSizeInput> | FavoriteSizeCreateWithoutSizeInput[] | FavoriteSizeUncheckedCreateWithoutSizeInput[]
    connectOrCreate?: FavoriteSizeCreateOrConnectWithoutSizeInput | FavoriteSizeCreateOrConnectWithoutSizeInput[]
    upsert?: FavoriteSizeUpsertWithWhereUniqueWithoutSizeInput | FavoriteSizeUpsertWithWhereUniqueWithoutSizeInput[]
    createMany?: FavoriteSizeCreateManySizeInputEnvelope
    set?: FavoriteSizeWhereUniqueInput | FavoriteSizeWhereUniqueInput[]
    disconnect?: FavoriteSizeWhereUniqueInput | FavoriteSizeWhereUniqueInput[]
    delete?: FavoriteSizeWhereUniqueInput | FavoriteSizeWhereUniqueInput[]
    connect?: FavoriteSizeWhereUniqueInput | FavoriteSizeWhereUniqueInput[]
    update?: FavoriteSizeUpdateWithWhereUniqueWithoutSizeInput | FavoriteSizeUpdateWithWhereUniqueWithoutSizeInput[]
    updateMany?: FavoriteSizeUpdateManyWithWhereWithoutSizeInput | FavoriteSizeUpdateManyWithWhereWithoutSizeInput[]
    deleteMany?: FavoriteSizeScalarWhereInput | FavoriteSizeScalarWhereInput[]
  }

  export type ConversionUncheckedUpdateManyWithoutFromSizeNestedInput = {
    create?: XOR<ConversionCreateWithoutFromSizeInput, ConversionUncheckedCreateWithoutFromSizeInput> | ConversionCreateWithoutFromSizeInput[] | ConversionUncheckedCreateWithoutFromSizeInput[]
    connectOrCreate?: ConversionCreateOrConnectWithoutFromSizeInput | ConversionCreateOrConnectWithoutFromSizeInput[]
    upsert?: ConversionUpsertWithWhereUniqueWithoutFromSizeInput | ConversionUpsertWithWhereUniqueWithoutFromSizeInput[]
    createMany?: ConversionCreateManyFromSizeInputEnvelope
    set?: ConversionWhereUniqueInput | ConversionWhereUniqueInput[]
    disconnect?: ConversionWhereUniqueInput | ConversionWhereUniqueInput[]
    delete?: ConversionWhereUniqueInput | ConversionWhereUniqueInput[]
    connect?: ConversionWhereUniqueInput | ConversionWhereUniqueInput[]
    update?: ConversionUpdateWithWhereUniqueWithoutFromSizeInput | ConversionUpdateWithWhereUniqueWithoutFromSizeInput[]
    updateMany?: ConversionUpdateManyWithWhereWithoutFromSizeInput | ConversionUpdateManyWithWhereWithoutFromSizeInput[]
    deleteMany?: ConversionScalarWhereInput | ConversionScalarWhereInput[]
  }

  export type ConversionUncheckedUpdateManyWithoutToSizeNestedInput = {
    create?: XOR<ConversionCreateWithoutToSizeInput, ConversionUncheckedCreateWithoutToSizeInput> | ConversionCreateWithoutToSizeInput[] | ConversionUncheckedCreateWithoutToSizeInput[]
    connectOrCreate?: ConversionCreateOrConnectWithoutToSizeInput | ConversionCreateOrConnectWithoutToSizeInput[]
    upsert?: ConversionUpsertWithWhereUniqueWithoutToSizeInput | ConversionUpsertWithWhereUniqueWithoutToSizeInput[]
    createMany?: ConversionCreateManyToSizeInputEnvelope
    set?: ConversionWhereUniqueInput | ConversionWhereUniqueInput[]
    disconnect?: ConversionWhereUniqueInput | ConversionWhereUniqueInput[]
    delete?: ConversionWhereUniqueInput | ConversionWhereUniqueInput[]
    connect?: ConversionWhereUniqueInput | ConversionWhereUniqueInput[]
    update?: ConversionUpdateWithWhereUniqueWithoutToSizeInput | ConversionUpdateWithWhereUniqueWithoutToSizeInput[]
    updateMany?: ConversionUpdateManyWithWhereWithoutToSizeInput | ConversionUpdateManyWithWhereWithoutToSizeInput[]
    deleteMany?: ConversionScalarWhereInput | ConversionScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutConversionsInput = {
    create?: XOR<CustomerCreateWithoutConversionsInput, CustomerUncheckedCreateWithoutConversionsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutConversionsInput
    connect?: CustomerWhereUniqueInput
  }

  export type SizeCreateNestedOneWithoutFromConversionsInput = {
    create?: XOR<SizeCreateWithoutFromConversionsInput, SizeUncheckedCreateWithoutFromConversionsInput>
    connectOrCreate?: SizeCreateOrConnectWithoutFromConversionsInput
    connect?: SizeWhereUniqueInput
  }

  export type SizeCreateNestedOneWithoutToConversionsInput = {
    create?: XOR<SizeCreateWithoutToConversionsInput, SizeUncheckedCreateWithoutToConversionsInput>
    connectOrCreate?: SizeCreateOrConnectWithoutToConversionsInput
    connect?: SizeWhereUniqueInput
  }

  export type CustomerUpdateOneRequiredWithoutConversionsNestedInput = {
    create?: XOR<CustomerCreateWithoutConversionsInput, CustomerUncheckedCreateWithoutConversionsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutConversionsInput
    upsert?: CustomerUpsertWithoutConversionsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutConversionsInput, CustomerUpdateWithoutConversionsInput>, CustomerUncheckedUpdateWithoutConversionsInput>
  }

  export type SizeUpdateOneRequiredWithoutFromConversionsNestedInput = {
    create?: XOR<SizeCreateWithoutFromConversionsInput, SizeUncheckedCreateWithoutFromConversionsInput>
    connectOrCreate?: SizeCreateOrConnectWithoutFromConversionsInput
    upsert?: SizeUpsertWithoutFromConversionsInput
    connect?: SizeWhereUniqueInput
    update?: XOR<XOR<SizeUpdateToOneWithWhereWithoutFromConversionsInput, SizeUpdateWithoutFromConversionsInput>, SizeUncheckedUpdateWithoutFromConversionsInput>
  }

  export type SizeUpdateOneRequiredWithoutToConversionsNestedInput = {
    create?: XOR<SizeCreateWithoutToConversionsInput, SizeUncheckedCreateWithoutToConversionsInput>
    connectOrCreate?: SizeCreateOrConnectWithoutToConversionsInput
    upsert?: SizeUpsertWithoutToConversionsInput
    connect?: SizeWhereUniqueInput
    update?: XOR<XOR<SizeUpdateToOneWithWhereWithoutToConversionsInput, SizeUpdateWithoutToConversionsInput>, SizeUncheckedUpdateWithoutToConversionsInput>
  }

  export type FavoriteSizeCreategenderInput = {
    set: $Enums.Gender[]
  }

  export type CustomerCreateNestedOneWithoutFavoriteSizesInput = {
    create?: XOR<CustomerCreateWithoutFavoriteSizesInput, CustomerUncheckedCreateWithoutFavoriteSizesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutFavoriteSizesInput
    connect?: CustomerWhereUniqueInput
  }

  export type CountryCreateNestedOneWithoutFavoriteSizesInput = {
    create?: XOR<CountryCreateWithoutFavoriteSizesInput, CountryUncheckedCreateWithoutFavoriteSizesInput>
    connectOrCreate?: CountryCreateOrConnectWithoutFavoriteSizesInput
    connect?: CountryWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutFavoriteSizesInput = {
    create?: XOR<CategoryCreateWithoutFavoriteSizesInput, CategoryUncheckedCreateWithoutFavoriteSizesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutFavoriteSizesInput
    connect?: CategoryWhereUniqueInput
  }

  export type SizeCreateNestedOneWithoutFavoriteSizesInput = {
    create?: XOR<SizeCreateWithoutFavoriteSizesInput, SizeUncheckedCreateWithoutFavoriteSizesInput>
    connectOrCreate?: SizeCreateOrConnectWithoutFavoriteSizesInput
    connect?: SizeWhereUniqueInput
  }

  export type FavoriteSizeUpdategenderInput = {
    set?: $Enums.Gender[]
    push?: $Enums.Gender | $Enums.Gender[]
  }

  export type CustomerUpdateOneRequiredWithoutFavoriteSizesNestedInput = {
    create?: XOR<CustomerCreateWithoutFavoriteSizesInput, CustomerUncheckedCreateWithoutFavoriteSizesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutFavoriteSizesInput
    upsert?: CustomerUpsertWithoutFavoriteSizesInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutFavoriteSizesInput, CustomerUpdateWithoutFavoriteSizesInput>, CustomerUncheckedUpdateWithoutFavoriteSizesInput>
  }

  export type CountryUpdateOneRequiredWithoutFavoriteSizesNestedInput = {
    create?: XOR<CountryCreateWithoutFavoriteSizesInput, CountryUncheckedCreateWithoutFavoriteSizesInput>
    connectOrCreate?: CountryCreateOrConnectWithoutFavoriteSizesInput
    upsert?: CountryUpsertWithoutFavoriteSizesInput
    connect?: CountryWhereUniqueInput
    update?: XOR<XOR<CountryUpdateToOneWithWhereWithoutFavoriteSizesInput, CountryUpdateWithoutFavoriteSizesInput>, CountryUncheckedUpdateWithoutFavoriteSizesInput>
  }

  export type CategoryUpdateOneRequiredWithoutFavoriteSizesNestedInput = {
    create?: XOR<CategoryCreateWithoutFavoriteSizesInput, CategoryUncheckedCreateWithoutFavoriteSizesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutFavoriteSizesInput
    upsert?: CategoryUpsertWithoutFavoriteSizesInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutFavoriteSizesInput, CategoryUpdateWithoutFavoriteSizesInput>, CategoryUncheckedUpdateWithoutFavoriteSizesInput>
  }

  export type SizeUpdateOneRequiredWithoutFavoriteSizesNestedInput = {
    create?: XOR<SizeCreateWithoutFavoriteSizesInput, SizeUncheckedCreateWithoutFavoriteSizesInput>
    connectOrCreate?: SizeCreateOrConnectWithoutFavoriteSizesInput
    upsert?: SizeUpsertWithoutFavoriteSizesInput
    connect?: SizeWhereUniqueInput
    update?: XOR<XOR<SizeUpdateToOneWithWhereWithoutFavoriteSizesInput, SizeUpdateWithoutFavoriteSizesInput>, SizeUncheckedUpdateWithoutFavoriteSizesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ConversionCreateWithoutCustomerInput = {
    fromSize: SizeCreateNestedOneWithoutFromConversionsInput
    toSize: SizeCreateNestedOneWithoutToConversionsInput
  }

  export type ConversionUncheckedCreateWithoutCustomerInput = {
    id?: number
    from_size_id: number
    to_size_id: number
  }

  export type ConversionCreateOrConnectWithoutCustomerInput = {
    where: ConversionWhereUniqueInput
    create: XOR<ConversionCreateWithoutCustomerInput, ConversionUncheckedCreateWithoutCustomerInput>
  }

  export type ConversionCreateManyCustomerInputEnvelope = {
    data: ConversionCreateManyCustomerInput | ConversionCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type FavoriteSizeCreateWithoutCustomerInput = {
    title: string
    description?: string | null
    gender?: FavoriteSizeCreategenderInput | $Enums.Gender[]
    country: CountryCreateNestedOneWithoutFavoriteSizesInput
    category: CategoryCreateNestedOneWithoutFavoriteSizesInput
    size: SizeCreateNestedOneWithoutFavoriteSizesInput
  }

  export type FavoriteSizeUncheckedCreateWithoutCustomerInput = {
    id?: number
    title: string
    description?: string | null
    gender?: FavoriteSizeCreategenderInput | $Enums.Gender[]
    country_id: number
    category_id: number
    size_id: number
  }

  export type FavoriteSizeCreateOrConnectWithoutCustomerInput = {
    where: FavoriteSizeWhereUniqueInput
    create: XOR<FavoriteSizeCreateWithoutCustomerInput, FavoriteSizeUncheckedCreateWithoutCustomerInput>
  }

  export type FavoriteSizeCreateManyCustomerInputEnvelope = {
    data: FavoriteSizeCreateManyCustomerInput | FavoriteSizeCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type ConversionUpsertWithWhereUniqueWithoutCustomerInput = {
    where: ConversionWhereUniqueInput
    update: XOR<ConversionUpdateWithoutCustomerInput, ConversionUncheckedUpdateWithoutCustomerInput>
    create: XOR<ConversionCreateWithoutCustomerInput, ConversionUncheckedCreateWithoutCustomerInput>
  }

  export type ConversionUpdateWithWhereUniqueWithoutCustomerInput = {
    where: ConversionWhereUniqueInput
    data: XOR<ConversionUpdateWithoutCustomerInput, ConversionUncheckedUpdateWithoutCustomerInput>
  }

  export type ConversionUpdateManyWithWhereWithoutCustomerInput = {
    where: ConversionScalarWhereInput
    data: XOR<ConversionUpdateManyMutationInput, ConversionUncheckedUpdateManyWithoutCustomerInput>
  }

  export type ConversionScalarWhereInput = {
    AND?: ConversionScalarWhereInput | ConversionScalarWhereInput[]
    OR?: ConversionScalarWhereInput[]
    NOT?: ConversionScalarWhereInput | ConversionScalarWhereInput[]
    id?: IntFilter<"Conversion"> | number
    customer_id?: IntFilter<"Conversion"> | number
    from_size_id?: IntFilter<"Conversion"> | number
    to_size_id?: IntFilter<"Conversion"> | number
  }

  export type FavoriteSizeUpsertWithWhereUniqueWithoutCustomerInput = {
    where: FavoriteSizeWhereUniqueInput
    update: XOR<FavoriteSizeUpdateWithoutCustomerInput, FavoriteSizeUncheckedUpdateWithoutCustomerInput>
    create: XOR<FavoriteSizeCreateWithoutCustomerInput, FavoriteSizeUncheckedCreateWithoutCustomerInput>
  }

  export type FavoriteSizeUpdateWithWhereUniqueWithoutCustomerInput = {
    where: FavoriteSizeWhereUniqueInput
    data: XOR<FavoriteSizeUpdateWithoutCustomerInput, FavoriteSizeUncheckedUpdateWithoutCustomerInput>
  }

  export type FavoriteSizeUpdateManyWithWhereWithoutCustomerInput = {
    where: FavoriteSizeScalarWhereInput
    data: XOR<FavoriteSizeUpdateManyMutationInput, FavoriteSizeUncheckedUpdateManyWithoutCustomerInput>
  }

  export type FavoriteSizeScalarWhereInput = {
    AND?: FavoriteSizeScalarWhereInput | FavoriteSizeScalarWhereInput[]
    OR?: FavoriteSizeScalarWhereInput[]
    NOT?: FavoriteSizeScalarWhereInput | FavoriteSizeScalarWhereInput[]
    id?: IntFilter<"FavoriteSize"> | number
    customer_id?: IntFilter<"FavoriteSize"> | number
    title?: StringFilter<"FavoriteSize"> | string
    description?: StringNullableFilter<"FavoriteSize"> | string | null
    gender?: EnumGenderNullableListFilter<"FavoriteSize">
    country_id?: IntFilter<"FavoriteSize"> | number
    category_id?: IntFilter<"FavoriteSize"> | number
    size_id?: IntFilter<"FavoriteSize"> | number
  }

  export type SizeCreateWithoutCountryInput = {
    size_label: string
    category: CategoryCreateNestedOneWithoutSizesInput
    favoriteSizes?: FavoriteSizeCreateNestedManyWithoutSizeInput
    fromConversions?: ConversionCreateNestedManyWithoutFromSizeInput
    toConversions?: ConversionCreateNestedManyWithoutToSizeInput
  }

  export type SizeUncheckedCreateWithoutCountryInput = {
    id?: number
    category_id: number
    size_label: string
    favoriteSizes?: FavoriteSizeUncheckedCreateNestedManyWithoutSizeInput
    fromConversions?: ConversionUncheckedCreateNestedManyWithoutFromSizeInput
    toConversions?: ConversionUncheckedCreateNestedManyWithoutToSizeInput
  }

  export type SizeCreateOrConnectWithoutCountryInput = {
    where: SizeWhereUniqueInput
    create: XOR<SizeCreateWithoutCountryInput, SizeUncheckedCreateWithoutCountryInput>
  }

  export type SizeCreateManyCountryInputEnvelope = {
    data: SizeCreateManyCountryInput | SizeCreateManyCountryInput[]
    skipDuplicates?: boolean
  }

  export type FavoriteSizeCreateWithoutCountryInput = {
    title: string
    description?: string | null
    gender?: FavoriteSizeCreategenderInput | $Enums.Gender[]
    customer: CustomerCreateNestedOneWithoutFavoriteSizesInput
    category: CategoryCreateNestedOneWithoutFavoriteSizesInput
    size: SizeCreateNestedOneWithoutFavoriteSizesInput
  }

  export type FavoriteSizeUncheckedCreateWithoutCountryInput = {
    id?: number
    customer_id: number
    title: string
    description?: string | null
    gender?: FavoriteSizeCreategenderInput | $Enums.Gender[]
    category_id: number
    size_id: number
  }

  export type FavoriteSizeCreateOrConnectWithoutCountryInput = {
    where: FavoriteSizeWhereUniqueInput
    create: XOR<FavoriteSizeCreateWithoutCountryInput, FavoriteSizeUncheckedCreateWithoutCountryInput>
  }

  export type FavoriteSizeCreateManyCountryInputEnvelope = {
    data: FavoriteSizeCreateManyCountryInput | FavoriteSizeCreateManyCountryInput[]
    skipDuplicates?: boolean
  }

  export type SizeUpsertWithWhereUniqueWithoutCountryInput = {
    where: SizeWhereUniqueInput
    update: XOR<SizeUpdateWithoutCountryInput, SizeUncheckedUpdateWithoutCountryInput>
    create: XOR<SizeCreateWithoutCountryInput, SizeUncheckedCreateWithoutCountryInput>
  }

  export type SizeUpdateWithWhereUniqueWithoutCountryInput = {
    where: SizeWhereUniqueInput
    data: XOR<SizeUpdateWithoutCountryInput, SizeUncheckedUpdateWithoutCountryInput>
  }

  export type SizeUpdateManyWithWhereWithoutCountryInput = {
    where: SizeScalarWhereInput
    data: XOR<SizeUpdateManyMutationInput, SizeUncheckedUpdateManyWithoutCountryInput>
  }

  export type SizeScalarWhereInput = {
    AND?: SizeScalarWhereInput | SizeScalarWhereInput[]
    OR?: SizeScalarWhereInput[]
    NOT?: SizeScalarWhereInput | SizeScalarWhereInput[]
    id?: IntFilter<"Size"> | number
    category_id?: IntFilter<"Size"> | number
    country_id?: IntFilter<"Size"> | number
    size_label?: StringFilter<"Size"> | string
  }

  export type FavoriteSizeUpsertWithWhereUniqueWithoutCountryInput = {
    where: FavoriteSizeWhereUniqueInput
    update: XOR<FavoriteSizeUpdateWithoutCountryInput, FavoriteSizeUncheckedUpdateWithoutCountryInput>
    create: XOR<FavoriteSizeCreateWithoutCountryInput, FavoriteSizeUncheckedCreateWithoutCountryInput>
  }

  export type FavoriteSizeUpdateWithWhereUniqueWithoutCountryInput = {
    where: FavoriteSizeWhereUniqueInput
    data: XOR<FavoriteSizeUpdateWithoutCountryInput, FavoriteSizeUncheckedUpdateWithoutCountryInput>
  }

  export type FavoriteSizeUpdateManyWithWhereWithoutCountryInput = {
    where: FavoriteSizeScalarWhereInput
    data: XOR<FavoriteSizeUpdateManyMutationInput, FavoriteSizeUncheckedUpdateManyWithoutCountryInput>
  }

  export type SizeCreateWithoutCategoryInput = {
    size_label: string
    country: CountryCreateNestedOneWithoutSizesInput
    favoriteSizes?: FavoriteSizeCreateNestedManyWithoutSizeInput
    fromConversions?: ConversionCreateNestedManyWithoutFromSizeInput
    toConversions?: ConversionCreateNestedManyWithoutToSizeInput
  }

  export type SizeUncheckedCreateWithoutCategoryInput = {
    id?: number
    country_id: number
    size_label: string
    favoriteSizes?: FavoriteSizeUncheckedCreateNestedManyWithoutSizeInput
    fromConversions?: ConversionUncheckedCreateNestedManyWithoutFromSizeInput
    toConversions?: ConversionUncheckedCreateNestedManyWithoutToSizeInput
  }

  export type SizeCreateOrConnectWithoutCategoryInput = {
    where: SizeWhereUniqueInput
    create: XOR<SizeCreateWithoutCategoryInput, SizeUncheckedCreateWithoutCategoryInput>
  }

  export type SizeCreateManyCategoryInputEnvelope = {
    data: SizeCreateManyCategoryInput | SizeCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type FavoriteSizeCreateWithoutCategoryInput = {
    title: string
    description?: string | null
    gender?: FavoriteSizeCreategenderInput | $Enums.Gender[]
    customer: CustomerCreateNestedOneWithoutFavoriteSizesInput
    country: CountryCreateNestedOneWithoutFavoriteSizesInput
    size: SizeCreateNestedOneWithoutFavoriteSizesInput
  }

  export type FavoriteSizeUncheckedCreateWithoutCategoryInput = {
    id?: number
    customer_id: number
    title: string
    description?: string | null
    gender?: FavoriteSizeCreategenderInput | $Enums.Gender[]
    country_id: number
    size_id: number
  }

  export type FavoriteSizeCreateOrConnectWithoutCategoryInput = {
    where: FavoriteSizeWhereUniqueInput
    create: XOR<FavoriteSizeCreateWithoutCategoryInput, FavoriteSizeUncheckedCreateWithoutCategoryInput>
  }

  export type FavoriteSizeCreateManyCategoryInputEnvelope = {
    data: FavoriteSizeCreateManyCategoryInput | FavoriteSizeCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type SizeUpsertWithWhereUniqueWithoutCategoryInput = {
    where: SizeWhereUniqueInput
    update: XOR<SizeUpdateWithoutCategoryInput, SizeUncheckedUpdateWithoutCategoryInput>
    create: XOR<SizeCreateWithoutCategoryInput, SizeUncheckedCreateWithoutCategoryInput>
  }

  export type SizeUpdateWithWhereUniqueWithoutCategoryInput = {
    where: SizeWhereUniqueInput
    data: XOR<SizeUpdateWithoutCategoryInput, SizeUncheckedUpdateWithoutCategoryInput>
  }

  export type SizeUpdateManyWithWhereWithoutCategoryInput = {
    where: SizeScalarWhereInput
    data: XOR<SizeUpdateManyMutationInput, SizeUncheckedUpdateManyWithoutCategoryInput>
  }

  export type FavoriteSizeUpsertWithWhereUniqueWithoutCategoryInput = {
    where: FavoriteSizeWhereUniqueInput
    update: XOR<FavoriteSizeUpdateWithoutCategoryInput, FavoriteSizeUncheckedUpdateWithoutCategoryInput>
    create: XOR<FavoriteSizeCreateWithoutCategoryInput, FavoriteSizeUncheckedCreateWithoutCategoryInput>
  }

  export type FavoriteSizeUpdateWithWhereUniqueWithoutCategoryInput = {
    where: FavoriteSizeWhereUniqueInput
    data: XOR<FavoriteSizeUpdateWithoutCategoryInput, FavoriteSizeUncheckedUpdateWithoutCategoryInput>
  }

  export type FavoriteSizeUpdateManyWithWhereWithoutCategoryInput = {
    where: FavoriteSizeScalarWhereInput
    data: XOR<FavoriteSizeUpdateManyMutationInput, FavoriteSizeUncheckedUpdateManyWithoutCategoryInput>
  }

  export type CategoryCreateWithoutSizesInput = {
    type: string
    favoriteSizes?: FavoriteSizeCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutSizesInput = {
    id?: number
    type: string
    favoriteSizes?: FavoriteSizeUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutSizesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutSizesInput, CategoryUncheckedCreateWithoutSizesInput>
  }

  export type CountryCreateWithoutSizesInput = {
    code: string
    name: string
    favoriteSizes?: FavoriteSizeCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateWithoutSizesInput = {
    id?: number
    code: string
    name: string
    favoriteSizes?: FavoriteSizeUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryCreateOrConnectWithoutSizesInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutSizesInput, CountryUncheckedCreateWithoutSizesInput>
  }

  export type FavoriteSizeCreateWithoutSizeInput = {
    title: string
    description?: string | null
    gender?: FavoriteSizeCreategenderInput | $Enums.Gender[]
    customer: CustomerCreateNestedOneWithoutFavoriteSizesInput
    country: CountryCreateNestedOneWithoutFavoriteSizesInput
    category: CategoryCreateNestedOneWithoutFavoriteSizesInput
  }

  export type FavoriteSizeUncheckedCreateWithoutSizeInput = {
    id?: number
    customer_id: number
    title: string
    description?: string | null
    gender?: FavoriteSizeCreategenderInput | $Enums.Gender[]
    country_id: number
    category_id: number
  }

  export type FavoriteSizeCreateOrConnectWithoutSizeInput = {
    where: FavoriteSizeWhereUniqueInput
    create: XOR<FavoriteSizeCreateWithoutSizeInput, FavoriteSizeUncheckedCreateWithoutSizeInput>
  }

  export type FavoriteSizeCreateManySizeInputEnvelope = {
    data: FavoriteSizeCreateManySizeInput | FavoriteSizeCreateManySizeInput[]
    skipDuplicates?: boolean
  }

  export type ConversionCreateWithoutFromSizeInput = {
    customer: CustomerCreateNestedOneWithoutConversionsInput
    toSize: SizeCreateNestedOneWithoutToConversionsInput
  }

  export type ConversionUncheckedCreateWithoutFromSizeInput = {
    id?: number
    customer_id: number
    to_size_id: number
  }

  export type ConversionCreateOrConnectWithoutFromSizeInput = {
    where: ConversionWhereUniqueInput
    create: XOR<ConversionCreateWithoutFromSizeInput, ConversionUncheckedCreateWithoutFromSizeInput>
  }

  export type ConversionCreateManyFromSizeInputEnvelope = {
    data: ConversionCreateManyFromSizeInput | ConversionCreateManyFromSizeInput[]
    skipDuplicates?: boolean
  }

  export type ConversionCreateWithoutToSizeInput = {
    customer: CustomerCreateNestedOneWithoutConversionsInput
    fromSize: SizeCreateNestedOneWithoutFromConversionsInput
  }

  export type ConversionUncheckedCreateWithoutToSizeInput = {
    id?: number
    customer_id: number
    from_size_id: number
  }

  export type ConversionCreateOrConnectWithoutToSizeInput = {
    where: ConversionWhereUniqueInput
    create: XOR<ConversionCreateWithoutToSizeInput, ConversionUncheckedCreateWithoutToSizeInput>
  }

  export type ConversionCreateManyToSizeInputEnvelope = {
    data: ConversionCreateManyToSizeInput | ConversionCreateManyToSizeInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutSizesInput = {
    update: XOR<CategoryUpdateWithoutSizesInput, CategoryUncheckedUpdateWithoutSizesInput>
    create: XOR<CategoryCreateWithoutSizesInput, CategoryUncheckedCreateWithoutSizesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutSizesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutSizesInput, CategoryUncheckedUpdateWithoutSizesInput>
  }

  export type CategoryUpdateWithoutSizesInput = {
    type?: StringFieldUpdateOperationsInput | string
    favoriteSizes?: FavoriteSizeUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutSizesInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    favoriteSizes?: FavoriteSizeUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CountryUpsertWithoutSizesInput = {
    update: XOR<CountryUpdateWithoutSizesInput, CountryUncheckedUpdateWithoutSizesInput>
    create: XOR<CountryCreateWithoutSizesInput, CountryUncheckedCreateWithoutSizesInput>
    where?: CountryWhereInput
  }

  export type CountryUpdateToOneWithWhereWithoutSizesInput = {
    where?: CountryWhereInput
    data: XOR<CountryUpdateWithoutSizesInput, CountryUncheckedUpdateWithoutSizesInput>
  }

  export type CountryUpdateWithoutSizesInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    favoriteSizes?: FavoriteSizeUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateWithoutSizesInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    favoriteSizes?: FavoriteSizeUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type FavoriteSizeUpsertWithWhereUniqueWithoutSizeInput = {
    where: FavoriteSizeWhereUniqueInput
    update: XOR<FavoriteSizeUpdateWithoutSizeInput, FavoriteSizeUncheckedUpdateWithoutSizeInput>
    create: XOR<FavoriteSizeCreateWithoutSizeInput, FavoriteSizeUncheckedCreateWithoutSizeInput>
  }

  export type FavoriteSizeUpdateWithWhereUniqueWithoutSizeInput = {
    where: FavoriteSizeWhereUniqueInput
    data: XOR<FavoriteSizeUpdateWithoutSizeInput, FavoriteSizeUncheckedUpdateWithoutSizeInput>
  }

  export type FavoriteSizeUpdateManyWithWhereWithoutSizeInput = {
    where: FavoriteSizeScalarWhereInput
    data: XOR<FavoriteSizeUpdateManyMutationInput, FavoriteSizeUncheckedUpdateManyWithoutSizeInput>
  }

  export type ConversionUpsertWithWhereUniqueWithoutFromSizeInput = {
    where: ConversionWhereUniqueInput
    update: XOR<ConversionUpdateWithoutFromSizeInput, ConversionUncheckedUpdateWithoutFromSizeInput>
    create: XOR<ConversionCreateWithoutFromSizeInput, ConversionUncheckedCreateWithoutFromSizeInput>
  }

  export type ConversionUpdateWithWhereUniqueWithoutFromSizeInput = {
    where: ConversionWhereUniqueInput
    data: XOR<ConversionUpdateWithoutFromSizeInput, ConversionUncheckedUpdateWithoutFromSizeInput>
  }

  export type ConversionUpdateManyWithWhereWithoutFromSizeInput = {
    where: ConversionScalarWhereInput
    data: XOR<ConversionUpdateManyMutationInput, ConversionUncheckedUpdateManyWithoutFromSizeInput>
  }

  export type ConversionUpsertWithWhereUniqueWithoutToSizeInput = {
    where: ConversionWhereUniqueInput
    update: XOR<ConversionUpdateWithoutToSizeInput, ConversionUncheckedUpdateWithoutToSizeInput>
    create: XOR<ConversionCreateWithoutToSizeInput, ConversionUncheckedCreateWithoutToSizeInput>
  }

  export type ConversionUpdateWithWhereUniqueWithoutToSizeInput = {
    where: ConversionWhereUniqueInput
    data: XOR<ConversionUpdateWithoutToSizeInput, ConversionUncheckedUpdateWithoutToSizeInput>
  }

  export type ConversionUpdateManyWithWhereWithoutToSizeInput = {
    where: ConversionScalarWhereInput
    data: XOR<ConversionUpdateManyMutationInput, ConversionUncheckedUpdateManyWithoutToSizeInput>
  }

  export type CustomerCreateWithoutConversionsInput = {
    email: string
    name?: string | null
    image?: string | null
    role?: CustomerCreateroleInput | $Enums.Role[]
    favoriteSizes?: FavoriteSizeCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutConversionsInput = {
    id?: number
    email: string
    name?: string | null
    image?: string | null
    role?: CustomerCreateroleInput | $Enums.Role[]
    favoriteSizes?: FavoriteSizeUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutConversionsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutConversionsInput, CustomerUncheckedCreateWithoutConversionsInput>
  }

  export type SizeCreateWithoutFromConversionsInput = {
    size_label: string
    category: CategoryCreateNestedOneWithoutSizesInput
    country: CountryCreateNestedOneWithoutSizesInput
    favoriteSizes?: FavoriteSizeCreateNestedManyWithoutSizeInput
    toConversions?: ConversionCreateNestedManyWithoutToSizeInput
  }

  export type SizeUncheckedCreateWithoutFromConversionsInput = {
    id?: number
    category_id: number
    country_id: number
    size_label: string
    favoriteSizes?: FavoriteSizeUncheckedCreateNestedManyWithoutSizeInput
    toConversions?: ConversionUncheckedCreateNestedManyWithoutToSizeInput
  }

  export type SizeCreateOrConnectWithoutFromConversionsInput = {
    where: SizeWhereUniqueInput
    create: XOR<SizeCreateWithoutFromConversionsInput, SizeUncheckedCreateWithoutFromConversionsInput>
  }

  export type SizeCreateWithoutToConversionsInput = {
    size_label: string
    category: CategoryCreateNestedOneWithoutSizesInput
    country: CountryCreateNestedOneWithoutSizesInput
    favoriteSizes?: FavoriteSizeCreateNestedManyWithoutSizeInput
    fromConversions?: ConversionCreateNestedManyWithoutFromSizeInput
  }

  export type SizeUncheckedCreateWithoutToConversionsInput = {
    id?: number
    category_id: number
    country_id: number
    size_label: string
    favoriteSizes?: FavoriteSizeUncheckedCreateNestedManyWithoutSizeInput
    fromConversions?: ConversionUncheckedCreateNestedManyWithoutFromSizeInput
  }

  export type SizeCreateOrConnectWithoutToConversionsInput = {
    where: SizeWhereUniqueInput
    create: XOR<SizeCreateWithoutToConversionsInput, SizeUncheckedCreateWithoutToConversionsInput>
  }

  export type CustomerUpsertWithoutConversionsInput = {
    update: XOR<CustomerUpdateWithoutConversionsInput, CustomerUncheckedUpdateWithoutConversionsInput>
    create: XOR<CustomerCreateWithoutConversionsInput, CustomerUncheckedCreateWithoutConversionsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutConversionsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutConversionsInput, CustomerUncheckedUpdateWithoutConversionsInput>
  }

  export type CustomerUpdateWithoutConversionsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: CustomerUpdateroleInput | $Enums.Role[]
    favoriteSizes?: FavoriteSizeUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutConversionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: CustomerUpdateroleInput | $Enums.Role[]
    favoriteSizes?: FavoriteSizeUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type SizeUpsertWithoutFromConversionsInput = {
    update: XOR<SizeUpdateWithoutFromConversionsInput, SizeUncheckedUpdateWithoutFromConversionsInput>
    create: XOR<SizeCreateWithoutFromConversionsInput, SizeUncheckedCreateWithoutFromConversionsInput>
    where?: SizeWhereInput
  }

  export type SizeUpdateToOneWithWhereWithoutFromConversionsInput = {
    where?: SizeWhereInput
    data: XOR<SizeUpdateWithoutFromConversionsInput, SizeUncheckedUpdateWithoutFromConversionsInput>
  }

  export type SizeUpdateWithoutFromConversionsInput = {
    size_label?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneRequiredWithoutSizesNestedInput
    country?: CountryUpdateOneRequiredWithoutSizesNestedInput
    favoriteSizes?: FavoriteSizeUpdateManyWithoutSizeNestedInput
    toConversions?: ConversionUpdateManyWithoutToSizeNestedInput
  }

  export type SizeUncheckedUpdateWithoutFromConversionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    country_id?: IntFieldUpdateOperationsInput | number
    size_label?: StringFieldUpdateOperationsInput | string
    favoriteSizes?: FavoriteSizeUncheckedUpdateManyWithoutSizeNestedInput
    toConversions?: ConversionUncheckedUpdateManyWithoutToSizeNestedInput
  }

  export type SizeUpsertWithoutToConversionsInput = {
    update: XOR<SizeUpdateWithoutToConversionsInput, SizeUncheckedUpdateWithoutToConversionsInput>
    create: XOR<SizeCreateWithoutToConversionsInput, SizeUncheckedCreateWithoutToConversionsInput>
    where?: SizeWhereInput
  }

  export type SizeUpdateToOneWithWhereWithoutToConversionsInput = {
    where?: SizeWhereInput
    data: XOR<SizeUpdateWithoutToConversionsInput, SizeUncheckedUpdateWithoutToConversionsInput>
  }

  export type SizeUpdateWithoutToConversionsInput = {
    size_label?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneRequiredWithoutSizesNestedInput
    country?: CountryUpdateOneRequiredWithoutSizesNestedInput
    favoriteSizes?: FavoriteSizeUpdateManyWithoutSizeNestedInput
    fromConversions?: ConversionUpdateManyWithoutFromSizeNestedInput
  }

  export type SizeUncheckedUpdateWithoutToConversionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    country_id?: IntFieldUpdateOperationsInput | number
    size_label?: StringFieldUpdateOperationsInput | string
    favoriteSizes?: FavoriteSizeUncheckedUpdateManyWithoutSizeNestedInput
    fromConversions?: ConversionUncheckedUpdateManyWithoutFromSizeNestedInput
  }

  export type CustomerCreateWithoutFavoriteSizesInput = {
    email: string
    name?: string | null
    image?: string | null
    role?: CustomerCreateroleInput | $Enums.Role[]
    conversions?: ConversionCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutFavoriteSizesInput = {
    id?: number
    email: string
    name?: string | null
    image?: string | null
    role?: CustomerCreateroleInput | $Enums.Role[]
    conversions?: ConversionUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutFavoriteSizesInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutFavoriteSizesInput, CustomerUncheckedCreateWithoutFavoriteSizesInput>
  }

  export type CountryCreateWithoutFavoriteSizesInput = {
    code: string
    name: string
    sizes?: SizeCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateWithoutFavoriteSizesInput = {
    id?: number
    code: string
    name: string
    sizes?: SizeUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryCreateOrConnectWithoutFavoriteSizesInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutFavoriteSizesInput, CountryUncheckedCreateWithoutFavoriteSizesInput>
  }

  export type CategoryCreateWithoutFavoriteSizesInput = {
    type: string
    sizes?: SizeCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutFavoriteSizesInput = {
    id?: number
    type: string
    sizes?: SizeUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutFavoriteSizesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutFavoriteSizesInput, CategoryUncheckedCreateWithoutFavoriteSizesInput>
  }

  export type SizeCreateWithoutFavoriteSizesInput = {
    size_label: string
    category: CategoryCreateNestedOneWithoutSizesInput
    country: CountryCreateNestedOneWithoutSizesInput
    fromConversions?: ConversionCreateNestedManyWithoutFromSizeInput
    toConversions?: ConversionCreateNestedManyWithoutToSizeInput
  }

  export type SizeUncheckedCreateWithoutFavoriteSizesInput = {
    id?: number
    category_id: number
    country_id: number
    size_label: string
    fromConversions?: ConversionUncheckedCreateNestedManyWithoutFromSizeInput
    toConversions?: ConversionUncheckedCreateNestedManyWithoutToSizeInput
  }

  export type SizeCreateOrConnectWithoutFavoriteSizesInput = {
    where: SizeWhereUniqueInput
    create: XOR<SizeCreateWithoutFavoriteSizesInput, SizeUncheckedCreateWithoutFavoriteSizesInput>
  }

  export type CustomerUpsertWithoutFavoriteSizesInput = {
    update: XOR<CustomerUpdateWithoutFavoriteSizesInput, CustomerUncheckedUpdateWithoutFavoriteSizesInput>
    create: XOR<CustomerCreateWithoutFavoriteSizesInput, CustomerUncheckedCreateWithoutFavoriteSizesInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutFavoriteSizesInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutFavoriteSizesInput, CustomerUncheckedUpdateWithoutFavoriteSizesInput>
  }

  export type CustomerUpdateWithoutFavoriteSizesInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: CustomerUpdateroleInput | $Enums.Role[]
    conversions?: ConversionUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutFavoriteSizesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: CustomerUpdateroleInput | $Enums.Role[]
    conversions?: ConversionUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CountryUpsertWithoutFavoriteSizesInput = {
    update: XOR<CountryUpdateWithoutFavoriteSizesInput, CountryUncheckedUpdateWithoutFavoriteSizesInput>
    create: XOR<CountryCreateWithoutFavoriteSizesInput, CountryUncheckedCreateWithoutFavoriteSizesInput>
    where?: CountryWhereInput
  }

  export type CountryUpdateToOneWithWhereWithoutFavoriteSizesInput = {
    where?: CountryWhereInput
    data: XOR<CountryUpdateWithoutFavoriteSizesInput, CountryUncheckedUpdateWithoutFavoriteSizesInput>
  }

  export type CountryUpdateWithoutFavoriteSizesInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sizes?: SizeUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateWithoutFavoriteSizesInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sizes?: SizeUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type CategoryUpsertWithoutFavoriteSizesInput = {
    update: XOR<CategoryUpdateWithoutFavoriteSizesInput, CategoryUncheckedUpdateWithoutFavoriteSizesInput>
    create: XOR<CategoryCreateWithoutFavoriteSizesInput, CategoryUncheckedCreateWithoutFavoriteSizesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutFavoriteSizesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutFavoriteSizesInput, CategoryUncheckedUpdateWithoutFavoriteSizesInput>
  }

  export type CategoryUpdateWithoutFavoriteSizesInput = {
    type?: StringFieldUpdateOperationsInput | string
    sizes?: SizeUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutFavoriteSizesInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    sizes?: SizeUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type SizeUpsertWithoutFavoriteSizesInput = {
    update: XOR<SizeUpdateWithoutFavoriteSizesInput, SizeUncheckedUpdateWithoutFavoriteSizesInput>
    create: XOR<SizeCreateWithoutFavoriteSizesInput, SizeUncheckedCreateWithoutFavoriteSizesInput>
    where?: SizeWhereInput
  }

  export type SizeUpdateToOneWithWhereWithoutFavoriteSizesInput = {
    where?: SizeWhereInput
    data: XOR<SizeUpdateWithoutFavoriteSizesInput, SizeUncheckedUpdateWithoutFavoriteSizesInput>
  }

  export type SizeUpdateWithoutFavoriteSizesInput = {
    size_label?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneRequiredWithoutSizesNestedInput
    country?: CountryUpdateOneRequiredWithoutSizesNestedInput
    fromConversions?: ConversionUpdateManyWithoutFromSizeNestedInput
    toConversions?: ConversionUpdateManyWithoutToSizeNestedInput
  }

  export type SizeUncheckedUpdateWithoutFavoriteSizesInput = {
    id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    country_id?: IntFieldUpdateOperationsInput | number
    size_label?: StringFieldUpdateOperationsInput | string
    fromConversions?: ConversionUncheckedUpdateManyWithoutFromSizeNestedInput
    toConversions?: ConversionUncheckedUpdateManyWithoutToSizeNestedInput
  }

  export type ConversionCreateManyCustomerInput = {
    id?: number
    from_size_id: number
    to_size_id: number
  }

  export type FavoriteSizeCreateManyCustomerInput = {
    id?: number
    title: string
    description?: string | null
    gender?: FavoriteSizeCreategenderInput | $Enums.Gender[]
    country_id: number
    category_id: number
    size_id: number
  }

  export type ConversionUpdateWithoutCustomerInput = {
    fromSize?: SizeUpdateOneRequiredWithoutFromConversionsNestedInput
    toSize?: SizeUpdateOneRequiredWithoutToConversionsNestedInput
  }

  export type ConversionUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    from_size_id?: IntFieldUpdateOperationsInput | number
    to_size_id?: IntFieldUpdateOperationsInput | number
  }

  export type ConversionUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    from_size_id?: IntFieldUpdateOperationsInput | number
    to_size_id?: IntFieldUpdateOperationsInput | number
  }

  export type FavoriteSizeUpdateWithoutCustomerInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: FavoriteSizeUpdategenderInput | $Enums.Gender[]
    country?: CountryUpdateOneRequiredWithoutFavoriteSizesNestedInput
    category?: CategoryUpdateOneRequiredWithoutFavoriteSizesNestedInput
    size?: SizeUpdateOneRequiredWithoutFavoriteSizesNestedInput
  }

  export type FavoriteSizeUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: FavoriteSizeUpdategenderInput | $Enums.Gender[]
    country_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    size_id?: IntFieldUpdateOperationsInput | number
  }

  export type FavoriteSizeUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: FavoriteSizeUpdategenderInput | $Enums.Gender[]
    country_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    size_id?: IntFieldUpdateOperationsInput | number
  }

  export type SizeCreateManyCountryInput = {
    id?: number
    category_id: number
    size_label: string
  }

  export type FavoriteSizeCreateManyCountryInput = {
    id?: number
    customer_id: number
    title: string
    description?: string | null
    gender?: FavoriteSizeCreategenderInput | $Enums.Gender[]
    category_id: number
    size_id: number
  }

  export type SizeUpdateWithoutCountryInput = {
    size_label?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneRequiredWithoutSizesNestedInput
    favoriteSizes?: FavoriteSizeUpdateManyWithoutSizeNestedInput
    fromConversions?: ConversionUpdateManyWithoutFromSizeNestedInput
    toConversions?: ConversionUpdateManyWithoutToSizeNestedInput
  }

  export type SizeUncheckedUpdateWithoutCountryInput = {
    id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    size_label?: StringFieldUpdateOperationsInput | string
    favoriteSizes?: FavoriteSizeUncheckedUpdateManyWithoutSizeNestedInput
    fromConversions?: ConversionUncheckedUpdateManyWithoutFromSizeNestedInput
    toConversions?: ConversionUncheckedUpdateManyWithoutToSizeNestedInput
  }

  export type SizeUncheckedUpdateManyWithoutCountryInput = {
    id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    size_label?: StringFieldUpdateOperationsInput | string
  }

  export type FavoriteSizeUpdateWithoutCountryInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: FavoriteSizeUpdategenderInput | $Enums.Gender[]
    customer?: CustomerUpdateOneRequiredWithoutFavoriteSizesNestedInput
    category?: CategoryUpdateOneRequiredWithoutFavoriteSizesNestedInput
    size?: SizeUpdateOneRequiredWithoutFavoriteSizesNestedInput
  }

  export type FavoriteSizeUncheckedUpdateWithoutCountryInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: FavoriteSizeUpdategenderInput | $Enums.Gender[]
    category_id?: IntFieldUpdateOperationsInput | number
    size_id?: IntFieldUpdateOperationsInput | number
  }

  export type FavoriteSizeUncheckedUpdateManyWithoutCountryInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: FavoriteSizeUpdategenderInput | $Enums.Gender[]
    category_id?: IntFieldUpdateOperationsInput | number
    size_id?: IntFieldUpdateOperationsInput | number
  }

  export type SizeCreateManyCategoryInput = {
    id?: number
    country_id: number
    size_label: string
  }

  export type FavoriteSizeCreateManyCategoryInput = {
    id?: number
    customer_id: number
    title: string
    description?: string | null
    gender?: FavoriteSizeCreategenderInput | $Enums.Gender[]
    country_id: number
    size_id: number
  }

  export type SizeUpdateWithoutCategoryInput = {
    size_label?: StringFieldUpdateOperationsInput | string
    country?: CountryUpdateOneRequiredWithoutSizesNestedInput
    favoriteSizes?: FavoriteSizeUpdateManyWithoutSizeNestedInput
    fromConversions?: ConversionUpdateManyWithoutFromSizeNestedInput
    toConversions?: ConversionUpdateManyWithoutToSizeNestedInput
  }

  export type SizeUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    country_id?: IntFieldUpdateOperationsInput | number
    size_label?: StringFieldUpdateOperationsInput | string
    favoriteSizes?: FavoriteSizeUncheckedUpdateManyWithoutSizeNestedInput
    fromConversions?: ConversionUncheckedUpdateManyWithoutFromSizeNestedInput
    toConversions?: ConversionUncheckedUpdateManyWithoutToSizeNestedInput
  }

  export type SizeUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    country_id?: IntFieldUpdateOperationsInput | number
    size_label?: StringFieldUpdateOperationsInput | string
  }

  export type FavoriteSizeUpdateWithoutCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: FavoriteSizeUpdategenderInput | $Enums.Gender[]
    customer?: CustomerUpdateOneRequiredWithoutFavoriteSizesNestedInput
    country?: CountryUpdateOneRequiredWithoutFavoriteSizesNestedInput
    size?: SizeUpdateOneRequiredWithoutFavoriteSizesNestedInput
  }

  export type FavoriteSizeUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: FavoriteSizeUpdategenderInput | $Enums.Gender[]
    country_id?: IntFieldUpdateOperationsInput | number
    size_id?: IntFieldUpdateOperationsInput | number
  }

  export type FavoriteSizeUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: FavoriteSizeUpdategenderInput | $Enums.Gender[]
    country_id?: IntFieldUpdateOperationsInput | number
    size_id?: IntFieldUpdateOperationsInput | number
  }

  export type FavoriteSizeCreateManySizeInput = {
    id?: number
    customer_id: number
    title: string
    description?: string | null
    gender?: FavoriteSizeCreategenderInput | $Enums.Gender[]
    country_id: number
    category_id: number
  }

  export type ConversionCreateManyFromSizeInput = {
    id?: number
    customer_id: number
    to_size_id: number
  }

  export type ConversionCreateManyToSizeInput = {
    id?: number
    customer_id: number
    from_size_id: number
  }

  export type FavoriteSizeUpdateWithoutSizeInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: FavoriteSizeUpdategenderInput | $Enums.Gender[]
    customer?: CustomerUpdateOneRequiredWithoutFavoriteSizesNestedInput
    country?: CountryUpdateOneRequiredWithoutFavoriteSizesNestedInput
    category?: CategoryUpdateOneRequiredWithoutFavoriteSizesNestedInput
  }

  export type FavoriteSizeUncheckedUpdateWithoutSizeInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: FavoriteSizeUpdategenderInput | $Enums.Gender[]
    country_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type FavoriteSizeUncheckedUpdateManyWithoutSizeInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: FavoriteSizeUpdategenderInput | $Enums.Gender[]
    country_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type ConversionUpdateWithoutFromSizeInput = {
    customer?: CustomerUpdateOneRequiredWithoutConversionsNestedInput
    toSize?: SizeUpdateOneRequiredWithoutToConversionsNestedInput
  }

  export type ConversionUncheckedUpdateWithoutFromSizeInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    to_size_id?: IntFieldUpdateOperationsInput | number
  }

  export type ConversionUncheckedUpdateManyWithoutFromSizeInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    to_size_id?: IntFieldUpdateOperationsInput | number
  }

  export type ConversionUpdateWithoutToSizeInput = {
    customer?: CustomerUpdateOneRequiredWithoutConversionsNestedInput
    fromSize?: SizeUpdateOneRequiredWithoutFromConversionsNestedInput
  }

  export type ConversionUncheckedUpdateWithoutToSizeInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    from_size_id?: IntFieldUpdateOperationsInput | number
  }

  export type ConversionUncheckedUpdateManyWithoutToSizeInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    from_size_id?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}