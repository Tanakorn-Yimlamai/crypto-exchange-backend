
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Cryptocurrency
 * 
 */
export type Cryptocurrency = $Result.DefaultSelection<Prisma.$CryptocurrencyPayload>
/**
 * Model FiatCurrency
 * 
 */
export type FiatCurrency = $Result.DefaultSelection<Prisma.$FiatCurrencyPayload>
/**
 * Model Wallet
 * 
 */
export type Wallet = $Result.DefaultSelection<Prisma.$WalletPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model PaymentMethod
 * 
 */
export type PaymentMethod = $Result.DefaultSelection<Prisma.$PaymentMethodPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cryptocurrency`: Exposes CRUD operations for the **Cryptocurrency** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cryptocurrencies
    * const cryptocurrencies = await prisma.cryptocurrency.findMany()
    * ```
    */
  get cryptocurrency(): Prisma.CryptocurrencyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fiatCurrency`: Exposes CRUD operations for the **FiatCurrency** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FiatCurrencies
    * const fiatCurrencies = await prisma.fiatCurrency.findMany()
    * ```
    */
  get fiatCurrency(): Prisma.FiatCurrencyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wallet`: Exposes CRUD operations for the **Wallet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wallets
    * const wallets = await prisma.wallet.findMany()
    * ```
    */
  get wallet(): Prisma.WalletDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paymentMethod`: Exposes CRUD operations for the **PaymentMethod** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentMethods
    * const paymentMethods = await prisma.paymentMethod.findMany()
    * ```
    */
  get paymentMethod(): Prisma.PaymentMethodDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
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
    User: 'User',
    Cryptocurrency: 'Cryptocurrency',
    FiatCurrency: 'FiatCurrency',
    Wallet: 'Wallet',
    Order: 'Order',
    Transaction: 'Transaction',
    PaymentMethod: 'PaymentMethod'
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
      modelProps: "user" | "cryptocurrency" | "fiatCurrency" | "wallet" | "order" | "transaction" | "paymentMethod"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Cryptocurrency: {
        payload: Prisma.$CryptocurrencyPayload<ExtArgs>
        fields: Prisma.CryptocurrencyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CryptocurrencyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptocurrencyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CryptocurrencyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptocurrencyPayload>
          }
          findFirst: {
            args: Prisma.CryptocurrencyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptocurrencyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CryptocurrencyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptocurrencyPayload>
          }
          findMany: {
            args: Prisma.CryptocurrencyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptocurrencyPayload>[]
          }
          create: {
            args: Prisma.CryptocurrencyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptocurrencyPayload>
          }
          createMany: {
            args: Prisma.CryptocurrencyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CryptocurrencyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptocurrencyPayload>[]
          }
          delete: {
            args: Prisma.CryptocurrencyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptocurrencyPayload>
          }
          update: {
            args: Prisma.CryptocurrencyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptocurrencyPayload>
          }
          deleteMany: {
            args: Prisma.CryptocurrencyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CryptocurrencyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CryptocurrencyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptocurrencyPayload>[]
          }
          upsert: {
            args: Prisma.CryptocurrencyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptocurrencyPayload>
          }
          aggregate: {
            args: Prisma.CryptocurrencyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCryptocurrency>
          }
          groupBy: {
            args: Prisma.CryptocurrencyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CryptocurrencyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CryptocurrencyCountArgs<ExtArgs>
            result: $Utils.Optional<CryptocurrencyCountAggregateOutputType> | number
          }
        }
      }
      FiatCurrency: {
        payload: Prisma.$FiatCurrencyPayload<ExtArgs>
        fields: Prisma.FiatCurrencyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FiatCurrencyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiatCurrencyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FiatCurrencyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiatCurrencyPayload>
          }
          findFirst: {
            args: Prisma.FiatCurrencyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiatCurrencyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FiatCurrencyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiatCurrencyPayload>
          }
          findMany: {
            args: Prisma.FiatCurrencyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiatCurrencyPayload>[]
          }
          create: {
            args: Prisma.FiatCurrencyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiatCurrencyPayload>
          }
          createMany: {
            args: Prisma.FiatCurrencyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FiatCurrencyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiatCurrencyPayload>[]
          }
          delete: {
            args: Prisma.FiatCurrencyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiatCurrencyPayload>
          }
          update: {
            args: Prisma.FiatCurrencyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiatCurrencyPayload>
          }
          deleteMany: {
            args: Prisma.FiatCurrencyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FiatCurrencyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FiatCurrencyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiatCurrencyPayload>[]
          }
          upsert: {
            args: Prisma.FiatCurrencyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiatCurrencyPayload>
          }
          aggregate: {
            args: Prisma.FiatCurrencyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFiatCurrency>
          }
          groupBy: {
            args: Prisma.FiatCurrencyGroupByArgs<ExtArgs>
            result: $Utils.Optional<FiatCurrencyGroupByOutputType>[]
          }
          count: {
            args: Prisma.FiatCurrencyCountArgs<ExtArgs>
            result: $Utils.Optional<FiatCurrencyCountAggregateOutputType> | number
          }
        }
      }
      Wallet: {
        payload: Prisma.$WalletPayload<ExtArgs>
        fields: Prisma.WalletFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WalletFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WalletFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          findFirst: {
            args: Prisma.WalletFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WalletFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          findMany: {
            args: Prisma.WalletFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>[]
          }
          create: {
            args: Prisma.WalletCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          createMany: {
            args: Prisma.WalletCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WalletCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>[]
          }
          delete: {
            args: Prisma.WalletDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          update: {
            args: Prisma.WalletUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          deleteMany: {
            args: Prisma.WalletDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WalletUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WalletUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>[]
          }
          upsert: {
            args: Prisma.WalletUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          aggregate: {
            args: Prisma.WalletAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWallet>
          }
          groupBy: {
            args: Prisma.WalletGroupByArgs<ExtArgs>
            result: $Utils.Optional<WalletGroupByOutputType>[]
          }
          count: {
            args: Prisma.WalletCountArgs<ExtArgs>
            result: $Utils.Optional<WalletCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      PaymentMethod: {
        payload: Prisma.$PaymentMethodPayload<ExtArgs>
        fields: Prisma.PaymentMethodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentMethodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentMethodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          findFirst: {
            args: Prisma.PaymentMethodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentMethodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          findMany: {
            args: Prisma.PaymentMethodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>[]
          }
          create: {
            args: Prisma.PaymentMethodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          createMany: {
            args: Prisma.PaymentMethodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentMethodCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>[]
          }
          delete: {
            args: Prisma.PaymentMethodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          update: {
            args: Prisma.PaymentMethodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          deleteMany: {
            args: Prisma.PaymentMethodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentMethodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentMethodUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>[]
          }
          upsert: {
            args: Prisma.PaymentMethodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          aggregate: {
            args: Prisma.PaymentMethodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentMethod>
          }
          groupBy: {
            args: Prisma.PaymentMethodGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentMethodGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentMethodCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentMethodCountAggregateOutputType> | number
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
    user?: UserOmit
    cryptocurrency?: CryptocurrencyOmit
    fiatCurrency?: FiatCurrencyOmit
    wallet?: WalletOmit
    order?: OrderOmit
    transaction?: TransactionOmit
    paymentMethod?: PaymentMethodOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    wallets: number
    payment_methods: number
    orders_made: number
    orders_taken: number
    transactions_sent: number
    transactions_received: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallets?: boolean | UserCountOutputTypeCountWalletsArgs
    payment_methods?: boolean | UserCountOutputTypeCountPayment_methodsArgs
    orders_made?: boolean | UserCountOutputTypeCountOrders_madeArgs
    orders_taken?: boolean | UserCountOutputTypeCountOrders_takenArgs
    transactions_sent?: boolean | UserCountOutputTypeCountTransactions_sentArgs
    transactions_received?: boolean | UserCountOutputTypeCountTransactions_receivedArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWalletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WalletWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPayment_methodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentMethodWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrders_madeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrders_takenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactions_sentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactions_receivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type CryptocurrencyCountOutputType
   */

  export type CryptocurrencyCountOutputType = {
    wallets: number
    orders: number
    transactions: number
  }

  export type CryptocurrencyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallets?: boolean | CryptocurrencyCountOutputTypeCountWalletsArgs
    orders?: boolean | CryptocurrencyCountOutputTypeCountOrdersArgs
    transactions?: boolean | CryptocurrencyCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * CryptocurrencyCountOutputType without action
   */
  export type CryptocurrencyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CryptocurrencyCountOutputType
     */
    select?: CryptocurrencyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CryptocurrencyCountOutputType without action
   */
  export type CryptocurrencyCountOutputTypeCountWalletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WalletWhereInput
  }

  /**
   * CryptocurrencyCountOutputType without action
   */
  export type CryptocurrencyCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * CryptocurrencyCountOutputType without action
   */
  export type CryptocurrencyCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type FiatCurrencyCountOutputType
   */

  export type FiatCurrencyCountOutputType = {
    orders: number
    transactions: number
  }

  export type FiatCurrencyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | FiatCurrencyCountOutputTypeCountOrdersArgs
    transactions?: boolean | FiatCurrencyCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * FiatCurrencyCountOutputType without action
   */
  export type FiatCurrencyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiatCurrencyCountOutputType
     */
    select?: FiatCurrencyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FiatCurrencyCountOutputType without action
   */
  export type FiatCurrencyCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * FiatCurrencyCountOutputType without action
   */
  export type FiatCurrencyCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    transactions: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | OrderCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    user_id: number | null
    fiat_balance_thb: Decimal | null
    fiat_balance_usd: Decimal | null
  }

  export type UserSumAggregateOutputType = {
    user_id: number | null
    fiat_balance_thb: Decimal | null
    fiat_balance_usd: Decimal | null
  }

  export type UserMinAggregateOutputType = {
    user_id: number | null
    username: string | null
    email: string | null
    password_hash: string | null
    fiat_balance_thb: Decimal | null
    fiat_balance_usd: Decimal | null
    registration_date: Date | null
    is_verified: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    user_id: number | null
    username: string | null
    email: string | null
    password_hash: string | null
    fiat_balance_thb: Decimal | null
    fiat_balance_usd: Decimal | null
    registration_date: Date | null
    is_verified: boolean | null
  }

  export type UserCountAggregateOutputType = {
    user_id: number
    username: number
    email: number
    password_hash: number
    fiat_balance_thb: number
    fiat_balance_usd: number
    registration_date: number
    is_verified: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    user_id?: true
    fiat_balance_thb?: true
    fiat_balance_usd?: true
  }

  export type UserSumAggregateInputType = {
    user_id?: true
    fiat_balance_thb?: true
    fiat_balance_usd?: true
  }

  export type UserMinAggregateInputType = {
    user_id?: true
    username?: true
    email?: true
    password_hash?: true
    fiat_balance_thb?: true
    fiat_balance_usd?: true
    registration_date?: true
    is_verified?: true
  }

  export type UserMaxAggregateInputType = {
    user_id?: true
    username?: true
    email?: true
    password_hash?: true
    fiat_balance_thb?: true
    fiat_balance_usd?: true
    registration_date?: true
    is_verified?: true
  }

  export type UserCountAggregateInputType = {
    user_id?: true
    username?: true
    email?: true
    password_hash?: true
    fiat_balance_thb?: true
    fiat_balance_usd?: true
    registration_date?: true
    is_verified?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    user_id: number
    username: string
    email: string
    password_hash: string
    fiat_balance_thb: Decimal
    fiat_balance_usd: Decimal
    registration_date: Date
    is_verified: boolean
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    username?: boolean
    email?: boolean
    password_hash?: boolean
    fiat_balance_thb?: boolean
    fiat_balance_usd?: boolean
    registration_date?: boolean
    is_verified?: boolean
    wallets?: boolean | User$walletsArgs<ExtArgs>
    payment_methods?: boolean | User$payment_methodsArgs<ExtArgs>
    orders_made?: boolean | User$orders_madeArgs<ExtArgs>
    orders_taken?: boolean | User$orders_takenArgs<ExtArgs>
    transactions_sent?: boolean | User$transactions_sentArgs<ExtArgs>
    transactions_received?: boolean | User$transactions_receivedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    username?: boolean
    email?: boolean
    password_hash?: boolean
    fiat_balance_thb?: boolean
    fiat_balance_usd?: boolean
    registration_date?: boolean
    is_verified?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    username?: boolean
    email?: boolean
    password_hash?: boolean
    fiat_balance_thb?: boolean
    fiat_balance_usd?: boolean
    registration_date?: boolean
    is_verified?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    user_id?: boolean
    username?: boolean
    email?: boolean
    password_hash?: boolean
    fiat_balance_thb?: boolean
    fiat_balance_usd?: boolean
    registration_date?: boolean
    is_verified?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "username" | "email" | "password_hash" | "fiat_balance_thb" | "fiat_balance_usd" | "registration_date" | "is_verified", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallets?: boolean | User$walletsArgs<ExtArgs>
    payment_methods?: boolean | User$payment_methodsArgs<ExtArgs>
    orders_made?: boolean | User$orders_madeArgs<ExtArgs>
    orders_taken?: boolean | User$orders_takenArgs<ExtArgs>
    transactions_sent?: boolean | User$transactions_sentArgs<ExtArgs>
    transactions_received?: boolean | User$transactions_receivedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      wallets: Prisma.$WalletPayload<ExtArgs>[]
      payment_methods: Prisma.$PaymentMethodPayload<ExtArgs>[]
      orders_made: Prisma.$OrderPayload<ExtArgs>[]
      orders_taken: Prisma.$OrderPayload<ExtArgs>[]
      transactions_sent: Prisma.$TransactionPayload<ExtArgs>[]
      transactions_received: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      username: string
      email: string
      password_hash: string
      fiat_balance_thb: Prisma.Decimal
      fiat_balance_usd: Prisma.Decimal
      registration_date: Date
      is_verified: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const userWithUser_idOnly = await prisma.user.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `user_id`
     * const userWithUser_idOnly = await prisma.user.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `user_id`
     * const userWithUser_idOnly = await prisma.user.updateManyAndReturn({
     *   select: { user_id: true },
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    wallets<T extends User$walletsArgs<ExtArgs> = {}>(args?: Subset<T, User$walletsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payment_methods<T extends User$payment_methodsArgs<ExtArgs> = {}>(args?: Subset<T, User$payment_methodsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders_made<T extends User$orders_madeArgs<ExtArgs> = {}>(args?: Subset<T, User$orders_madeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders_taken<T extends User$orders_takenArgs<ExtArgs> = {}>(args?: Subset<T, User$orders_takenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions_sent<T extends User$transactions_sentArgs<ExtArgs> = {}>(args?: Subset<T, User$transactions_sentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions_received<T extends User$transactions_receivedArgs<ExtArgs> = {}>(args?: Subset<T, User$transactions_receivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly user_id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password_hash: FieldRef<"User", 'String'>
    readonly fiat_balance_thb: FieldRef<"User", 'Decimal'>
    readonly fiat_balance_usd: FieldRef<"User", 'Decimal'>
    readonly registration_date: FieldRef<"User", 'DateTime'>
    readonly is_verified: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.wallets
   */
  export type User$walletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    where?: WalletWhereInput
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    cursor?: WalletWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * User.payment_methods
   */
  export type User$payment_methodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    where?: PaymentMethodWhereInput
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[]
    cursor?: PaymentMethodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentMethodScalarFieldEnum | PaymentMethodScalarFieldEnum[]
  }

  /**
   * User.orders_made
   */
  export type User$orders_madeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User.orders_taken
   */
  export type User$orders_takenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User.transactions_sent
   */
  export type User$transactions_sentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * User.transactions_received
   */
  export type User$transactions_receivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Cryptocurrency
   */

  export type AggregateCryptocurrency = {
    _count: CryptocurrencyCountAggregateOutputType | null
    _avg: CryptocurrencyAvgAggregateOutputType | null
    _sum: CryptocurrencySumAggregateOutputType | null
    _min: CryptocurrencyMinAggregateOutputType | null
    _max: CryptocurrencyMaxAggregateOutputType | null
  }

  export type CryptocurrencyAvgAggregateOutputType = {
    currency_id: number | null
    decimal_places: number | null
  }

  export type CryptocurrencySumAggregateOutputType = {
    currency_id: number | null
    decimal_places: number | null
  }

  export type CryptocurrencyMinAggregateOutputType = {
    currency_id: number | null
    symbol: string | null
    name: string | null
    decimal_places: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CryptocurrencyMaxAggregateOutputType = {
    currency_id: number | null
    symbol: string | null
    name: string | null
    decimal_places: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CryptocurrencyCountAggregateOutputType = {
    currency_id: number
    symbol: number
    name: number
    decimal_places: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CryptocurrencyAvgAggregateInputType = {
    currency_id?: true
    decimal_places?: true
  }

  export type CryptocurrencySumAggregateInputType = {
    currency_id?: true
    decimal_places?: true
  }

  export type CryptocurrencyMinAggregateInputType = {
    currency_id?: true
    symbol?: true
    name?: true
    decimal_places?: true
    created_at?: true
    updated_at?: true
  }

  export type CryptocurrencyMaxAggregateInputType = {
    currency_id?: true
    symbol?: true
    name?: true
    decimal_places?: true
    created_at?: true
    updated_at?: true
  }

  export type CryptocurrencyCountAggregateInputType = {
    currency_id?: true
    symbol?: true
    name?: true
    decimal_places?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CryptocurrencyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cryptocurrency to aggregate.
     */
    where?: CryptocurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cryptocurrencies to fetch.
     */
    orderBy?: CryptocurrencyOrderByWithRelationInput | CryptocurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CryptocurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cryptocurrencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cryptocurrencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cryptocurrencies
    **/
    _count?: true | CryptocurrencyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CryptocurrencyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CryptocurrencySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CryptocurrencyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CryptocurrencyMaxAggregateInputType
  }

  export type GetCryptocurrencyAggregateType<T extends CryptocurrencyAggregateArgs> = {
        [P in keyof T & keyof AggregateCryptocurrency]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCryptocurrency[P]>
      : GetScalarType<T[P], AggregateCryptocurrency[P]>
  }




  export type CryptocurrencyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CryptocurrencyWhereInput
    orderBy?: CryptocurrencyOrderByWithAggregationInput | CryptocurrencyOrderByWithAggregationInput[]
    by: CryptocurrencyScalarFieldEnum[] | CryptocurrencyScalarFieldEnum
    having?: CryptocurrencyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CryptocurrencyCountAggregateInputType | true
    _avg?: CryptocurrencyAvgAggregateInputType
    _sum?: CryptocurrencySumAggregateInputType
    _min?: CryptocurrencyMinAggregateInputType
    _max?: CryptocurrencyMaxAggregateInputType
  }

  export type CryptocurrencyGroupByOutputType = {
    currency_id: number
    symbol: string
    name: string
    decimal_places: number
    created_at: Date
    updated_at: Date
    _count: CryptocurrencyCountAggregateOutputType | null
    _avg: CryptocurrencyAvgAggregateOutputType | null
    _sum: CryptocurrencySumAggregateOutputType | null
    _min: CryptocurrencyMinAggregateOutputType | null
    _max: CryptocurrencyMaxAggregateOutputType | null
  }

  type GetCryptocurrencyGroupByPayload<T extends CryptocurrencyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CryptocurrencyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CryptocurrencyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CryptocurrencyGroupByOutputType[P]>
            : GetScalarType<T[P], CryptocurrencyGroupByOutputType[P]>
        }
      >
    >


  export type CryptocurrencySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    currency_id?: boolean
    symbol?: boolean
    name?: boolean
    decimal_places?: boolean
    created_at?: boolean
    updated_at?: boolean
    wallets?: boolean | Cryptocurrency$walletsArgs<ExtArgs>
    orders?: boolean | Cryptocurrency$ordersArgs<ExtArgs>
    transactions?: boolean | Cryptocurrency$transactionsArgs<ExtArgs>
    _count?: boolean | CryptocurrencyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cryptocurrency"]>

  export type CryptocurrencySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    currency_id?: boolean
    symbol?: boolean
    name?: boolean
    decimal_places?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["cryptocurrency"]>

  export type CryptocurrencySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    currency_id?: boolean
    symbol?: boolean
    name?: boolean
    decimal_places?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["cryptocurrency"]>

  export type CryptocurrencySelectScalar = {
    currency_id?: boolean
    symbol?: boolean
    name?: boolean
    decimal_places?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type CryptocurrencyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"currency_id" | "symbol" | "name" | "decimal_places" | "created_at" | "updated_at", ExtArgs["result"]["cryptocurrency"]>
  export type CryptocurrencyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallets?: boolean | Cryptocurrency$walletsArgs<ExtArgs>
    orders?: boolean | Cryptocurrency$ordersArgs<ExtArgs>
    transactions?: boolean | Cryptocurrency$transactionsArgs<ExtArgs>
    _count?: boolean | CryptocurrencyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CryptocurrencyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CryptocurrencyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CryptocurrencyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cryptocurrency"
    objects: {
      wallets: Prisma.$WalletPayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      currency_id: number
      symbol: string
      name: string
      decimal_places: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["cryptocurrency"]>
    composites: {}
  }

  type CryptocurrencyGetPayload<S extends boolean | null | undefined | CryptocurrencyDefaultArgs> = $Result.GetResult<Prisma.$CryptocurrencyPayload, S>

  type CryptocurrencyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CryptocurrencyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CryptocurrencyCountAggregateInputType | true
    }

  export interface CryptocurrencyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cryptocurrency'], meta: { name: 'Cryptocurrency' } }
    /**
     * Find zero or one Cryptocurrency that matches the filter.
     * @param {CryptocurrencyFindUniqueArgs} args - Arguments to find a Cryptocurrency
     * @example
     * // Get one Cryptocurrency
     * const cryptocurrency = await prisma.cryptocurrency.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CryptocurrencyFindUniqueArgs>(args: SelectSubset<T, CryptocurrencyFindUniqueArgs<ExtArgs>>): Prisma__CryptocurrencyClient<$Result.GetResult<Prisma.$CryptocurrencyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cryptocurrency that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CryptocurrencyFindUniqueOrThrowArgs} args - Arguments to find a Cryptocurrency
     * @example
     * // Get one Cryptocurrency
     * const cryptocurrency = await prisma.cryptocurrency.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CryptocurrencyFindUniqueOrThrowArgs>(args: SelectSubset<T, CryptocurrencyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CryptocurrencyClient<$Result.GetResult<Prisma.$CryptocurrencyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cryptocurrency that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CryptocurrencyFindFirstArgs} args - Arguments to find a Cryptocurrency
     * @example
     * // Get one Cryptocurrency
     * const cryptocurrency = await prisma.cryptocurrency.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CryptocurrencyFindFirstArgs>(args?: SelectSubset<T, CryptocurrencyFindFirstArgs<ExtArgs>>): Prisma__CryptocurrencyClient<$Result.GetResult<Prisma.$CryptocurrencyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cryptocurrency that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CryptocurrencyFindFirstOrThrowArgs} args - Arguments to find a Cryptocurrency
     * @example
     * // Get one Cryptocurrency
     * const cryptocurrency = await prisma.cryptocurrency.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CryptocurrencyFindFirstOrThrowArgs>(args?: SelectSubset<T, CryptocurrencyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CryptocurrencyClient<$Result.GetResult<Prisma.$CryptocurrencyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cryptocurrencies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CryptocurrencyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cryptocurrencies
     * const cryptocurrencies = await prisma.cryptocurrency.findMany()
     * 
     * // Get first 10 Cryptocurrencies
     * const cryptocurrencies = await prisma.cryptocurrency.findMany({ take: 10 })
     * 
     * // Only select the `currency_id`
     * const cryptocurrencyWithCurrency_idOnly = await prisma.cryptocurrency.findMany({ select: { currency_id: true } })
     * 
     */
    findMany<T extends CryptocurrencyFindManyArgs>(args?: SelectSubset<T, CryptocurrencyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CryptocurrencyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cryptocurrency.
     * @param {CryptocurrencyCreateArgs} args - Arguments to create a Cryptocurrency.
     * @example
     * // Create one Cryptocurrency
     * const Cryptocurrency = await prisma.cryptocurrency.create({
     *   data: {
     *     // ... data to create a Cryptocurrency
     *   }
     * })
     * 
     */
    create<T extends CryptocurrencyCreateArgs>(args: SelectSubset<T, CryptocurrencyCreateArgs<ExtArgs>>): Prisma__CryptocurrencyClient<$Result.GetResult<Prisma.$CryptocurrencyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cryptocurrencies.
     * @param {CryptocurrencyCreateManyArgs} args - Arguments to create many Cryptocurrencies.
     * @example
     * // Create many Cryptocurrencies
     * const cryptocurrency = await prisma.cryptocurrency.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CryptocurrencyCreateManyArgs>(args?: SelectSubset<T, CryptocurrencyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cryptocurrencies and returns the data saved in the database.
     * @param {CryptocurrencyCreateManyAndReturnArgs} args - Arguments to create many Cryptocurrencies.
     * @example
     * // Create many Cryptocurrencies
     * const cryptocurrency = await prisma.cryptocurrency.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cryptocurrencies and only return the `currency_id`
     * const cryptocurrencyWithCurrency_idOnly = await prisma.cryptocurrency.createManyAndReturn({
     *   select: { currency_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CryptocurrencyCreateManyAndReturnArgs>(args?: SelectSubset<T, CryptocurrencyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CryptocurrencyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cryptocurrency.
     * @param {CryptocurrencyDeleteArgs} args - Arguments to delete one Cryptocurrency.
     * @example
     * // Delete one Cryptocurrency
     * const Cryptocurrency = await prisma.cryptocurrency.delete({
     *   where: {
     *     // ... filter to delete one Cryptocurrency
     *   }
     * })
     * 
     */
    delete<T extends CryptocurrencyDeleteArgs>(args: SelectSubset<T, CryptocurrencyDeleteArgs<ExtArgs>>): Prisma__CryptocurrencyClient<$Result.GetResult<Prisma.$CryptocurrencyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cryptocurrency.
     * @param {CryptocurrencyUpdateArgs} args - Arguments to update one Cryptocurrency.
     * @example
     * // Update one Cryptocurrency
     * const cryptocurrency = await prisma.cryptocurrency.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CryptocurrencyUpdateArgs>(args: SelectSubset<T, CryptocurrencyUpdateArgs<ExtArgs>>): Prisma__CryptocurrencyClient<$Result.GetResult<Prisma.$CryptocurrencyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cryptocurrencies.
     * @param {CryptocurrencyDeleteManyArgs} args - Arguments to filter Cryptocurrencies to delete.
     * @example
     * // Delete a few Cryptocurrencies
     * const { count } = await prisma.cryptocurrency.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CryptocurrencyDeleteManyArgs>(args?: SelectSubset<T, CryptocurrencyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cryptocurrencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CryptocurrencyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cryptocurrencies
     * const cryptocurrency = await prisma.cryptocurrency.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CryptocurrencyUpdateManyArgs>(args: SelectSubset<T, CryptocurrencyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cryptocurrencies and returns the data updated in the database.
     * @param {CryptocurrencyUpdateManyAndReturnArgs} args - Arguments to update many Cryptocurrencies.
     * @example
     * // Update many Cryptocurrencies
     * const cryptocurrency = await prisma.cryptocurrency.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cryptocurrencies and only return the `currency_id`
     * const cryptocurrencyWithCurrency_idOnly = await prisma.cryptocurrency.updateManyAndReturn({
     *   select: { currency_id: true },
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
    updateManyAndReturn<T extends CryptocurrencyUpdateManyAndReturnArgs>(args: SelectSubset<T, CryptocurrencyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CryptocurrencyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cryptocurrency.
     * @param {CryptocurrencyUpsertArgs} args - Arguments to update or create a Cryptocurrency.
     * @example
     * // Update or create a Cryptocurrency
     * const cryptocurrency = await prisma.cryptocurrency.upsert({
     *   create: {
     *     // ... data to create a Cryptocurrency
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cryptocurrency we want to update
     *   }
     * })
     */
    upsert<T extends CryptocurrencyUpsertArgs>(args: SelectSubset<T, CryptocurrencyUpsertArgs<ExtArgs>>): Prisma__CryptocurrencyClient<$Result.GetResult<Prisma.$CryptocurrencyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cryptocurrencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CryptocurrencyCountArgs} args - Arguments to filter Cryptocurrencies to count.
     * @example
     * // Count the number of Cryptocurrencies
     * const count = await prisma.cryptocurrency.count({
     *   where: {
     *     // ... the filter for the Cryptocurrencies we want to count
     *   }
     * })
    **/
    count<T extends CryptocurrencyCountArgs>(
      args?: Subset<T, CryptocurrencyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CryptocurrencyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cryptocurrency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CryptocurrencyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CryptocurrencyAggregateArgs>(args: Subset<T, CryptocurrencyAggregateArgs>): Prisma.PrismaPromise<GetCryptocurrencyAggregateType<T>>

    /**
     * Group by Cryptocurrency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CryptocurrencyGroupByArgs} args - Group by arguments.
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
      T extends CryptocurrencyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CryptocurrencyGroupByArgs['orderBy'] }
        : { orderBy?: CryptocurrencyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CryptocurrencyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCryptocurrencyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cryptocurrency model
   */
  readonly fields: CryptocurrencyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cryptocurrency.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CryptocurrencyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    wallets<T extends Cryptocurrency$walletsArgs<ExtArgs> = {}>(args?: Subset<T, Cryptocurrency$walletsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends Cryptocurrency$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Cryptocurrency$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends Cryptocurrency$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Cryptocurrency$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Cryptocurrency model
   */
  interface CryptocurrencyFieldRefs {
    readonly currency_id: FieldRef<"Cryptocurrency", 'Int'>
    readonly symbol: FieldRef<"Cryptocurrency", 'String'>
    readonly name: FieldRef<"Cryptocurrency", 'String'>
    readonly decimal_places: FieldRef<"Cryptocurrency", 'Int'>
    readonly created_at: FieldRef<"Cryptocurrency", 'DateTime'>
    readonly updated_at: FieldRef<"Cryptocurrency", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cryptocurrency findUnique
   */
  export type CryptocurrencyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cryptocurrency
     */
    select?: CryptocurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cryptocurrency
     */
    omit?: CryptocurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptocurrencyInclude<ExtArgs> | null
    /**
     * Filter, which Cryptocurrency to fetch.
     */
    where: CryptocurrencyWhereUniqueInput
  }

  /**
   * Cryptocurrency findUniqueOrThrow
   */
  export type CryptocurrencyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cryptocurrency
     */
    select?: CryptocurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cryptocurrency
     */
    omit?: CryptocurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptocurrencyInclude<ExtArgs> | null
    /**
     * Filter, which Cryptocurrency to fetch.
     */
    where: CryptocurrencyWhereUniqueInput
  }

  /**
   * Cryptocurrency findFirst
   */
  export type CryptocurrencyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cryptocurrency
     */
    select?: CryptocurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cryptocurrency
     */
    omit?: CryptocurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptocurrencyInclude<ExtArgs> | null
    /**
     * Filter, which Cryptocurrency to fetch.
     */
    where?: CryptocurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cryptocurrencies to fetch.
     */
    orderBy?: CryptocurrencyOrderByWithRelationInput | CryptocurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cryptocurrencies.
     */
    cursor?: CryptocurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cryptocurrencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cryptocurrencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cryptocurrencies.
     */
    distinct?: CryptocurrencyScalarFieldEnum | CryptocurrencyScalarFieldEnum[]
  }

  /**
   * Cryptocurrency findFirstOrThrow
   */
  export type CryptocurrencyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cryptocurrency
     */
    select?: CryptocurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cryptocurrency
     */
    omit?: CryptocurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptocurrencyInclude<ExtArgs> | null
    /**
     * Filter, which Cryptocurrency to fetch.
     */
    where?: CryptocurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cryptocurrencies to fetch.
     */
    orderBy?: CryptocurrencyOrderByWithRelationInput | CryptocurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cryptocurrencies.
     */
    cursor?: CryptocurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cryptocurrencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cryptocurrencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cryptocurrencies.
     */
    distinct?: CryptocurrencyScalarFieldEnum | CryptocurrencyScalarFieldEnum[]
  }

  /**
   * Cryptocurrency findMany
   */
  export type CryptocurrencyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cryptocurrency
     */
    select?: CryptocurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cryptocurrency
     */
    omit?: CryptocurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptocurrencyInclude<ExtArgs> | null
    /**
     * Filter, which Cryptocurrencies to fetch.
     */
    where?: CryptocurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cryptocurrencies to fetch.
     */
    orderBy?: CryptocurrencyOrderByWithRelationInput | CryptocurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cryptocurrencies.
     */
    cursor?: CryptocurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cryptocurrencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cryptocurrencies.
     */
    skip?: number
    distinct?: CryptocurrencyScalarFieldEnum | CryptocurrencyScalarFieldEnum[]
  }

  /**
   * Cryptocurrency create
   */
  export type CryptocurrencyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cryptocurrency
     */
    select?: CryptocurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cryptocurrency
     */
    omit?: CryptocurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptocurrencyInclude<ExtArgs> | null
    /**
     * The data needed to create a Cryptocurrency.
     */
    data: XOR<CryptocurrencyCreateInput, CryptocurrencyUncheckedCreateInput>
  }

  /**
   * Cryptocurrency createMany
   */
  export type CryptocurrencyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cryptocurrencies.
     */
    data: CryptocurrencyCreateManyInput | CryptocurrencyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cryptocurrency createManyAndReturn
   */
  export type CryptocurrencyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cryptocurrency
     */
    select?: CryptocurrencySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cryptocurrency
     */
    omit?: CryptocurrencyOmit<ExtArgs> | null
    /**
     * The data used to create many Cryptocurrencies.
     */
    data: CryptocurrencyCreateManyInput | CryptocurrencyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cryptocurrency update
   */
  export type CryptocurrencyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cryptocurrency
     */
    select?: CryptocurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cryptocurrency
     */
    omit?: CryptocurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptocurrencyInclude<ExtArgs> | null
    /**
     * The data needed to update a Cryptocurrency.
     */
    data: XOR<CryptocurrencyUpdateInput, CryptocurrencyUncheckedUpdateInput>
    /**
     * Choose, which Cryptocurrency to update.
     */
    where: CryptocurrencyWhereUniqueInput
  }

  /**
   * Cryptocurrency updateMany
   */
  export type CryptocurrencyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cryptocurrencies.
     */
    data: XOR<CryptocurrencyUpdateManyMutationInput, CryptocurrencyUncheckedUpdateManyInput>
    /**
     * Filter which Cryptocurrencies to update
     */
    where?: CryptocurrencyWhereInput
    /**
     * Limit how many Cryptocurrencies to update.
     */
    limit?: number
  }

  /**
   * Cryptocurrency updateManyAndReturn
   */
  export type CryptocurrencyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cryptocurrency
     */
    select?: CryptocurrencySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cryptocurrency
     */
    omit?: CryptocurrencyOmit<ExtArgs> | null
    /**
     * The data used to update Cryptocurrencies.
     */
    data: XOR<CryptocurrencyUpdateManyMutationInput, CryptocurrencyUncheckedUpdateManyInput>
    /**
     * Filter which Cryptocurrencies to update
     */
    where?: CryptocurrencyWhereInput
    /**
     * Limit how many Cryptocurrencies to update.
     */
    limit?: number
  }

  /**
   * Cryptocurrency upsert
   */
  export type CryptocurrencyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cryptocurrency
     */
    select?: CryptocurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cryptocurrency
     */
    omit?: CryptocurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptocurrencyInclude<ExtArgs> | null
    /**
     * The filter to search for the Cryptocurrency to update in case it exists.
     */
    where: CryptocurrencyWhereUniqueInput
    /**
     * In case the Cryptocurrency found by the `where` argument doesn't exist, create a new Cryptocurrency with this data.
     */
    create: XOR<CryptocurrencyCreateInput, CryptocurrencyUncheckedCreateInput>
    /**
     * In case the Cryptocurrency was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CryptocurrencyUpdateInput, CryptocurrencyUncheckedUpdateInput>
  }

  /**
   * Cryptocurrency delete
   */
  export type CryptocurrencyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cryptocurrency
     */
    select?: CryptocurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cryptocurrency
     */
    omit?: CryptocurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptocurrencyInclude<ExtArgs> | null
    /**
     * Filter which Cryptocurrency to delete.
     */
    where: CryptocurrencyWhereUniqueInput
  }

  /**
   * Cryptocurrency deleteMany
   */
  export type CryptocurrencyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cryptocurrencies to delete
     */
    where?: CryptocurrencyWhereInput
    /**
     * Limit how many Cryptocurrencies to delete.
     */
    limit?: number
  }

  /**
   * Cryptocurrency.wallets
   */
  export type Cryptocurrency$walletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    where?: WalletWhereInput
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    cursor?: WalletWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * Cryptocurrency.orders
   */
  export type Cryptocurrency$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Cryptocurrency.transactions
   */
  export type Cryptocurrency$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Cryptocurrency without action
   */
  export type CryptocurrencyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cryptocurrency
     */
    select?: CryptocurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cryptocurrency
     */
    omit?: CryptocurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptocurrencyInclude<ExtArgs> | null
  }


  /**
   * Model FiatCurrency
   */

  export type AggregateFiatCurrency = {
    _count: FiatCurrencyCountAggregateOutputType | null
    _avg: FiatCurrencyAvgAggregateOutputType | null
    _sum: FiatCurrencySumAggregateOutputType | null
    _min: FiatCurrencyMinAggregateOutputType | null
    _max: FiatCurrencyMaxAggregateOutputType | null
  }

  export type FiatCurrencyAvgAggregateOutputType = {
    fiat_id: number | null
  }

  export type FiatCurrencySumAggregateOutputType = {
    fiat_id: number | null
  }

  export type FiatCurrencyMinAggregateOutputType = {
    fiat_id: number | null
    symbol: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type FiatCurrencyMaxAggregateOutputType = {
    fiat_id: number | null
    symbol: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type FiatCurrencyCountAggregateOutputType = {
    fiat_id: number
    symbol: number
    name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type FiatCurrencyAvgAggregateInputType = {
    fiat_id?: true
  }

  export type FiatCurrencySumAggregateInputType = {
    fiat_id?: true
  }

  export type FiatCurrencyMinAggregateInputType = {
    fiat_id?: true
    symbol?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type FiatCurrencyMaxAggregateInputType = {
    fiat_id?: true
    symbol?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type FiatCurrencyCountAggregateInputType = {
    fiat_id?: true
    symbol?: true
    name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type FiatCurrencyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FiatCurrency to aggregate.
     */
    where?: FiatCurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FiatCurrencies to fetch.
     */
    orderBy?: FiatCurrencyOrderByWithRelationInput | FiatCurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FiatCurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FiatCurrencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FiatCurrencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FiatCurrencies
    **/
    _count?: true | FiatCurrencyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FiatCurrencyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FiatCurrencySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FiatCurrencyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FiatCurrencyMaxAggregateInputType
  }

  export type GetFiatCurrencyAggregateType<T extends FiatCurrencyAggregateArgs> = {
        [P in keyof T & keyof AggregateFiatCurrency]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFiatCurrency[P]>
      : GetScalarType<T[P], AggregateFiatCurrency[P]>
  }




  export type FiatCurrencyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FiatCurrencyWhereInput
    orderBy?: FiatCurrencyOrderByWithAggregationInput | FiatCurrencyOrderByWithAggregationInput[]
    by: FiatCurrencyScalarFieldEnum[] | FiatCurrencyScalarFieldEnum
    having?: FiatCurrencyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FiatCurrencyCountAggregateInputType | true
    _avg?: FiatCurrencyAvgAggregateInputType
    _sum?: FiatCurrencySumAggregateInputType
    _min?: FiatCurrencyMinAggregateInputType
    _max?: FiatCurrencyMaxAggregateInputType
  }

  export type FiatCurrencyGroupByOutputType = {
    fiat_id: number
    symbol: string
    name: string
    created_at: Date
    updated_at: Date
    _count: FiatCurrencyCountAggregateOutputType | null
    _avg: FiatCurrencyAvgAggregateOutputType | null
    _sum: FiatCurrencySumAggregateOutputType | null
    _min: FiatCurrencyMinAggregateOutputType | null
    _max: FiatCurrencyMaxAggregateOutputType | null
  }

  type GetFiatCurrencyGroupByPayload<T extends FiatCurrencyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FiatCurrencyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FiatCurrencyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FiatCurrencyGroupByOutputType[P]>
            : GetScalarType<T[P], FiatCurrencyGroupByOutputType[P]>
        }
      >
    >


  export type FiatCurrencySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fiat_id?: boolean
    symbol?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    orders?: boolean | FiatCurrency$ordersArgs<ExtArgs>
    transactions?: boolean | FiatCurrency$transactionsArgs<ExtArgs>
    _count?: boolean | FiatCurrencyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fiatCurrency"]>

  export type FiatCurrencySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fiat_id?: boolean
    symbol?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["fiatCurrency"]>

  export type FiatCurrencySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fiat_id?: boolean
    symbol?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["fiatCurrency"]>

  export type FiatCurrencySelectScalar = {
    fiat_id?: boolean
    symbol?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type FiatCurrencyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"fiat_id" | "symbol" | "name" | "created_at" | "updated_at", ExtArgs["result"]["fiatCurrency"]>
  export type FiatCurrencyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | FiatCurrency$ordersArgs<ExtArgs>
    transactions?: boolean | FiatCurrency$transactionsArgs<ExtArgs>
    _count?: boolean | FiatCurrencyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FiatCurrencyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FiatCurrencyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FiatCurrencyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FiatCurrency"
    objects: {
      orders: Prisma.$OrderPayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      fiat_id: number
      symbol: string
      name: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["fiatCurrency"]>
    composites: {}
  }

  type FiatCurrencyGetPayload<S extends boolean | null | undefined | FiatCurrencyDefaultArgs> = $Result.GetResult<Prisma.$FiatCurrencyPayload, S>

  type FiatCurrencyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FiatCurrencyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FiatCurrencyCountAggregateInputType | true
    }

  export interface FiatCurrencyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FiatCurrency'], meta: { name: 'FiatCurrency' } }
    /**
     * Find zero or one FiatCurrency that matches the filter.
     * @param {FiatCurrencyFindUniqueArgs} args - Arguments to find a FiatCurrency
     * @example
     * // Get one FiatCurrency
     * const fiatCurrency = await prisma.fiatCurrency.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FiatCurrencyFindUniqueArgs>(args: SelectSubset<T, FiatCurrencyFindUniqueArgs<ExtArgs>>): Prisma__FiatCurrencyClient<$Result.GetResult<Prisma.$FiatCurrencyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FiatCurrency that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FiatCurrencyFindUniqueOrThrowArgs} args - Arguments to find a FiatCurrency
     * @example
     * // Get one FiatCurrency
     * const fiatCurrency = await prisma.fiatCurrency.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FiatCurrencyFindUniqueOrThrowArgs>(args: SelectSubset<T, FiatCurrencyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FiatCurrencyClient<$Result.GetResult<Prisma.$FiatCurrencyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FiatCurrency that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiatCurrencyFindFirstArgs} args - Arguments to find a FiatCurrency
     * @example
     * // Get one FiatCurrency
     * const fiatCurrency = await prisma.fiatCurrency.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FiatCurrencyFindFirstArgs>(args?: SelectSubset<T, FiatCurrencyFindFirstArgs<ExtArgs>>): Prisma__FiatCurrencyClient<$Result.GetResult<Prisma.$FiatCurrencyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FiatCurrency that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiatCurrencyFindFirstOrThrowArgs} args - Arguments to find a FiatCurrency
     * @example
     * // Get one FiatCurrency
     * const fiatCurrency = await prisma.fiatCurrency.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FiatCurrencyFindFirstOrThrowArgs>(args?: SelectSubset<T, FiatCurrencyFindFirstOrThrowArgs<ExtArgs>>): Prisma__FiatCurrencyClient<$Result.GetResult<Prisma.$FiatCurrencyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FiatCurrencies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiatCurrencyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FiatCurrencies
     * const fiatCurrencies = await prisma.fiatCurrency.findMany()
     * 
     * // Get first 10 FiatCurrencies
     * const fiatCurrencies = await prisma.fiatCurrency.findMany({ take: 10 })
     * 
     * // Only select the `fiat_id`
     * const fiatCurrencyWithFiat_idOnly = await prisma.fiatCurrency.findMany({ select: { fiat_id: true } })
     * 
     */
    findMany<T extends FiatCurrencyFindManyArgs>(args?: SelectSubset<T, FiatCurrencyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FiatCurrencyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FiatCurrency.
     * @param {FiatCurrencyCreateArgs} args - Arguments to create a FiatCurrency.
     * @example
     * // Create one FiatCurrency
     * const FiatCurrency = await prisma.fiatCurrency.create({
     *   data: {
     *     // ... data to create a FiatCurrency
     *   }
     * })
     * 
     */
    create<T extends FiatCurrencyCreateArgs>(args: SelectSubset<T, FiatCurrencyCreateArgs<ExtArgs>>): Prisma__FiatCurrencyClient<$Result.GetResult<Prisma.$FiatCurrencyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FiatCurrencies.
     * @param {FiatCurrencyCreateManyArgs} args - Arguments to create many FiatCurrencies.
     * @example
     * // Create many FiatCurrencies
     * const fiatCurrency = await prisma.fiatCurrency.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FiatCurrencyCreateManyArgs>(args?: SelectSubset<T, FiatCurrencyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FiatCurrencies and returns the data saved in the database.
     * @param {FiatCurrencyCreateManyAndReturnArgs} args - Arguments to create many FiatCurrencies.
     * @example
     * // Create many FiatCurrencies
     * const fiatCurrency = await prisma.fiatCurrency.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FiatCurrencies and only return the `fiat_id`
     * const fiatCurrencyWithFiat_idOnly = await prisma.fiatCurrency.createManyAndReturn({
     *   select: { fiat_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FiatCurrencyCreateManyAndReturnArgs>(args?: SelectSubset<T, FiatCurrencyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FiatCurrencyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FiatCurrency.
     * @param {FiatCurrencyDeleteArgs} args - Arguments to delete one FiatCurrency.
     * @example
     * // Delete one FiatCurrency
     * const FiatCurrency = await prisma.fiatCurrency.delete({
     *   where: {
     *     // ... filter to delete one FiatCurrency
     *   }
     * })
     * 
     */
    delete<T extends FiatCurrencyDeleteArgs>(args: SelectSubset<T, FiatCurrencyDeleteArgs<ExtArgs>>): Prisma__FiatCurrencyClient<$Result.GetResult<Prisma.$FiatCurrencyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FiatCurrency.
     * @param {FiatCurrencyUpdateArgs} args - Arguments to update one FiatCurrency.
     * @example
     * // Update one FiatCurrency
     * const fiatCurrency = await prisma.fiatCurrency.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FiatCurrencyUpdateArgs>(args: SelectSubset<T, FiatCurrencyUpdateArgs<ExtArgs>>): Prisma__FiatCurrencyClient<$Result.GetResult<Prisma.$FiatCurrencyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FiatCurrencies.
     * @param {FiatCurrencyDeleteManyArgs} args - Arguments to filter FiatCurrencies to delete.
     * @example
     * // Delete a few FiatCurrencies
     * const { count } = await prisma.fiatCurrency.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FiatCurrencyDeleteManyArgs>(args?: SelectSubset<T, FiatCurrencyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FiatCurrencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiatCurrencyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FiatCurrencies
     * const fiatCurrency = await prisma.fiatCurrency.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FiatCurrencyUpdateManyArgs>(args: SelectSubset<T, FiatCurrencyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FiatCurrencies and returns the data updated in the database.
     * @param {FiatCurrencyUpdateManyAndReturnArgs} args - Arguments to update many FiatCurrencies.
     * @example
     * // Update many FiatCurrencies
     * const fiatCurrency = await prisma.fiatCurrency.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FiatCurrencies and only return the `fiat_id`
     * const fiatCurrencyWithFiat_idOnly = await prisma.fiatCurrency.updateManyAndReturn({
     *   select: { fiat_id: true },
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
    updateManyAndReturn<T extends FiatCurrencyUpdateManyAndReturnArgs>(args: SelectSubset<T, FiatCurrencyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FiatCurrencyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FiatCurrency.
     * @param {FiatCurrencyUpsertArgs} args - Arguments to update or create a FiatCurrency.
     * @example
     * // Update or create a FiatCurrency
     * const fiatCurrency = await prisma.fiatCurrency.upsert({
     *   create: {
     *     // ... data to create a FiatCurrency
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FiatCurrency we want to update
     *   }
     * })
     */
    upsert<T extends FiatCurrencyUpsertArgs>(args: SelectSubset<T, FiatCurrencyUpsertArgs<ExtArgs>>): Prisma__FiatCurrencyClient<$Result.GetResult<Prisma.$FiatCurrencyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FiatCurrencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiatCurrencyCountArgs} args - Arguments to filter FiatCurrencies to count.
     * @example
     * // Count the number of FiatCurrencies
     * const count = await prisma.fiatCurrency.count({
     *   where: {
     *     // ... the filter for the FiatCurrencies we want to count
     *   }
     * })
    **/
    count<T extends FiatCurrencyCountArgs>(
      args?: Subset<T, FiatCurrencyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FiatCurrencyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FiatCurrency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiatCurrencyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FiatCurrencyAggregateArgs>(args: Subset<T, FiatCurrencyAggregateArgs>): Prisma.PrismaPromise<GetFiatCurrencyAggregateType<T>>

    /**
     * Group by FiatCurrency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiatCurrencyGroupByArgs} args - Group by arguments.
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
      T extends FiatCurrencyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FiatCurrencyGroupByArgs['orderBy'] }
        : { orderBy?: FiatCurrencyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FiatCurrencyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFiatCurrencyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FiatCurrency model
   */
  readonly fields: FiatCurrencyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FiatCurrency.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FiatCurrencyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends FiatCurrency$ordersArgs<ExtArgs> = {}>(args?: Subset<T, FiatCurrency$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends FiatCurrency$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, FiatCurrency$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the FiatCurrency model
   */
  interface FiatCurrencyFieldRefs {
    readonly fiat_id: FieldRef<"FiatCurrency", 'Int'>
    readonly symbol: FieldRef<"FiatCurrency", 'String'>
    readonly name: FieldRef<"FiatCurrency", 'String'>
    readonly created_at: FieldRef<"FiatCurrency", 'DateTime'>
    readonly updated_at: FieldRef<"FiatCurrency", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FiatCurrency findUnique
   */
  export type FiatCurrencyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiatCurrency
     */
    select?: FiatCurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FiatCurrency
     */
    omit?: FiatCurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiatCurrencyInclude<ExtArgs> | null
    /**
     * Filter, which FiatCurrency to fetch.
     */
    where: FiatCurrencyWhereUniqueInput
  }

  /**
   * FiatCurrency findUniqueOrThrow
   */
  export type FiatCurrencyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiatCurrency
     */
    select?: FiatCurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FiatCurrency
     */
    omit?: FiatCurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiatCurrencyInclude<ExtArgs> | null
    /**
     * Filter, which FiatCurrency to fetch.
     */
    where: FiatCurrencyWhereUniqueInput
  }

  /**
   * FiatCurrency findFirst
   */
  export type FiatCurrencyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiatCurrency
     */
    select?: FiatCurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FiatCurrency
     */
    omit?: FiatCurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiatCurrencyInclude<ExtArgs> | null
    /**
     * Filter, which FiatCurrency to fetch.
     */
    where?: FiatCurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FiatCurrencies to fetch.
     */
    orderBy?: FiatCurrencyOrderByWithRelationInput | FiatCurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FiatCurrencies.
     */
    cursor?: FiatCurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FiatCurrencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FiatCurrencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FiatCurrencies.
     */
    distinct?: FiatCurrencyScalarFieldEnum | FiatCurrencyScalarFieldEnum[]
  }

  /**
   * FiatCurrency findFirstOrThrow
   */
  export type FiatCurrencyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiatCurrency
     */
    select?: FiatCurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FiatCurrency
     */
    omit?: FiatCurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiatCurrencyInclude<ExtArgs> | null
    /**
     * Filter, which FiatCurrency to fetch.
     */
    where?: FiatCurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FiatCurrencies to fetch.
     */
    orderBy?: FiatCurrencyOrderByWithRelationInput | FiatCurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FiatCurrencies.
     */
    cursor?: FiatCurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FiatCurrencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FiatCurrencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FiatCurrencies.
     */
    distinct?: FiatCurrencyScalarFieldEnum | FiatCurrencyScalarFieldEnum[]
  }

  /**
   * FiatCurrency findMany
   */
  export type FiatCurrencyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiatCurrency
     */
    select?: FiatCurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FiatCurrency
     */
    omit?: FiatCurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiatCurrencyInclude<ExtArgs> | null
    /**
     * Filter, which FiatCurrencies to fetch.
     */
    where?: FiatCurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FiatCurrencies to fetch.
     */
    orderBy?: FiatCurrencyOrderByWithRelationInput | FiatCurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FiatCurrencies.
     */
    cursor?: FiatCurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FiatCurrencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FiatCurrencies.
     */
    skip?: number
    distinct?: FiatCurrencyScalarFieldEnum | FiatCurrencyScalarFieldEnum[]
  }

  /**
   * FiatCurrency create
   */
  export type FiatCurrencyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiatCurrency
     */
    select?: FiatCurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FiatCurrency
     */
    omit?: FiatCurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiatCurrencyInclude<ExtArgs> | null
    /**
     * The data needed to create a FiatCurrency.
     */
    data: XOR<FiatCurrencyCreateInput, FiatCurrencyUncheckedCreateInput>
  }

  /**
   * FiatCurrency createMany
   */
  export type FiatCurrencyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FiatCurrencies.
     */
    data: FiatCurrencyCreateManyInput | FiatCurrencyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FiatCurrency createManyAndReturn
   */
  export type FiatCurrencyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiatCurrency
     */
    select?: FiatCurrencySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FiatCurrency
     */
    omit?: FiatCurrencyOmit<ExtArgs> | null
    /**
     * The data used to create many FiatCurrencies.
     */
    data: FiatCurrencyCreateManyInput | FiatCurrencyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FiatCurrency update
   */
  export type FiatCurrencyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiatCurrency
     */
    select?: FiatCurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FiatCurrency
     */
    omit?: FiatCurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiatCurrencyInclude<ExtArgs> | null
    /**
     * The data needed to update a FiatCurrency.
     */
    data: XOR<FiatCurrencyUpdateInput, FiatCurrencyUncheckedUpdateInput>
    /**
     * Choose, which FiatCurrency to update.
     */
    where: FiatCurrencyWhereUniqueInput
  }

  /**
   * FiatCurrency updateMany
   */
  export type FiatCurrencyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FiatCurrencies.
     */
    data: XOR<FiatCurrencyUpdateManyMutationInput, FiatCurrencyUncheckedUpdateManyInput>
    /**
     * Filter which FiatCurrencies to update
     */
    where?: FiatCurrencyWhereInput
    /**
     * Limit how many FiatCurrencies to update.
     */
    limit?: number
  }

  /**
   * FiatCurrency updateManyAndReturn
   */
  export type FiatCurrencyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiatCurrency
     */
    select?: FiatCurrencySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FiatCurrency
     */
    omit?: FiatCurrencyOmit<ExtArgs> | null
    /**
     * The data used to update FiatCurrencies.
     */
    data: XOR<FiatCurrencyUpdateManyMutationInput, FiatCurrencyUncheckedUpdateManyInput>
    /**
     * Filter which FiatCurrencies to update
     */
    where?: FiatCurrencyWhereInput
    /**
     * Limit how many FiatCurrencies to update.
     */
    limit?: number
  }

  /**
   * FiatCurrency upsert
   */
  export type FiatCurrencyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiatCurrency
     */
    select?: FiatCurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FiatCurrency
     */
    omit?: FiatCurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiatCurrencyInclude<ExtArgs> | null
    /**
     * The filter to search for the FiatCurrency to update in case it exists.
     */
    where: FiatCurrencyWhereUniqueInput
    /**
     * In case the FiatCurrency found by the `where` argument doesn't exist, create a new FiatCurrency with this data.
     */
    create: XOR<FiatCurrencyCreateInput, FiatCurrencyUncheckedCreateInput>
    /**
     * In case the FiatCurrency was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FiatCurrencyUpdateInput, FiatCurrencyUncheckedUpdateInput>
  }

  /**
   * FiatCurrency delete
   */
  export type FiatCurrencyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiatCurrency
     */
    select?: FiatCurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FiatCurrency
     */
    omit?: FiatCurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiatCurrencyInclude<ExtArgs> | null
    /**
     * Filter which FiatCurrency to delete.
     */
    where: FiatCurrencyWhereUniqueInput
  }

  /**
   * FiatCurrency deleteMany
   */
  export type FiatCurrencyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FiatCurrencies to delete
     */
    where?: FiatCurrencyWhereInput
    /**
     * Limit how many FiatCurrencies to delete.
     */
    limit?: number
  }

  /**
   * FiatCurrency.orders
   */
  export type FiatCurrency$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * FiatCurrency.transactions
   */
  export type FiatCurrency$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * FiatCurrency without action
   */
  export type FiatCurrencyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiatCurrency
     */
    select?: FiatCurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FiatCurrency
     */
    omit?: FiatCurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiatCurrencyInclude<ExtArgs> | null
  }


  /**
   * Model Wallet
   */

  export type AggregateWallet = {
    _count: WalletCountAggregateOutputType | null
    _avg: WalletAvgAggregateOutputType | null
    _sum: WalletSumAggregateOutputType | null
    _min: WalletMinAggregateOutputType | null
    _max: WalletMaxAggregateOutputType | null
  }

  export type WalletAvgAggregateOutputType = {
    wallet_id: number | null
    user_id: number | null
    currency_id: number | null
    balance: Decimal | null
  }

  export type WalletSumAggregateOutputType = {
    wallet_id: number | null
    user_id: number | null
    currency_id: number | null
    balance: Decimal | null
  }

  export type WalletMinAggregateOutputType = {
    wallet_id: number | null
    user_id: number | null
    currency_id: number | null
    balance: Decimal | null
    wallet_address: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type WalletMaxAggregateOutputType = {
    wallet_id: number | null
    user_id: number | null
    currency_id: number | null
    balance: Decimal | null
    wallet_address: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type WalletCountAggregateOutputType = {
    wallet_id: number
    user_id: number
    currency_id: number
    balance: number
    wallet_address: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type WalletAvgAggregateInputType = {
    wallet_id?: true
    user_id?: true
    currency_id?: true
    balance?: true
  }

  export type WalletSumAggregateInputType = {
    wallet_id?: true
    user_id?: true
    currency_id?: true
    balance?: true
  }

  export type WalletMinAggregateInputType = {
    wallet_id?: true
    user_id?: true
    currency_id?: true
    balance?: true
    wallet_address?: true
    created_at?: true
    updated_at?: true
  }

  export type WalletMaxAggregateInputType = {
    wallet_id?: true
    user_id?: true
    currency_id?: true
    balance?: true
    wallet_address?: true
    created_at?: true
    updated_at?: true
  }

  export type WalletCountAggregateInputType = {
    wallet_id?: true
    user_id?: true
    currency_id?: true
    balance?: true
    wallet_address?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type WalletAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wallet to aggregate.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Wallets
    **/
    _count?: true | WalletCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WalletAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WalletSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WalletMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WalletMaxAggregateInputType
  }

  export type GetWalletAggregateType<T extends WalletAggregateArgs> = {
        [P in keyof T & keyof AggregateWallet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWallet[P]>
      : GetScalarType<T[P], AggregateWallet[P]>
  }




  export type WalletGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WalletWhereInput
    orderBy?: WalletOrderByWithAggregationInput | WalletOrderByWithAggregationInput[]
    by: WalletScalarFieldEnum[] | WalletScalarFieldEnum
    having?: WalletScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WalletCountAggregateInputType | true
    _avg?: WalletAvgAggregateInputType
    _sum?: WalletSumAggregateInputType
    _min?: WalletMinAggregateInputType
    _max?: WalletMaxAggregateInputType
  }

  export type WalletGroupByOutputType = {
    wallet_id: number
    user_id: number
    currency_id: number
    balance: Decimal
    wallet_address: string
    created_at: Date
    updated_at: Date
    _count: WalletCountAggregateOutputType | null
    _avg: WalletAvgAggregateOutputType | null
    _sum: WalletSumAggregateOutputType | null
    _min: WalletMinAggregateOutputType | null
    _max: WalletMaxAggregateOutputType | null
  }

  type GetWalletGroupByPayload<T extends WalletGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WalletGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WalletGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WalletGroupByOutputType[P]>
            : GetScalarType<T[P], WalletGroupByOutputType[P]>
        }
      >
    >


  export type WalletSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    wallet_id?: boolean
    user_id?: boolean
    currency_id?: boolean
    balance?: boolean
    wallet_address?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    cryptocurrency?: boolean | CryptocurrencyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallet"]>

  export type WalletSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    wallet_id?: boolean
    user_id?: boolean
    currency_id?: boolean
    balance?: boolean
    wallet_address?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    cryptocurrency?: boolean | CryptocurrencyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallet"]>

  export type WalletSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    wallet_id?: boolean
    user_id?: boolean
    currency_id?: boolean
    balance?: boolean
    wallet_address?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    cryptocurrency?: boolean | CryptocurrencyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallet"]>

  export type WalletSelectScalar = {
    wallet_id?: boolean
    user_id?: boolean
    currency_id?: boolean
    balance?: boolean
    wallet_address?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type WalletOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"wallet_id" | "user_id" | "currency_id" | "balance" | "wallet_address" | "created_at" | "updated_at", ExtArgs["result"]["wallet"]>
  export type WalletInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    cryptocurrency?: boolean | CryptocurrencyDefaultArgs<ExtArgs>
  }
  export type WalletIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    cryptocurrency?: boolean | CryptocurrencyDefaultArgs<ExtArgs>
  }
  export type WalletIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    cryptocurrency?: boolean | CryptocurrencyDefaultArgs<ExtArgs>
  }

  export type $WalletPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Wallet"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      cryptocurrency: Prisma.$CryptocurrencyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      wallet_id: number
      user_id: number
      currency_id: number
      balance: Prisma.Decimal
      wallet_address: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["wallet"]>
    composites: {}
  }

  type WalletGetPayload<S extends boolean | null | undefined | WalletDefaultArgs> = $Result.GetResult<Prisma.$WalletPayload, S>

  type WalletCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WalletFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WalletCountAggregateInputType | true
    }

  export interface WalletDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Wallet'], meta: { name: 'Wallet' } }
    /**
     * Find zero or one Wallet that matches the filter.
     * @param {WalletFindUniqueArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WalletFindUniqueArgs>(args: SelectSubset<T, WalletFindUniqueArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Wallet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WalletFindUniqueOrThrowArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WalletFindUniqueOrThrowArgs>(args: SelectSubset<T, WalletFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wallet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindFirstArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WalletFindFirstArgs>(args?: SelectSubset<T, WalletFindFirstArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wallet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindFirstOrThrowArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WalletFindFirstOrThrowArgs>(args?: SelectSubset<T, WalletFindFirstOrThrowArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Wallets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wallets
     * const wallets = await prisma.wallet.findMany()
     * 
     * // Get first 10 Wallets
     * const wallets = await prisma.wallet.findMany({ take: 10 })
     * 
     * // Only select the `wallet_id`
     * const walletWithWallet_idOnly = await prisma.wallet.findMany({ select: { wallet_id: true } })
     * 
     */
    findMany<T extends WalletFindManyArgs>(args?: SelectSubset<T, WalletFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Wallet.
     * @param {WalletCreateArgs} args - Arguments to create a Wallet.
     * @example
     * // Create one Wallet
     * const Wallet = await prisma.wallet.create({
     *   data: {
     *     // ... data to create a Wallet
     *   }
     * })
     * 
     */
    create<T extends WalletCreateArgs>(args: SelectSubset<T, WalletCreateArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Wallets.
     * @param {WalletCreateManyArgs} args - Arguments to create many Wallets.
     * @example
     * // Create many Wallets
     * const wallet = await prisma.wallet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WalletCreateManyArgs>(args?: SelectSubset<T, WalletCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Wallets and returns the data saved in the database.
     * @param {WalletCreateManyAndReturnArgs} args - Arguments to create many Wallets.
     * @example
     * // Create many Wallets
     * const wallet = await prisma.wallet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Wallets and only return the `wallet_id`
     * const walletWithWallet_idOnly = await prisma.wallet.createManyAndReturn({
     *   select: { wallet_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WalletCreateManyAndReturnArgs>(args?: SelectSubset<T, WalletCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Wallet.
     * @param {WalletDeleteArgs} args - Arguments to delete one Wallet.
     * @example
     * // Delete one Wallet
     * const Wallet = await prisma.wallet.delete({
     *   where: {
     *     // ... filter to delete one Wallet
     *   }
     * })
     * 
     */
    delete<T extends WalletDeleteArgs>(args: SelectSubset<T, WalletDeleteArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Wallet.
     * @param {WalletUpdateArgs} args - Arguments to update one Wallet.
     * @example
     * // Update one Wallet
     * const wallet = await prisma.wallet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WalletUpdateArgs>(args: SelectSubset<T, WalletUpdateArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Wallets.
     * @param {WalletDeleteManyArgs} args - Arguments to filter Wallets to delete.
     * @example
     * // Delete a few Wallets
     * const { count } = await prisma.wallet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WalletDeleteManyArgs>(args?: SelectSubset<T, WalletDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wallets
     * const wallet = await prisma.wallet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WalletUpdateManyArgs>(args: SelectSubset<T, WalletUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wallets and returns the data updated in the database.
     * @param {WalletUpdateManyAndReturnArgs} args - Arguments to update many Wallets.
     * @example
     * // Update many Wallets
     * const wallet = await prisma.wallet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Wallets and only return the `wallet_id`
     * const walletWithWallet_idOnly = await prisma.wallet.updateManyAndReturn({
     *   select: { wallet_id: true },
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
    updateManyAndReturn<T extends WalletUpdateManyAndReturnArgs>(args: SelectSubset<T, WalletUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Wallet.
     * @param {WalletUpsertArgs} args - Arguments to update or create a Wallet.
     * @example
     * // Update or create a Wallet
     * const wallet = await prisma.wallet.upsert({
     *   create: {
     *     // ... data to create a Wallet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wallet we want to update
     *   }
     * })
     */
    upsert<T extends WalletUpsertArgs>(args: SelectSubset<T, WalletUpsertArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletCountArgs} args - Arguments to filter Wallets to count.
     * @example
     * // Count the number of Wallets
     * const count = await prisma.wallet.count({
     *   where: {
     *     // ... the filter for the Wallets we want to count
     *   }
     * })
    **/
    count<T extends WalletCountArgs>(
      args?: Subset<T, WalletCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WalletCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WalletAggregateArgs>(args: Subset<T, WalletAggregateArgs>): Prisma.PrismaPromise<GetWalletAggregateType<T>>

    /**
     * Group by Wallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletGroupByArgs} args - Group by arguments.
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
      T extends WalletGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WalletGroupByArgs['orderBy'] }
        : { orderBy?: WalletGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WalletGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWalletGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Wallet model
   */
  readonly fields: WalletFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Wallet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WalletClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cryptocurrency<T extends CryptocurrencyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CryptocurrencyDefaultArgs<ExtArgs>>): Prisma__CryptocurrencyClient<$Result.GetResult<Prisma.$CryptocurrencyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Wallet model
   */
  interface WalletFieldRefs {
    readonly wallet_id: FieldRef<"Wallet", 'Int'>
    readonly user_id: FieldRef<"Wallet", 'Int'>
    readonly currency_id: FieldRef<"Wallet", 'Int'>
    readonly balance: FieldRef<"Wallet", 'Decimal'>
    readonly wallet_address: FieldRef<"Wallet", 'String'>
    readonly created_at: FieldRef<"Wallet", 'DateTime'>
    readonly updated_at: FieldRef<"Wallet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Wallet findUnique
   */
  export type WalletFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet findUniqueOrThrow
   */
  export type WalletFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet findFirst
   */
  export type WalletFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wallets.
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wallets.
     */
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * Wallet findFirstOrThrow
   */
  export type WalletFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wallets.
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wallets.
     */
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * Wallet findMany
   */
  export type WalletFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallets to fetch.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Wallets.
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * Wallet create
   */
  export type WalletCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * The data needed to create a Wallet.
     */
    data: XOR<WalletCreateInput, WalletUncheckedCreateInput>
  }

  /**
   * Wallet createMany
   */
  export type WalletCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Wallets.
     */
    data: WalletCreateManyInput | WalletCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Wallet createManyAndReturn
   */
  export type WalletCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * The data used to create many Wallets.
     */
    data: WalletCreateManyInput | WalletCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Wallet update
   */
  export type WalletUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * The data needed to update a Wallet.
     */
    data: XOR<WalletUpdateInput, WalletUncheckedUpdateInput>
    /**
     * Choose, which Wallet to update.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet updateMany
   */
  export type WalletUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Wallets.
     */
    data: XOR<WalletUpdateManyMutationInput, WalletUncheckedUpdateManyInput>
    /**
     * Filter which Wallets to update
     */
    where?: WalletWhereInput
    /**
     * Limit how many Wallets to update.
     */
    limit?: number
  }

  /**
   * Wallet updateManyAndReturn
   */
  export type WalletUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * The data used to update Wallets.
     */
    data: XOR<WalletUpdateManyMutationInput, WalletUncheckedUpdateManyInput>
    /**
     * Filter which Wallets to update
     */
    where?: WalletWhereInput
    /**
     * Limit how many Wallets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Wallet upsert
   */
  export type WalletUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * The filter to search for the Wallet to update in case it exists.
     */
    where: WalletWhereUniqueInput
    /**
     * In case the Wallet found by the `where` argument doesn't exist, create a new Wallet with this data.
     */
    create: XOR<WalletCreateInput, WalletUncheckedCreateInput>
    /**
     * In case the Wallet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WalletUpdateInput, WalletUncheckedUpdateInput>
  }

  /**
   * Wallet delete
   */
  export type WalletDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter which Wallet to delete.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet deleteMany
   */
  export type WalletDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wallets to delete
     */
    where?: WalletWhereInput
    /**
     * Limit how many Wallets to delete.
     */
    limit?: number
  }

  /**
   * Wallet without action
   */
  export type WalletDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    order_id: number | null
    maker_user_id: number | null
    taker_user_id: number | null
    crypto_currency_id: number | null
    fiat_currency_id: number | null
    crypto_amount: Decimal | null
    price_per_crypto: Decimal | null
    total_fiat_amount: Decimal | null
  }

  export type OrderSumAggregateOutputType = {
    order_id: number | null
    maker_user_id: number | null
    taker_user_id: number | null
    crypto_currency_id: number | null
    fiat_currency_id: number | null
    crypto_amount: Decimal | null
    price_per_crypto: Decimal | null
    total_fiat_amount: Decimal | null
  }

  export type OrderMinAggregateOutputType = {
    order_id: number | null
    maker_user_id: number | null
    taker_user_id: number | null
    order_type: string | null
    crypto_currency_id: number | null
    fiat_currency_id: number | null
    crypto_amount: Decimal | null
    price_per_crypto: Decimal | null
    total_fiat_amount: Decimal | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
    expiry_date: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    order_id: number | null
    maker_user_id: number | null
    taker_user_id: number | null
    order_type: string | null
    crypto_currency_id: number | null
    fiat_currency_id: number | null
    crypto_amount: Decimal | null
    price_per_crypto: Decimal | null
    total_fiat_amount: Decimal | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
    expiry_date: Date | null
  }

  export type OrderCountAggregateOutputType = {
    order_id: number
    maker_user_id: number
    taker_user_id: number
    order_type: number
    crypto_currency_id: number
    fiat_currency_id: number
    crypto_amount: number
    price_per_crypto: number
    total_fiat_amount: number
    status: number
    created_at: number
    updated_at: number
    expiry_date: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    order_id?: true
    maker_user_id?: true
    taker_user_id?: true
    crypto_currency_id?: true
    fiat_currency_id?: true
    crypto_amount?: true
    price_per_crypto?: true
    total_fiat_amount?: true
  }

  export type OrderSumAggregateInputType = {
    order_id?: true
    maker_user_id?: true
    taker_user_id?: true
    crypto_currency_id?: true
    fiat_currency_id?: true
    crypto_amount?: true
    price_per_crypto?: true
    total_fiat_amount?: true
  }

  export type OrderMinAggregateInputType = {
    order_id?: true
    maker_user_id?: true
    taker_user_id?: true
    order_type?: true
    crypto_currency_id?: true
    fiat_currency_id?: true
    crypto_amount?: true
    price_per_crypto?: true
    total_fiat_amount?: true
    status?: true
    created_at?: true
    updated_at?: true
    expiry_date?: true
  }

  export type OrderMaxAggregateInputType = {
    order_id?: true
    maker_user_id?: true
    taker_user_id?: true
    order_type?: true
    crypto_currency_id?: true
    fiat_currency_id?: true
    crypto_amount?: true
    price_per_crypto?: true
    total_fiat_amount?: true
    status?: true
    created_at?: true
    updated_at?: true
    expiry_date?: true
  }

  export type OrderCountAggregateInputType = {
    order_id?: true
    maker_user_id?: true
    taker_user_id?: true
    order_type?: true
    crypto_currency_id?: true
    fiat_currency_id?: true
    crypto_amount?: true
    price_per_crypto?: true
    total_fiat_amount?: true
    status?: true
    created_at?: true
    updated_at?: true
    expiry_date?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    order_id: number
    maker_user_id: number
    taker_user_id: number | null
    order_type: string
    crypto_currency_id: number
    fiat_currency_id: number
    crypto_amount: Decimal
    price_per_crypto: Decimal
    total_fiat_amount: Decimal
    status: string
    created_at: Date
    updated_at: Date
    expiry_date: Date | null
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_id?: boolean
    maker_user_id?: boolean
    taker_user_id?: boolean
    order_type?: boolean
    crypto_currency_id?: boolean
    fiat_currency_id?: boolean
    crypto_amount?: boolean
    price_per_crypto?: boolean
    total_fiat_amount?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    expiry_date?: boolean
    maker?: boolean | UserDefaultArgs<ExtArgs>
    taker?: boolean | Order$takerArgs<ExtArgs>
    crypto_currency?: boolean | CryptocurrencyDefaultArgs<ExtArgs>
    fiat_currency?: boolean | FiatCurrencyDefaultArgs<ExtArgs>
    transactions?: boolean | Order$transactionsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_id?: boolean
    maker_user_id?: boolean
    taker_user_id?: boolean
    order_type?: boolean
    crypto_currency_id?: boolean
    fiat_currency_id?: boolean
    crypto_amount?: boolean
    price_per_crypto?: boolean
    total_fiat_amount?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    expiry_date?: boolean
    maker?: boolean | UserDefaultArgs<ExtArgs>
    taker?: boolean | Order$takerArgs<ExtArgs>
    crypto_currency?: boolean | CryptocurrencyDefaultArgs<ExtArgs>
    fiat_currency?: boolean | FiatCurrencyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_id?: boolean
    maker_user_id?: boolean
    taker_user_id?: boolean
    order_type?: boolean
    crypto_currency_id?: boolean
    fiat_currency_id?: boolean
    crypto_amount?: boolean
    price_per_crypto?: boolean
    total_fiat_amount?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    expiry_date?: boolean
    maker?: boolean | UserDefaultArgs<ExtArgs>
    taker?: boolean | Order$takerArgs<ExtArgs>
    crypto_currency?: boolean | CryptocurrencyDefaultArgs<ExtArgs>
    fiat_currency?: boolean | FiatCurrencyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    order_id?: boolean
    maker_user_id?: boolean
    taker_user_id?: boolean
    order_type?: boolean
    crypto_currency_id?: boolean
    fiat_currency_id?: boolean
    crypto_amount?: boolean
    price_per_crypto?: boolean
    total_fiat_amount?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    expiry_date?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"order_id" | "maker_user_id" | "taker_user_id" | "order_type" | "crypto_currency_id" | "fiat_currency_id" | "crypto_amount" | "price_per_crypto" | "total_fiat_amount" | "status" | "created_at" | "updated_at" | "expiry_date", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    maker?: boolean | UserDefaultArgs<ExtArgs>
    taker?: boolean | Order$takerArgs<ExtArgs>
    crypto_currency?: boolean | CryptocurrencyDefaultArgs<ExtArgs>
    fiat_currency?: boolean | FiatCurrencyDefaultArgs<ExtArgs>
    transactions?: boolean | Order$transactionsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    maker?: boolean | UserDefaultArgs<ExtArgs>
    taker?: boolean | Order$takerArgs<ExtArgs>
    crypto_currency?: boolean | CryptocurrencyDefaultArgs<ExtArgs>
    fiat_currency?: boolean | FiatCurrencyDefaultArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    maker?: boolean | UserDefaultArgs<ExtArgs>
    taker?: boolean | Order$takerArgs<ExtArgs>
    crypto_currency?: boolean | CryptocurrencyDefaultArgs<ExtArgs>
    fiat_currency?: boolean | FiatCurrencyDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      maker: Prisma.$UserPayload<ExtArgs>
      taker: Prisma.$UserPayload<ExtArgs> | null
      crypto_currency: Prisma.$CryptocurrencyPayload<ExtArgs>
      fiat_currency: Prisma.$FiatCurrencyPayload<ExtArgs>
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      order_id: number
      maker_user_id: number
      taker_user_id: number | null
      order_type: string
      crypto_currency_id: number
      fiat_currency_id: number
      crypto_amount: Prisma.Decimal
      price_per_crypto: Prisma.Decimal
      total_fiat_amount: Prisma.Decimal
      status: string
      created_at: Date
      updated_at: Date
      expiry_date: Date | null
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `order_id`
     * const orderWithOrder_idOnly = await prisma.order.findMany({ select: { order_id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `order_id`
     * const orderWithOrder_idOnly = await prisma.order.createManyAndReturn({
     *   select: { order_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `order_id`
     * const orderWithOrder_idOnly = await prisma.order.updateManyAndReturn({
     *   select: { order_id: true },
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
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
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
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    maker<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    taker<T extends Order$takerArgs<ExtArgs> = {}>(args?: Subset<T, Order$takerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    crypto_currency<T extends CryptocurrencyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CryptocurrencyDefaultArgs<ExtArgs>>): Prisma__CryptocurrencyClient<$Result.GetResult<Prisma.$CryptocurrencyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fiat_currency<T extends FiatCurrencyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FiatCurrencyDefaultArgs<ExtArgs>>): Prisma__FiatCurrencyClient<$Result.GetResult<Prisma.$FiatCurrencyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactions<T extends Order$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Order$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly order_id: FieldRef<"Order", 'Int'>
    readonly maker_user_id: FieldRef<"Order", 'Int'>
    readonly taker_user_id: FieldRef<"Order", 'Int'>
    readonly order_type: FieldRef<"Order", 'String'>
    readonly crypto_currency_id: FieldRef<"Order", 'Int'>
    readonly fiat_currency_id: FieldRef<"Order", 'Int'>
    readonly crypto_amount: FieldRef<"Order", 'Decimal'>
    readonly price_per_crypto: FieldRef<"Order", 'Decimal'>
    readonly total_fiat_amount: FieldRef<"Order", 'Decimal'>
    readonly status: FieldRef<"Order", 'String'>
    readonly created_at: FieldRef<"Order", 'DateTime'>
    readonly updated_at: FieldRef<"Order", 'DateTime'>
    readonly expiry_date: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.taker
   */
  export type Order$takerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Order.transactions
   */
  export type Order$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    transaction_id: number | null
    sender_user_id: number | null
    receiver_user_id: number | null
    order_id: number | null
    crypto_currency_id: number | null
    fiat_currency_id: number | null
    amount: Decimal | null
    transaction_fee: Decimal | null
  }

  export type TransactionSumAggregateOutputType = {
    transaction_id: number | null
    sender_user_id: number | null
    receiver_user_id: number | null
    order_id: number | null
    crypto_currency_id: number | null
    fiat_currency_id: number | null
    amount: Decimal | null
    transaction_fee: Decimal | null
  }

  export type TransactionMinAggregateOutputType = {
    transaction_id: number | null
    sender_user_id: number | null
    receiver_user_id: number | null
    order_id: number | null
    transaction_type: string | null
    crypto_currency_id: number | null
    fiat_currency_id: number | null
    amount: Decimal | null
    transaction_fee: Decimal | null
    status: string | null
    transaction_date: Date | null
    external_address: string | null
    tx_hash: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    transaction_id: number | null
    sender_user_id: number | null
    receiver_user_id: number | null
    order_id: number | null
    transaction_type: string | null
    crypto_currency_id: number | null
    fiat_currency_id: number | null
    amount: Decimal | null
    transaction_fee: Decimal | null
    status: string | null
    transaction_date: Date | null
    external_address: string | null
    tx_hash: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    transaction_id: number
    sender_user_id: number
    receiver_user_id: number
    order_id: number
    transaction_type: number
    crypto_currency_id: number
    fiat_currency_id: number
    amount: number
    transaction_fee: number
    status: number
    transaction_date: number
    external_address: number
    tx_hash: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    transaction_id?: true
    sender_user_id?: true
    receiver_user_id?: true
    order_id?: true
    crypto_currency_id?: true
    fiat_currency_id?: true
    amount?: true
    transaction_fee?: true
  }

  export type TransactionSumAggregateInputType = {
    transaction_id?: true
    sender_user_id?: true
    receiver_user_id?: true
    order_id?: true
    crypto_currency_id?: true
    fiat_currency_id?: true
    amount?: true
    transaction_fee?: true
  }

  export type TransactionMinAggregateInputType = {
    transaction_id?: true
    sender_user_id?: true
    receiver_user_id?: true
    order_id?: true
    transaction_type?: true
    crypto_currency_id?: true
    fiat_currency_id?: true
    amount?: true
    transaction_fee?: true
    status?: true
    transaction_date?: true
    external_address?: true
    tx_hash?: true
    created_at?: true
    updated_at?: true
  }

  export type TransactionMaxAggregateInputType = {
    transaction_id?: true
    sender_user_id?: true
    receiver_user_id?: true
    order_id?: true
    transaction_type?: true
    crypto_currency_id?: true
    fiat_currency_id?: true
    amount?: true
    transaction_fee?: true
    status?: true
    transaction_date?: true
    external_address?: true
    tx_hash?: true
    created_at?: true
    updated_at?: true
  }

  export type TransactionCountAggregateInputType = {
    transaction_id?: true
    sender_user_id?: true
    receiver_user_id?: true
    order_id?: true
    transaction_type?: true
    crypto_currency_id?: true
    fiat_currency_id?: true
    amount?: true
    transaction_fee?: true
    status?: true
    transaction_date?: true
    external_address?: true
    tx_hash?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    transaction_id: number
    sender_user_id: number | null
    receiver_user_id: number | null
    order_id: number | null
    transaction_type: string
    crypto_currency_id: number | null
    fiat_currency_id: number | null
    amount: Decimal
    transaction_fee: Decimal
    status: string
    transaction_date: Date
    external_address: string | null
    tx_hash: string | null
    created_at: Date
    updated_at: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    transaction_id?: boolean
    sender_user_id?: boolean
    receiver_user_id?: boolean
    order_id?: boolean
    transaction_type?: boolean
    crypto_currency_id?: boolean
    fiat_currency_id?: boolean
    amount?: boolean
    transaction_fee?: boolean
    status?: boolean
    transaction_date?: boolean
    external_address?: boolean
    tx_hash?: boolean
    created_at?: boolean
    updated_at?: boolean
    sender?: boolean | Transaction$senderArgs<ExtArgs>
    receiver?: boolean | Transaction$receiverArgs<ExtArgs>
    order?: boolean | Transaction$orderArgs<ExtArgs>
    crypto_currency?: boolean | Transaction$crypto_currencyArgs<ExtArgs>
    fiat_currency?: boolean | Transaction$fiat_currencyArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    transaction_id?: boolean
    sender_user_id?: boolean
    receiver_user_id?: boolean
    order_id?: boolean
    transaction_type?: boolean
    crypto_currency_id?: boolean
    fiat_currency_id?: boolean
    amount?: boolean
    transaction_fee?: boolean
    status?: boolean
    transaction_date?: boolean
    external_address?: boolean
    tx_hash?: boolean
    created_at?: boolean
    updated_at?: boolean
    sender?: boolean | Transaction$senderArgs<ExtArgs>
    receiver?: boolean | Transaction$receiverArgs<ExtArgs>
    order?: boolean | Transaction$orderArgs<ExtArgs>
    crypto_currency?: boolean | Transaction$crypto_currencyArgs<ExtArgs>
    fiat_currency?: boolean | Transaction$fiat_currencyArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    transaction_id?: boolean
    sender_user_id?: boolean
    receiver_user_id?: boolean
    order_id?: boolean
    transaction_type?: boolean
    crypto_currency_id?: boolean
    fiat_currency_id?: boolean
    amount?: boolean
    transaction_fee?: boolean
    status?: boolean
    transaction_date?: boolean
    external_address?: boolean
    tx_hash?: boolean
    created_at?: boolean
    updated_at?: boolean
    sender?: boolean | Transaction$senderArgs<ExtArgs>
    receiver?: boolean | Transaction$receiverArgs<ExtArgs>
    order?: boolean | Transaction$orderArgs<ExtArgs>
    crypto_currency?: boolean | Transaction$crypto_currencyArgs<ExtArgs>
    fiat_currency?: boolean | Transaction$fiat_currencyArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    transaction_id?: boolean
    sender_user_id?: boolean
    receiver_user_id?: boolean
    order_id?: boolean
    transaction_type?: boolean
    crypto_currency_id?: boolean
    fiat_currency_id?: boolean
    amount?: boolean
    transaction_fee?: boolean
    status?: boolean
    transaction_date?: boolean
    external_address?: boolean
    tx_hash?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"transaction_id" | "sender_user_id" | "receiver_user_id" | "order_id" | "transaction_type" | "crypto_currency_id" | "fiat_currency_id" | "amount" | "transaction_fee" | "status" | "transaction_date" | "external_address" | "tx_hash" | "created_at" | "updated_at", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | Transaction$senderArgs<ExtArgs>
    receiver?: boolean | Transaction$receiverArgs<ExtArgs>
    order?: boolean | Transaction$orderArgs<ExtArgs>
    crypto_currency?: boolean | Transaction$crypto_currencyArgs<ExtArgs>
    fiat_currency?: boolean | Transaction$fiat_currencyArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | Transaction$senderArgs<ExtArgs>
    receiver?: boolean | Transaction$receiverArgs<ExtArgs>
    order?: boolean | Transaction$orderArgs<ExtArgs>
    crypto_currency?: boolean | Transaction$crypto_currencyArgs<ExtArgs>
    fiat_currency?: boolean | Transaction$fiat_currencyArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | Transaction$senderArgs<ExtArgs>
    receiver?: boolean | Transaction$receiverArgs<ExtArgs>
    order?: boolean | Transaction$orderArgs<ExtArgs>
    crypto_currency?: boolean | Transaction$crypto_currencyArgs<ExtArgs>
    fiat_currency?: boolean | Transaction$fiat_currencyArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs> | null
      receiver: Prisma.$UserPayload<ExtArgs> | null
      order: Prisma.$OrderPayload<ExtArgs> | null
      crypto_currency: Prisma.$CryptocurrencyPayload<ExtArgs> | null
      fiat_currency: Prisma.$FiatCurrencyPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      transaction_id: number
      sender_user_id: number | null
      receiver_user_id: number | null
      order_id: number | null
      transaction_type: string
      crypto_currency_id: number | null
      fiat_currency_id: number | null
      amount: Prisma.Decimal
      transaction_fee: Prisma.Decimal
      status: string
      transaction_date: Date
      external_address: string | null
      tx_hash: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `transaction_id`
     * const transactionWithTransaction_idOnly = await prisma.transaction.findMany({ select: { transaction_id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `transaction_id`
     * const transactionWithTransaction_idOnly = await prisma.transaction.createManyAndReturn({
     *   select: { transaction_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `transaction_id`
     * const transactionWithTransaction_idOnly = await prisma.transaction.updateManyAndReturn({
     *   select: { transaction_id: true },
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
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
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
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends Transaction$senderArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$senderArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    receiver<T extends Transaction$receiverArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$receiverArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    order<T extends Transaction$orderArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$orderArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    crypto_currency<T extends Transaction$crypto_currencyArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$crypto_currencyArgs<ExtArgs>>): Prisma__CryptocurrencyClient<$Result.GetResult<Prisma.$CryptocurrencyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    fiat_currency<T extends Transaction$fiat_currencyArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$fiat_currencyArgs<ExtArgs>>): Prisma__FiatCurrencyClient<$Result.GetResult<Prisma.$FiatCurrencyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly transaction_id: FieldRef<"Transaction", 'Int'>
    readonly sender_user_id: FieldRef<"Transaction", 'Int'>
    readonly receiver_user_id: FieldRef<"Transaction", 'Int'>
    readonly order_id: FieldRef<"Transaction", 'Int'>
    readonly transaction_type: FieldRef<"Transaction", 'String'>
    readonly crypto_currency_id: FieldRef<"Transaction", 'Int'>
    readonly fiat_currency_id: FieldRef<"Transaction", 'Int'>
    readonly amount: FieldRef<"Transaction", 'Decimal'>
    readonly transaction_fee: FieldRef<"Transaction", 'Decimal'>
    readonly status: FieldRef<"Transaction", 'String'>
    readonly transaction_date: FieldRef<"Transaction", 'DateTime'>
    readonly external_address: FieldRef<"Transaction", 'String'>
    readonly tx_hash: FieldRef<"Transaction", 'String'>
    readonly created_at: FieldRef<"Transaction", 'DateTime'>
    readonly updated_at: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction.sender
   */
  export type Transaction$senderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Transaction.receiver
   */
  export type Transaction$receiverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Transaction.order
   */
  export type Transaction$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
  }

  /**
   * Transaction.crypto_currency
   */
  export type Transaction$crypto_currencyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cryptocurrency
     */
    select?: CryptocurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cryptocurrency
     */
    omit?: CryptocurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptocurrencyInclude<ExtArgs> | null
    where?: CryptocurrencyWhereInput
  }

  /**
   * Transaction.fiat_currency
   */
  export type Transaction$fiat_currencyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiatCurrency
     */
    select?: FiatCurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FiatCurrency
     */
    omit?: FiatCurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiatCurrencyInclude<ExtArgs> | null
    where?: FiatCurrencyWhereInput
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model PaymentMethod
   */

  export type AggregatePaymentMethod = {
    _count: PaymentMethodCountAggregateOutputType | null
    _avg: PaymentMethodAvgAggregateOutputType | null
    _sum: PaymentMethodSumAggregateOutputType | null
    _min: PaymentMethodMinAggregateOutputType | null
    _max: PaymentMethodMaxAggregateOutputType | null
  }

  export type PaymentMethodAvgAggregateOutputType = {
    payment_method_id: number | null
    user_id: number | null
  }

  export type PaymentMethodSumAggregateOutputType = {
    payment_method_id: number | null
    user_id: number | null
  }

  export type PaymentMethodMinAggregateOutputType = {
    payment_method_id: number | null
    user_id: number | null
    method_type: string | null
    is_verified: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PaymentMethodMaxAggregateOutputType = {
    payment_method_id: number | null
    user_id: number | null
    method_type: string | null
    is_verified: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PaymentMethodCountAggregateOutputType = {
    payment_method_id: number
    user_id: number
    method_type: number
    details: number
    is_verified: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PaymentMethodAvgAggregateInputType = {
    payment_method_id?: true
    user_id?: true
  }

  export type PaymentMethodSumAggregateInputType = {
    payment_method_id?: true
    user_id?: true
  }

  export type PaymentMethodMinAggregateInputType = {
    payment_method_id?: true
    user_id?: true
    method_type?: true
    is_verified?: true
    created_at?: true
    updated_at?: true
  }

  export type PaymentMethodMaxAggregateInputType = {
    payment_method_id?: true
    user_id?: true
    method_type?: true
    is_verified?: true
    created_at?: true
    updated_at?: true
  }

  export type PaymentMethodCountAggregateInputType = {
    payment_method_id?: true
    user_id?: true
    method_type?: true
    details?: true
    is_verified?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PaymentMethodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentMethod to aggregate.
     */
    where?: PaymentMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentMethods
    **/
    _count?: true | PaymentMethodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentMethodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentMethodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMethodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMethodMaxAggregateInputType
  }

  export type GetPaymentMethodAggregateType<T extends PaymentMethodAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentMethod]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentMethod[P]>
      : GetScalarType<T[P], AggregatePaymentMethod[P]>
  }




  export type PaymentMethodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentMethodWhereInput
    orderBy?: PaymentMethodOrderByWithAggregationInput | PaymentMethodOrderByWithAggregationInput[]
    by: PaymentMethodScalarFieldEnum[] | PaymentMethodScalarFieldEnum
    having?: PaymentMethodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentMethodCountAggregateInputType | true
    _avg?: PaymentMethodAvgAggregateInputType
    _sum?: PaymentMethodSumAggregateInputType
    _min?: PaymentMethodMinAggregateInputType
    _max?: PaymentMethodMaxAggregateInputType
  }

  export type PaymentMethodGroupByOutputType = {
    payment_method_id: number
    user_id: number
    method_type: string
    details: JsonValue
    is_verified: boolean
    created_at: Date
    updated_at: Date
    _count: PaymentMethodCountAggregateOutputType | null
    _avg: PaymentMethodAvgAggregateOutputType | null
    _sum: PaymentMethodSumAggregateOutputType | null
    _min: PaymentMethodMinAggregateOutputType | null
    _max: PaymentMethodMaxAggregateOutputType | null
  }

  type GetPaymentMethodGroupByPayload<T extends PaymentMethodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentMethodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentMethodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentMethodGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentMethodGroupByOutputType[P]>
        }
      >
    >


  export type PaymentMethodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    payment_method_id?: boolean
    user_id?: boolean
    method_type?: boolean
    details?: boolean
    is_verified?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentMethod"]>

  export type PaymentMethodSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    payment_method_id?: boolean
    user_id?: boolean
    method_type?: boolean
    details?: boolean
    is_verified?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentMethod"]>

  export type PaymentMethodSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    payment_method_id?: boolean
    user_id?: boolean
    method_type?: boolean
    details?: boolean
    is_verified?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentMethod"]>

  export type PaymentMethodSelectScalar = {
    payment_method_id?: boolean
    user_id?: boolean
    method_type?: boolean
    details?: boolean
    is_verified?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type PaymentMethodOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"payment_method_id" | "user_id" | "method_type" | "details" | "is_verified" | "created_at" | "updated_at", ExtArgs["result"]["paymentMethod"]>
  export type PaymentMethodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PaymentMethodIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PaymentMethodIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PaymentMethodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentMethod"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      payment_method_id: number
      user_id: number
      method_type: string
      details: Prisma.JsonValue
      is_verified: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["paymentMethod"]>
    composites: {}
  }

  type PaymentMethodGetPayload<S extends boolean | null | undefined | PaymentMethodDefaultArgs> = $Result.GetResult<Prisma.$PaymentMethodPayload, S>

  type PaymentMethodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentMethodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentMethodCountAggregateInputType | true
    }

  export interface PaymentMethodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentMethod'], meta: { name: 'PaymentMethod' } }
    /**
     * Find zero or one PaymentMethod that matches the filter.
     * @param {PaymentMethodFindUniqueArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentMethodFindUniqueArgs>(args: SelectSubset<T, PaymentMethodFindUniqueArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentMethod that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentMethodFindUniqueOrThrowArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentMethodFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentMethodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentMethod that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodFindFirstArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentMethodFindFirstArgs>(args?: SelectSubset<T, PaymentMethodFindFirstArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentMethod that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodFindFirstOrThrowArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentMethodFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentMethodFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentMethods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentMethods
     * const paymentMethods = await prisma.paymentMethod.findMany()
     * 
     * // Get first 10 PaymentMethods
     * const paymentMethods = await prisma.paymentMethod.findMany({ take: 10 })
     * 
     * // Only select the `payment_method_id`
     * const paymentMethodWithPayment_method_idOnly = await prisma.paymentMethod.findMany({ select: { payment_method_id: true } })
     * 
     */
    findMany<T extends PaymentMethodFindManyArgs>(args?: SelectSubset<T, PaymentMethodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentMethod.
     * @param {PaymentMethodCreateArgs} args - Arguments to create a PaymentMethod.
     * @example
     * // Create one PaymentMethod
     * const PaymentMethod = await prisma.paymentMethod.create({
     *   data: {
     *     // ... data to create a PaymentMethod
     *   }
     * })
     * 
     */
    create<T extends PaymentMethodCreateArgs>(args: SelectSubset<T, PaymentMethodCreateArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentMethods.
     * @param {PaymentMethodCreateManyArgs} args - Arguments to create many PaymentMethods.
     * @example
     * // Create many PaymentMethods
     * const paymentMethod = await prisma.paymentMethod.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentMethodCreateManyArgs>(args?: SelectSubset<T, PaymentMethodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentMethods and returns the data saved in the database.
     * @param {PaymentMethodCreateManyAndReturnArgs} args - Arguments to create many PaymentMethods.
     * @example
     * // Create many PaymentMethods
     * const paymentMethod = await prisma.paymentMethod.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentMethods and only return the `payment_method_id`
     * const paymentMethodWithPayment_method_idOnly = await prisma.paymentMethod.createManyAndReturn({
     *   select: { payment_method_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentMethodCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentMethodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PaymentMethod.
     * @param {PaymentMethodDeleteArgs} args - Arguments to delete one PaymentMethod.
     * @example
     * // Delete one PaymentMethod
     * const PaymentMethod = await prisma.paymentMethod.delete({
     *   where: {
     *     // ... filter to delete one PaymentMethod
     *   }
     * })
     * 
     */
    delete<T extends PaymentMethodDeleteArgs>(args: SelectSubset<T, PaymentMethodDeleteArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentMethod.
     * @param {PaymentMethodUpdateArgs} args - Arguments to update one PaymentMethod.
     * @example
     * // Update one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentMethodUpdateArgs>(args: SelectSubset<T, PaymentMethodUpdateArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentMethods.
     * @param {PaymentMethodDeleteManyArgs} args - Arguments to filter PaymentMethods to delete.
     * @example
     * // Delete a few PaymentMethods
     * const { count } = await prisma.paymentMethod.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentMethodDeleteManyArgs>(args?: SelectSubset<T, PaymentMethodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentMethods
     * const paymentMethod = await prisma.paymentMethod.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentMethodUpdateManyArgs>(args: SelectSubset<T, PaymentMethodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentMethods and returns the data updated in the database.
     * @param {PaymentMethodUpdateManyAndReturnArgs} args - Arguments to update many PaymentMethods.
     * @example
     * // Update many PaymentMethods
     * const paymentMethod = await prisma.paymentMethod.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PaymentMethods and only return the `payment_method_id`
     * const paymentMethodWithPayment_method_idOnly = await prisma.paymentMethod.updateManyAndReturn({
     *   select: { payment_method_id: true },
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
    updateManyAndReturn<T extends PaymentMethodUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentMethodUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PaymentMethod.
     * @param {PaymentMethodUpsertArgs} args - Arguments to update or create a PaymentMethod.
     * @example
     * // Update or create a PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.upsert({
     *   create: {
     *     // ... data to create a PaymentMethod
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentMethod we want to update
     *   }
     * })
     */
    upsert<T extends PaymentMethodUpsertArgs>(args: SelectSubset<T, PaymentMethodUpsertArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodCountArgs} args - Arguments to filter PaymentMethods to count.
     * @example
     * // Count the number of PaymentMethods
     * const count = await prisma.paymentMethod.count({
     *   where: {
     *     // ... the filter for the PaymentMethods we want to count
     *   }
     * })
    **/
    count<T extends PaymentMethodCountArgs>(
      args?: Subset<T, PaymentMethodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentMethodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentMethod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentMethodAggregateArgs>(args: Subset<T, PaymentMethodAggregateArgs>): Prisma.PrismaPromise<GetPaymentMethodAggregateType<T>>

    /**
     * Group by PaymentMethod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodGroupByArgs} args - Group by arguments.
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
      T extends PaymentMethodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentMethodGroupByArgs['orderBy'] }
        : { orderBy?: PaymentMethodGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentMethodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentMethodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentMethod model
   */
  readonly fields: PaymentMethodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentMethod.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentMethodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PaymentMethod model
   */
  interface PaymentMethodFieldRefs {
    readonly payment_method_id: FieldRef<"PaymentMethod", 'Int'>
    readonly user_id: FieldRef<"PaymentMethod", 'Int'>
    readonly method_type: FieldRef<"PaymentMethod", 'String'>
    readonly details: FieldRef<"PaymentMethod", 'Json'>
    readonly is_verified: FieldRef<"PaymentMethod", 'Boolean'>
    readonly created_at: FieldRef<"PaymentMethod", 'DateTime'>
    readonly updated_at: FieldRef<"PaymentMethod", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PaymentMethod findUnique
   */
  export type PaymentMethodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where: PaymentMethodWhereUniqueInput
  }

  /**
   * PaymentMethod findUniqueOrThrow
   */
  export type PaymentMethodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where: PaymentMethodWhereUniqueInput
  }

  /**
   * PaymentMethod findFirst
   */
  export type PaymentMethodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where?: PaymentMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentMethods.
     */
    cursor?: PaymentMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentMethods.
     */
    distinct?: PaymentMethodScalarFieldEnum | PaymentMethodScalarFieldEnum[]
  }

  /**
   * PaymentMethod findFirstOrThrow
   */
  export type PaymentMethodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where?: PaymentMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentMethods.
     */
    cursor?: PaymentMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentMethods.
     */
    distinct?: PaymentMethodScalarFieldEnum | PaymentMethodScalarFieldEnum[]
  }

  /**
   * PaymentMethod findMany
   */
  export type PaymentMethodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethods to fetch.
     */
    where?: PaymentMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentMethods.
     */
    cursor?: PaymentMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    distinct?: PaymentMethodScalarFieldEnum | PaymentMethodScalarFieldEnum[]
  }

  /**
   * PaymentMethod create
   */
  export type PaymentMethodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentMethod.
     */
    data: XOR<PaymentMethodCreateInput, PaymentMethodUncheckedCreateInput>
  }

  /**
   * PaymentMethod createMany
   */
  export type PaymentMethodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentMethods.
     */
    data: PaymentMethodCreateManyInput | PaymentMethodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentMethod createManyAndReturn
   */
  export type PaymentMethodCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * The data used to create many PaymentMethods.
     */
    data: PaymentMethodCreateManyInput | PaymentMethodCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentMethod update
   */
  export type PaymentMethodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentMethod.
     */
    data: XOR<PaymentMethodUpdateInput, PaymentMethodUncheckedUpdateInput>
    /**
     * Choose, which PaymentMethod to update.
     */
    where: PaymentMethodWhereUniqueInput
  }

  /**
   * PaymentMethod updateMany
   */
  export type PaymentMethodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentMethods.
     */
    data: XOR<PaymentMethodUpdateManyMutationInput, PaymentMethodUncheckedUpdateManyInput>
    /**
     * Filter which PaymentMethods to update
     */
    where?: PaymentMethodWhereInput
    /**
     * Limit how many PaymentMethods to update.
     */
    limit?: number
  }

  /**
   * PaymentMethod updateManyAndReturn
   */
  export type PaymentMethodUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * The data used to update PaymentMethods.
     */
    data: XOR<PaymentMethodUpdateManyMutationInput, PaymentMethodUncheckedUpdateManyInput>
    /**
     * Filter which PaymentMethods to update
     */
    where?: PaymentMethodWhereInput
    /**
     * Limit how many PaymentMethods to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentMethod upsert
   */
  export type PaymentMethodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentMethod to update in case it exists.
     */
    where: PaymentMethodWhereUniqueInput
    /**
     * In case the PaymentMethod found by the `where` argument doesn't exist, create a new PaymentMethod with this data.
     */
    create: XOR<PaymentMethodCreateInput, PaymentMethodUncheckedCreateInput>
    /**
     * In case the PaymentMethod was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentMethodUpdateInput, PaymentMethodUncheckedUpdateInput>
  }

  /**
   * PaymentMethod delete
   */
  export type PaymentMethodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter which PaymentMethod to delete.
     */
    where: PaymentMethodWhereUniqueInput
  }

  /**
   * PaymentMethod deleteMany
   */
  export type PaymentMethodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentMethods to delete
     */
    where?: PaymentMethodWhereInput
    /**
     * Limit how many PaymentMethods to delete.
     */
    limit?: number
  }

  /**
   * PaymentMethod without action
   */
  export type PaymentMethodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    user_id: 'user_id',
    username: 'username',
    email: 'email',
    password_hash: 'password_hash',
    fiat_balance_thb: 'fiat_balance_thb',
    fiat_balance_usd: 'fiat_balance_usd',
    registration_date: 'registration_date',
    is_verified: 'is_verified'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CryptocurrencyScalarFieldEnum: {
    currency_id: 'currency_id',
    symbol: 'symbol',
    name: 'name',
    decimal_places: 'decimal_places',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CryptocurrencyScalarFieldEnum = (typeof CryptocurrencyScalarFieldEnum)[keyof typeof CryptocurrencyScalarFieldEnum]


  export const FiatCurrencyScalarFieldEnum: {
    fiat_id: 'fiat_id',
    symbol: 'symbol',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type FiatCurrencyScalarFieldEnum = (typeof FiatCurrencyScalarFieldEnum)[keyof typeof FiatCurrencyScalarFieldEnum]


  export const WalletScalarFieldEnum: {
    wallet_id: 'wallet_id',
    user_id: 'user_id',
    currency_id: 'currency_id',
    balance: 'balance',
    wallet_address: 'wallet_address',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type WalletScalarFieldEnum = (typeof WalletScalarFieldEnum)[keyof typeof WalletScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    order_id: 'order_id',
    maker_user_id: 'maker_user_id',
    taker_user_id: 'taker_user_id',
    order_type: 'order_type',
    crypto_currency_id: 'crypto_currency_id',
    fiat_currency_id: 'fiat_currency_id',
    crypto_amount: 'crypto_amount',
    price_per_crypto: 'price_per_crypto',
    total_fiat_amount: 'total_fiat_amount',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at',
    expiry_date: 'expiry_date'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    transaction_id: 'transaction_id',
    sender_user_id: 'sender_user_id',
    receiver_user_id: 'receiver_user_id',
    order_id: 'order_id',
    transaction_type: 'transaction_type',
    crypto_currency_id: 'crypto_currency_id',
    fiat_currency_id: 'fiat_currency_id',
    amount: 'amount',
    transaction_fee: 'transaction_fee',
    status: 'status',
    transaction_date: 'transaction_date',
    external_address: 'external_address',
    tx_hash: 'tx_hash',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const PaymentMethodScalarFieldEnum: {
    payment_method_id: 'payment_method_id',
    user_id: 'user_id',
    method_type: 'method_type',
    details: 'details',
    is_verified: 'is_verified',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PaymentMethodScalarFieldEnum = (typeof PaymentMethodScalarFieldEnum)[keyof typeof PaymentMethodScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    user_id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password_hash?: StringFilter<"User"> | string
    fiat_balance_thb?: DecimalFilter<"User"> | Decimal | DecimalJsLike | number | string
    fiat_balance_usd?: DecimalFilter<"User"> | Decimal | DecimalJsLike | number | string
    registration_date?: DateTimeFilter<"User"> | Date | string
    is_verified?: BoolFilter<"User"> | boolean
    wallets?: WalletListRelationFilter
    payment_methods?: PaymentMethodListRelationFilter
    orders_made?: OrderListRelationFilter
    orders_taken?: OrderListRelationFilter
    transactions_sent?: TransactionListRelationFilter
    transactions_received?: TransactionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    user_id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    fiat_balance_thb?: SortOrder
    fiat_balance_usd?: SortOrder
    registration_date?: SortOrder
    is_verified?: SortOrder
    wallets?: WalletOrderByRelationAggregateInput
    payment_methods?: PaymentMethodOrderByRelationAggregateInput
    orders_made?: OrderOrderByRelationAggregateInput
    orders_taken?: OrderOrderByRelationAggregateInput
    transactions_sent?: TransactionOrderByRelationAggregateInput
    transactions_received?: TransactionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password_hash?: StringFilter<"User"> | string
    fiat_balance_thb?: DecimalFilter<"User"> | Decimal | DecimalJsLike | number | string
    fiat_balance_usd?: DecimalFilter<"User"> | Decimal | DecimalJsLike | number | string
    registration_date?: DateTimeFilter<"User"> | Date | string
    is_verified?: BoolFilter<"User"> | boolean
    wallets?: WalletListRelationFilter
    payment_methods?: PaymentMethodListRelationFilter
    orders_made?: OrderListRelationFilter
    orders_taken?: OrderListRelationFilter
    transactions_sent?: TransactionListRelationFilter
    transactions_received?: TransactionListRelationFilter
  }, "user_id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    user_id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    fiat_balance_thb?: SortOrder
    fiat_balance_usd?: SortOrder
    registration_date?: SortOrder
    is_verified?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password_hash?: StringWithAggregatesFilter<"User"> | string
    fiat_balance_thb?: DecimalWithAggregatesFilter<"User"> | Decimal | DecimalJsLike | number | string
    fiat_balance_usd?: DecimalWithAggregatesFilter<"User"> | Decimal | DecimalJsLike | number | string
    registration_date?: DateTimeWithAggregatesFilter<"User"> | Date | string
    is_verified?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type CryptocurrencyWhereInput = {
    AND?: CryptocurrencyWhereInput | CryptocurrencyWhereInput[]
    OR?: CryptocurrencyWhereInput[]
    NOT?: CryptocurrencyWhereInput | CryptocurrencyWhereInput[]
    currency_id?: IntFilter<"Cryptocurrency"> | number
    symbol?: StringFilter<"Cryptocurrency"> | string
    name?: StringFilter<"Cryptocurrency"> | string
    decimal_places?: IntFilter<"Cryptocurrency"> | number
    created_at?: DateTimeFilter<"Cryptocurrency"> | Date | string
    updated_at?: DateTimeFilter<"Cryptocurrency"> | Date | string
    wallets?: WalletListRelationFilter
    orders?: OrderListRelationFilter
    transactions?: TransactionListRelationFilter
  }

  export type CryptocurrencyOrderByWithRelationInput = {
    currency_id?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    decimal_places?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    wallets?: WalletOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
  }

  export type CryptocurrencyWhereUniqueInput = Prisma.AtLeast<{
    currency_id?: number
    symbol?: string
    AND?: CryptocurrencyWhereInput | CryptocurrencyWhereInput[]
    OR?: CryptocurrencyWhereInput[]
    NOT?: CryptocurrencyWhereInput | CryptocurrencyWhereInput[]
    name?: StringFilter<"Cryptocurrency"> | string
    decimal_places?: IntFilter<"Cryptocurrency"> | number
    created_at?: DateTimeFilter<"Cryptocurrency"> | Date | string
    updated_at?: DateTimeFilter<"Cryptocurrency"> | Date | string
    wallets?: WalletListRelationFilter
    orders?: OrderListRelationFilter
    transactions?: TransactionListRelationFilter
  }, "currency_id" | "symbol">

  export type CryptocurrencyOrderByWithAggregationInput = {
    currency_id?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    decimal_places?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: CryptocurrencyCountOrderByAggregateInput
    _avg?: CryptocurrencyAvgOrderByAggregateInput
    _max?: CryptocurrencyMaxOrderByAggregateInput
    _min?: CryptocurrencyMinOrderByAggregateInput
    _sum?: CryptocurrencySumOrderByAggregateInput
  }

  export type CryptocurrencyScalarWhereWithAggregatesInput = {
    AND?: CryptocurrencyScalarWhereWithAggregatesInput | CryptocurrencyScalarWhereWithAggregatesInput[]
    OR?: CryptocurrencyScalarWhereWithAggregatesInput[]
    NOT?: CryptocurrencyScalarWhereWithAggregatesInput | CryptocurrencyScalarWhereWithAggregatesInput[]
    currency_id?: IntWithAggregatesFilter<"Cryptocurrency"> | number
    symbol?: StringWithAggregatesFilter<"Cryptocurrency"> | string
    name?: StringWithAggregatesFilter<"Cryptocurrency"> | string
    decimal_places?: IntWithAggregatesFilter<"Cryptocurrency"> | number
    created_at?: DateTimeWithAggregatesFilter<"Cryptocurrency"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Cryptocurrency"> | Date | string
  }

  export type FiatCurrencyWhereInput = {
    AND?: FiatCurrencyWhereInput | FiatCurrencyWhereInput[]
    OR?: FiatCurrencyWhereInput[]
    NOT?: FiatCurrencyWhereInput | FiatCurrencyWhereInput[]
    fiat_id?: IntFilter<"FiatCurrency"> | number
    symbol?: StringFilter<"FiatCurrency"> | string
    name?: StringFilter<"FiatCurrency"> | string
    created_at?: DateTimeFilter<"FiatCurrency"> | Date | string
    updated_at?: DateTimeFilter<"FiatCurrency"> | Date | string
    orders?: OrderListRelationFilter
    transactions?: TransactionListRelationFilter
  }

  export type FiatCurrencyOrderByWithRelationInput = {
    fiat_id?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    orders?: OrderOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
  }

  export type FiatCurrencyWhereUniqueInput = Prisma.AtLeast<{
    fiat_id?: number
    symbol?: string
    AND?: FiatCurrencyWhereInput | FiatCurrencyWhereInput[]
    OR?: FiatCurrencyWhereInput[]
    NOT?: FiatCurrencyWhereInput | FiatCurrencyWhereInput[]
    name?: StringFilter<"FiatCurrency"> | string
    created_at?: DateTimeFilter<"FiatCurrency"> | Date | string
    updated_at?: DateTimeFilter<"FiatCurrency"> | Date | string
    orders?: OrderListRelationFilter
    transactions?: TransactionListRelationFilter
  }, "fiat_id" | "symbol">

  export type FiatCurrencyOrderByWithAggregationInput = {
    fiat_id?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: FiatCurrencyCountOrderByAggregateInput
    _avg?: FiatCurrencyAvgOrderByAggregateInput
    _max?: FiatCurrencyMaxOrderByAggregateInput
    _min?: FiatCurrencyMinOrderByAggregateInput
    _sum?: FiatCurrencySumOrderByAggregateInput
  }

  export type FiatCurrencyScalarWhereWithAggregatesInput = {
    AND?: FiatCurrencyScalarWhereWithAggregatesInput | FiatCurrencyScalarWhereWithAggregatesInput[]
    OR?: FiatCurrencyScalarWhereWithAggregatesInput[]
    NOT?: FiatCurrencyScalarWhereWithAggregatesInput | FiatCurrencyScalarWhereWithAggregatesInput[]
    fiat_id?: IntWithAggregatesFilter<"FiatCurrency"> | number
    symbol?: StringWithAggregatesFilter<"FiatCurrency"> | string
    name?: StringWithAggregatesFilter<"FiatCurrency"> | string
    created_at?: DateTimeWithAggregatesFilter<"FiatCurrency"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"FiatCurrency"> | Date | string
  }

  export type WalletWhereInput = {
    AND?: WalletWhereInput | WalletWhereInput[]
    OR?: WalletWhereInput[]
    NOT?: WalletWhereInput | WalletWhereInput[]
    wallet_id?: IntFilter<"Wallet"> | number
    user_id?: IntFilter<"Wallet"> | number
    currency_id?: IntFilter<"Wallet"> | number
    balance?: DecimalFilter<"Wallet"> | Decimal | DecimalJsLike | number | string
    wallet_address?: StringFilter<"Wallet"> | string
    created_at?: DateTimeFilter<"Wallet"> | Date | string
    updated_at?: DateTimeFilter<"Wallet"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    cryptocurrency?: XOR<CryptocurrencyScalarRelationFilter, CryptocurrencyWhereInput>
  }

  export type WalletOrderByWithRelationInput = {
    wallet_id?: SortOrder
    user_id?: SortOrder
    currency_id?: SortOrder
    balance?: SortOrder
    wallet_address?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
    cryptocurrency?: CryptocurrencyOrderByWithRelationInput
  }

  export type WalletWhereUniqueInput = Prisma.AtLeast<{
    wallet_id?: number
    wallet_address?: string
    AND?: WalletWhereInput | WalletWhereInput[]
    OR?: WalletWhereInput[]
    NOT?: WalletWhereInput | WalletWhereInput[]
    user_id?: IntFilter<"Wallet"> | number
    currency_id?: IntFilter<"Wallet"> | number
    balance?: DecimalFilter<"Wallet"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"Wallet"> | Date | string
    updated_at?: DateTimeFilter<"Wallet"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    cryptocurrency?: XOR<CryptocurrencyScalarRelationFilter, CryptocurrencyWhereInput>
  }, "wallet_id" | "wallet_address">

  export type WalletOrderByWithAggregationInput = {
    wallet_id?: SortOrder
    user_id?: SortOrder
    currency_id?: SortOrder
    balance?: SortOrder
    wallet_address?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: WalletCountOrderByAggregateInput
    _avg?: WalletAvgOrderByAggregateInput
    _max?: WalletMaxOrderByAggregateInput
    _min?: WalletMinOrderByAggregateInput
    _sum?: WalletSumOrderByAggregateInput
  }

  export type WalletScalarWhereWithAggregatesInput = {
    AND?: WalletScalarWhereWithAggregatesInput | WalletScalarWhereWithAggregatesInput[]
    OR?: WalletScalarWhereWithAggregatesInput[]
    NOT?: WalletScalarWhereWithAggregatesInput | WalletScalarWhereWithAggregatesInput[]
    wallet_id?: IntWithAggregatesFilter<"Wallet"> | number
    user_id?: IntWithAggregatesFilter<"Wallet"> | number
    currency_id?: IntWithAggregatesFilter<"Wallet"> | number
    balance?: DecimalWithAggregatesFilter<"Wallet"> | Decimal | DecimalJsLike | number | string
    wallet_address?: StringWithAggregatesFilter<"Wallet"> | string
    created_at?: DateTimeWithAggregatesFilter<"Wallet"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Wallet"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    order_id?: IntFilter<"Order"> | number
    maker_user_id?: IntFilter<"Order"> | number
    taker_user_id?: IntNullableFilter<"Order"> | number | null
    order_type?: StringFilter<"Order"> | string
    crypto_currency_id?: IntFilter<"Order"> | number
    fiat_currency_id?: IntFilter<"Order"> | number
    crypto_amount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    price_per_crypto?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    total_fiat_amount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    status?: StringFilter<"Order"> | string
    created_at?: DateTimeFilter<"Order"> | Date | string
    updated_at?: DateTimeFilter<"Order"> | Date | string
    expiry_date?: DateTimeNullableFilter<"Order"> | Date | string | null
    maker?: XOR<UserScalarRelationFilter, UserWhereInput>
    taker?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    crypto_currency?: XOR<CryptocurrencyScalarRelationFilter, CryptocurrencyWhereInput>
    fiat_currency?: XOR<FiatCurrencyScalarRelationFilter, FiatCurrencyWhereInput>
    transactions?: TransactionListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    order_id?: SortOrder
    maker_user_id?: SortOrder
    taker_user_id?: SortOrderInput | SortOrder
    order_type?: SortOrder
    crypto_currency_id?: SortOrder
    fiat_currency_id?: SortOrder
    crypto_amount?: SortOrder
    price_per_crypto?: SortOrder
    total_fiat_amount?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    expiry_date?: SortOrderInput | SortOrder
    maker?: UserOrderByWithRelationInput
    taker?: UserOrderByWithRelationInput
    crypto_currency?: CryptocurrencyOrderByWithRelationInput
    fiat_currency?: FiatCurrencyOrderByWithRelationInput
    transactions?: TransactionOrderByRelationAggregateInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    order_id?: number
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    maker_user_id?: IntFilter<"Order"> | number
    taker_user_id?: IntNullableFilter<"Order"> | number | null
    order_type?: StringFilter<"Order"> | string
    crypto_currency_id?: IntFilter<"Order"> | number
    fiat_currency_id?: IntFilter<"Order"> | number
    crypto_amount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    price_per_crypto?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    total_fiat_amount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    status?: StringFilter<"Order"> | string
    created_at?: DateTimeFilter<"Order"> | Date | string
    updated_at?: DateTimeFilter<"Order"> | Date | string
    expiry_date?: DateTimeNullableFilter<"Order"> | Date | string | null
    maker?: XOR<UserScalarRelationFilter, UserWhereInput>
    taker?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    crypto_currency?: XOR<CryptocurrencyScalarRelationFilter, CryptocurrencyWhereInput>
    fiat_currency?: XOR<FiatCurrencyScalarRelationFilter, FiatCurrencyWhereInput>
    transactions?: TransactionListRelationFilter
  }, "order_id">

  export type OrderOrderByWithAggregationInput = {
    order_id?: SortOrder
    maker_user_id?: SortOrder
    taker_user_id?: SortOrderInput | SortOrder
    order_type?: SortOrder
    crypto_currency_id?: SortOrder
    fiat_currency_id?: SortOrder
    crypto_amount?: SortOrder
    price_per_crypto?: SortOrder
    total_fiat_amount?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    expiry_date?: SortOrderInput | SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    order_id?: IntWithAggregatesFilter<"Order"> | number
    maker_user_id?: IntWithAggregatesFilter<"Order"> | number
    taker_user_id?: IntNullableWithAggregatesFilter<"Order"> | number | null
    order_type?: StringWithAggregatesFilter<"Order"> | string
    crypto_currency_id?: IntWithAggregatesFilter<"Order"> | number
    fiat_currency_id?: IntWithAggregatesFilter<"Order"> | number
    crypto_amount?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    price_per_crypto?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    total_fiat_amount?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    status?: StringWithAggregatesFilter<"Order"> | string
    created_at?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    expiry_date?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    transaction_id?: IntFilter<"Transaction"> | number
    sender_user_id?: IntNullableFilter<"Transaction"> | number | null
    receiver_user_id?: IntNullableFilter<"Transaction"> | number | null
    order_id?: IntNullableFilter<"Transaction"> | number | null
    transaction_type?: StringFilter<"Transaction"> | string
    crypto_currency_id?: IntNullableFilter<"Transaction"> | number | null
    fiat_currency_id?: IntNullableFilter<"Transaction"> | number | null
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    transaction_fee?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    status?: StringFilter<"Transaction"> | string
    transaction_date?: DateTimeFilter<"Transaction"> | Date | string
    external_address?: StringNullableFilter<"Transaction"> | string | null
    tx_hash?: StringNullableFilter<"Transaction"> | string | null
    created_at?: DateTimeFilter<"Transaction"> | Date | string
    updated_at?: DateTimeFilter<"Transaction"> | Date | string
    sender?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    receiver?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    order?: XOR<OrderNullableScalarRelationFilter, OrderWhereInput> | null
    crypto_currency?: XOR<CryptocurrencyNullableScalarRelationFilter, CryptocurrencyWhereInput> | null
    fiat_currency?: XOR<FiatCurrencyNullableScalarRelationFilter, FiatCurrencyWhereInput> | null
  }

  export type TransactionOrderByWithRelationInput = {
    transaction_id?: SortOrder
    sender_user_id?: SortOrderInput | SortOrder
    receiver_user_id?: SortOrderInput | SortOrder
    order_id?: SortOrderInput | SortOrder
    transaction_type?: SortOrder
    crypto_currency_id?: SortOrderInput | SortOrder
    fiat_currency_id?: SortOrderInput | SortOrder
    amount?: SortOrder
    transaction_fee?: SortOrder
    status?: SortOrder
    transaction_date?: SortOrder
    external_address?: SortOrderInput | SortOrder
    tx_hash?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    sender?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
    order?: OrderOrderByWithRelationInput
    crypto_currency?: CryptocurrencyOrderByWithRelationInput
    fiat_currency?: FiatCurrencyOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    transaction_id?: number
    tx_hash?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    sender_user_id?: IntNullableFilter<"Transaction"> | number | null
    receiver_user_id?: IntNullableFilter<"Transaction"> | number | null
    order_id?: IntNullableFilter<"Transaction"> | number | null
    transaction_type?: StringFilter<"Transaction"> | string
    crypto_currency_id?: IntNullableFilter<"Transaction"> | number | null
    fiat_currency_id?: IntNullableFilter<"Transaction"> | number | null
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    transaction_fee?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    status?: StringFilter<"Transaction"> | string
    transaction_date?: DateTimeFilter<"Transaction"> | Date | string
    external_address?: StringNullableFilter<"Transaction"> | string | null
    created_at?: DateTimeFilter<"Transaction"> | Date | string
    updated_at?: DateTimeFilter<"Transaction"> | Date | string
    sender?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    receiver?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    order?: XOR<OrderNullableScalarRelationFilter, OrderWhereInput> | null
    crypto_currency?: XOR<CryptocurrencyNullableScalarRelationFilter, CryptocurrencyWhereInput> | null
    fiat_currency?: XOR<FiatCurrencyNullableScalarRelationFilter, FiatCurrencyWhereInput> | null
  }, "transaction_id" | "tx_hash">

  export type TransactionOrderByWithAggregationInput = {
    transaction_id?: SortOrder
    sender_user_id?: SortOrderInput | SortOrder
    receiver_user_id?: SortOrderInput | SortOrder
    order_id?: SortOrderInput | SortOrder
    transaction_type?: SortOrder
    crypto_currency_id?: SortOrderInput | SortOrder
    fiat_currency_id?: SortOrderInput | SortOrder
    amount?: SortOrder
    transaction_fee?: SortOrder
    status?: SortOrder
    transaction_date?: SortOrder
    external_address?: SortOrderInput | SortOrder
    tx_hash?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    transaction_id?: IntWithAggregatesFilter<"Transaction"> | number
    sender_user_id?: IntNullableWithAggregatesFilter<"Transaction"> | number | null
    receiver_user_id?: IntNullableWithAggregatesFilter<"Transaction"> | number | null
    order_id?: IntNullableWithAggregatesFilter<"Transaction"> | number | null
    transaction_type?: StringWithAggregatesFilter<"Transaction"> | string
    crypto_currency_id?: IntNullableWithAggregatesFilter<"Transaction"> | number | null
    fiat_currency_id?: IntNullableWithAggregatesFilter<"Transaction"> | number | null
    amount?: DecimalWithAggregatesFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    transaction_fee?: DecimalWithAggregatesFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    status?: StringWithAggregatesFilter<"Transaction"> | string
    transaction_date?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    external_address?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    tx_hash?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type PaymentMethodWhereInput = {
    AND?: PaymentMethodWhereInput | PaymentMethodWhereInput[]
    OR?: PaymentMethodWhereInput[]
    NOT?: PaymentMethodWhereInput | PaymentMethodWhereInput[]
    payment_method_id?: IntFilter<"PaymentMethod"> | number
    user_id?: IntFilter<"PaymentMethod"> | number
    method_type?: StringFilter<"PaymentMethod"> | string
    details?: JsonFilter<"PaymentMethod">
    is_verified?: BoolFilter<"PaymentMethod"> | boolean
    created_at?: DateTimeFilter<"PaymentMethod"> | Date | string
    updated_at?: DateTimeFilter<"PaymentMethod"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PaymentMethodOrderByWithRelationInput = {
    payment_method_id?: SortOrder
    user_id?: SortOrder
    method_type?: SortOrder
    details?: SortOrder
    is_verified?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PaymentMethodWhereUniqueInput = Prisma.AtLeast<{
    payment_method_id?: number
    AND?: PaymentMethodWhereInput | PaymentMethodWhereInput[]
    OR?: PaymentMethodWhereInput[]
    NOT?: PaymentMethodWhereInput | PaymentMethodWhereInput[]
    user_id?: IntFilter<"PaymentMethod"> | number
    method_type?: StringFilter<"PaymentMethod"> | string
    details?: JsonFilter<"PaymentMethod">
    is_verified?: BoolFilter<"PaymentMethod"> | boolean
    created_at?: DateTimeFilter<"PaymentMethod"> | Date | string
    updated_at?: DateTimeFilter<"PaymentMethod"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "payment_method_id">

  export type PaymentMethodOrderByWithAggregationInput = {
    payment_method_id?: SortOrder
    user_id?: SortOrder
    method_type?: SortOrder
    details?: SortOrder
    is_verified?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: PaymentMethodCountOrderByAggregateInput
    _avg?: PaymentMethodAvgOrderByAggregateInput
    _max?: PaymentMethodMaxOrderByAggregateInput
    _min?: PaymentMethodMinOrderByAggregateInput
    _sum?: PaymentMethodSumOrderByAggregateInput
  }

  export type PaymentMethodScalarWhereWithAggregatesInput = {
    AND?: PaymentMethodScalarWhereWithAggregatesInput | PaymentMethodScalarWhereWithAggregatesInput[]
    OR?: PaymentMethodScalarWhereWithAggregatesInput[]
    NOT?: PaymentMethodScalarWhereWithAggregatesInput | PaymentMethodScalarWhereWithAggregatesInput[]
    payment_method_id?: IntWithAggregatesFilter<"PaymentMethod"> | number
    user_id?: IntWithAggregatesFilter<"PaymentMethod"> | number
    method_type?: StringWithAggregatesFilter<"PaymentMethod"> | string
    details?: JsonWithAggregatesFilter<"PaymentMethod">
    is_verified?: BoolWithAggregatesFilter<"PaymentMethod"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"PaymentMethod"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"PaymentMethod"> | Date | string
  }

  export type UserCreateInput = {
    username: string
    email: string
    password_hash: string
    fiat_balance_thb: Decimal | DecimalJsLike | number | string
    fiat_balance_usd: Decimal | DecimalJsLike | number | string
    registration_date?: Date | string
    is_verified?: boolean
    wallets?: WalletCreateNestedManyWithoutUserInput
    payment_methods?: PaymentMethodCreateNestedManyWithoutUserInput
    orders_made?: OrderCreateNestedManyWithoutMakerInput
    orders_taken?: OrderCreateNestedManyWithoutTakerInput
    transactions_sent?: TransactionCreateNestedManyWithoutSenderInput
    transactions_received?: TransactionCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateInput = {
    user_id?: number
    username: string
    email: string
    password_hash: string
    fiat_balance_thb: Decimal | DecimalJsLike | number | string
    fiat_balance_usd: Decimal | DecimalJsLike | number | string
    registration_date?: Date | string
    is_verified?: boolean
    wallets?: WalletUncheckedCreateNestedManyWithoutUserInput
    payment_methods?: PaymentMethodUncheckedCreateNestedManyWithoutUserInput
    orders_made?: OrderUncheckedCreateNestedManyWithoutMakerInput
    orders_taken?: OrderUncheckedCreateNestedManyWithoutTakerInput
    transactions_sent?: TransactionUncheckedCreateNestedManyWithoutSenderInput
    transactions_received?: TransactionUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    fiat_balance_thb?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fiat_balance_usd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    registration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    wallets?: WalletUpdateManyWithoutUserNestedInput
    payment_methods?: PaymentMethodUpdateManyWithoutUserNestedInput
    orders_made?: OrderUpdateManyWithoutMakerNestedInput
    orders_taken?: OrderUpdateManyWithoutTakerNestedInput
    transactions_sent?: TransactionUpdateManyWithoutSenderNestedInput
    transactions_received?: TransactionUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    fiat_balance_thb?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fiat_balance_usd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    registration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    wallets?: WalletUncheckedUpdateManyWithoutUserNestedInput
    payment_methods?: PaymentMethodUncheckedUpdateManyWithoutUserNestedInput
    orders_made?: OrderUncheckedUpdateManyWithoutMakerNestedInput
    orders_taken?: OrderUncheckedUpdateManyWithoutTakerNestedInput
    transactions_sent?: TransactionUncheckedUpdateManyWithoutSenderNestedInput
    transactions_received?: TransactionUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateManyInput = {
    user_id?: number
    username: string
    email: string
    password_hash: string
    fiat_balance_thb: Decimal | DecimalJsLike | number | string
    fiat_balance_usd: Decimal | DecimalJsLike | number | string
    registration_date?: Date | string
    is_verified?: boolean
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    fiat_balance_thb?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fiat_balance_usd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    registration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    fiat_balance_thb?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fiat_balance_usd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    registration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CryptocurrencyCreateInput = {
    symbol: string
    name: string
    decimal_places: number
    created_at?: Date | string
    updated_at?: Date | string
    wallets?: WalletCreateNestedManyWithoutCryptocurrencyInput
    orders?: OrderCreateNestedManyWithoutCrypto_currencyInput
    transactions?: TransactionCreateNestedManyWithoutCrypto_currencyInput
  }

  export type CryptocurrencyUncheckedCreateInput = {
    currency_id?: number
    symbol: string
    name: string
    decimal_places: number
    created_at?: Date | string
    updated_at?: Date | string
    wallets?: WalletUncheckedCreateNestedManyWithoutCryptocurrencyInput
    orders?: OrderUncheckedCreateNestedManyWithoutCrypto_currencyInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutCrypto_currencyInput
  }

  export type CryptocurrencyUpdateInput = {
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    decimal_places?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    wallets?: WalletUpdateManyWithoutCryptocurrencyNestedInput
    orders?: OrderUpdateManyWithoutCrypto_currencyNestedInput
    transactions?: TransactionUpdateManyWithoutCrypto_currencyNestedInput
  }

  export type CryptocurrencyUncheckedUpdateInput = {
    currency_id?: IntFieldUpdateOperationsInput | number
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    decimal_places?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    wallets?: WalletUncheckedUpdateManyWithoutCryptocurrencyNestedInput
    orders?: OrderUncheckedUpdateManyWithoutCrypto_currencyNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutCrypto_currencyNestedInput
  }

  export type CryptocurrencyCreateManyInput = {
    currency_id?: number
    symbol: string
    name: string
    decimal_places: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CryptocurrencyUpdateManyMutationInput = {
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    decimal_places?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CryptocurrencyUncheckedUpdateManyInput = {
    currency_id?: IntFieldUpdateOperationsInput | number
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    decimal_places?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FiatCurrencyCreateInput = {
    symbol: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    orders?: OrderCreateNestedManyWithoutFiat_currencyInput
    transactions?: TransactionCreateNestedManyWithoutFiat_currencyInput
  }

  export type FiatCurrencyUncheckedCreateInput = {
    fiat_id?: number
    symbol: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutFiat_currencyInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutFiat_currencyInput
  }

  export type FiatCurrencyUpdateInput = {
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutFiat_currencyNestedInput
    transactions?: TransactionUpdateManyWithoutFiat_currencyNestedInput
  }

  export type FiatCurrencyUncheckedUpdateInput = {
    fiat_id?: IntFieldUpdateOperationsInput | number
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutFiat_currencyNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutFiat_currencyNestedInput
  }

  export type FiatCurrencyCreateManyInput = {
    fiat_id?: number
    symbol: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FiatCurrencyUpdateManyMutationInput = {
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FiatCurrencyUncheckedUpdateManyInput = {
    fiat_id?: IntFieldUpdateOperationsInput | number
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletCreateInput = {
    balance: Decimal | DecimalJsLike | number | string
    wallet_address: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutWalletsInput
    cryptocurrency: CryptocurrencyCreateNestedOneWithoutWalletsInput
  }

  export type WalletUncheckedCreateInput = {
    wallet_id?: number
    user_id: number
    currency_id: number
    balance: Decimal | DecimalJsLike | number | string
    wallet_address: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WalletUpdateInput = {
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wallet_address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWalletsNestedInput
    cryptocurrency?: CryptocurrencyUpdateOneRequiredWithoutWalletsNestedInput
  }

  export type WalletUncheckedUpdateInput = {
    wallet_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    currency_id?: IntFieldUpdateOperationsInput | number
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wallet_address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletCreateManyInput = {
    wallet_id?: number
    user_id: number
    currency_id: number
    balance: Decimal | DecimalJsLike | number | string
    wallet_address: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WalletUpdateManyMutationInput = {
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wallet_address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletUncheckedUpdateManyInput = {
    wallet_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    currency_id?: IntFieldUpdateOperationsInput | number
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wallet_address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    order_type: string
    crypto_amount: Decimal | DecimalJsLike | number | string
    price_per_crypto: Decimal | DecimalJsLike | number | string
    total_fiat_amount: Decimal | DecimalJsLike | number | string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
    expiry_date?: Date | string | null
    maker: UserCreateNestedOneWithoutOrders_madeInput
    taker?: UserCreateNestedOneWithoutOrders_takenInput
    crypto_currency: CryptocurrencyCreateNestedOneWithoutOrdersInput
    fiat_currency: FiatCurrencyCreateNestedOneWithoutOrdersInput
    transactions?: TransactionCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    order_id?: number
    maker_user_id: number
    taker_user_id?: number | null
    order_type: string
    crypto_currency_id: number
    fiat_currency_id: number
    crypto_amount: Decimal | DecimalJsLike | number | string
    price_per_crypto: Decimal | DecimalJsLike | number | string
    total_fiat_amount: Decimal | DecimalJsLike | number | string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
    expiry_date?: Date | string | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    order_type?: StringFieldUpdateOperationsInput | string
    crypto_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_crypto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_fiat_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maker?: UserUpdateOneRequiredWithoutOrders_madeNestedInput
    taker?: UserUpdateOneWithoutOrders_takenNestedInput
    crypto_currency?: CryptocurrencyUpdateOneRequiredWithoutOrdersNestedInput
    fiat_currency?: FiatCurrencyUpdateOneRequiredWithoutOrdersNestedInput
    transactions?: TransactionUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    maker_user_id?: IntFieldUpdateOperationsInput | number
    taker_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    order_type?: StringFieldUpdateOperationsInput | string
    crypto_currency_id?: IntFieldUpdateOperationsInput | number
    fiat_currency_id?: IntFieldUpdateOperationsInput | number
    crypto_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_crypto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_fiat_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: TransactionUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    order_id?: number
    maker_user_id: number
    taker_user_id?: number | null
    order_type: string
    crypto_currency_id: number
    fiat_currency_id: number
    crypto_amount: Decimal | DecimalJsLike | number | string
    price_per_crypto: Decimal | DecimalJsLike | number | string
    total_fiat_amount: Decimal | DecimalJsLike | number | string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
    expiry_date?: Date | string | null
  }

  export type OrderUpdateManyMutationInput = {
    order_type?: StringFieldUpdateOperationsInput | string
    crypto_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_crypto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_fiat_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderUncheckedUpdateManyInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    maker_user_id?: IntFieldUpdateOperationsInput | number
    taker_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    order_type?: StringFieldUpdateOperationsInput | string
    crypto_currency_id?: IntFieldUpdateOperationsInput | number
    fiat_currency_id?: IntFieldUpdateOperationsInput | number
    crypto_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_crypto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_fiat_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionCreateInput = {
    transaction_type: string
    amount: Decimal | DecimalJsLike | number | string
    transaction_fee: Decimal | DecimalJsLike | number | string
    status: string
    transaction_date?: Date | string
    external_address?: string | null
    tx_hash?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    sender?: UserCreateNestedOneWithoutTransactions_sentInput
    receiver?: UserCreateNestedOneWithoutTransactions_receivedInput
    order?: OrderCreateNestedOneWithoutTransactionsInput
    crypto_currency?: CryptocurrencyCreateNestedOneWithoutTransactionsInput
    fiat_currency?: FiatCurrencyCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateInput = {
    transaction_id?: number
    sender_user_id?: number | null
    receiver_user_id?: number | null
    order_id?: number | null
    transaction_type: string
    crypto_currency_id?: number | null
    fiat_currency_id?: number | null
    amount: Decimal | DecimalJsLike | number | string
    transaction_fee: Decimal | DecimalJsLike | number | string
    status: string
    transaction_date?: Date | string
    external_address?: string | null
    tx_hash?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TransactionUpdateInput = {
    transaction_type?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transaction_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    external_address?: NullableStringFieldUpdateOperationsInput | string | null
    tx_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneWithoutTransactions_sentNestedInput
    receiver?: UserUpdateOneWithoutTransactions_receivedNestedInput
    order?: OrderUpdateOneWithoutTransactionsNestedInput
    crypto_currency?: CryptocurrencyUpdateOneWithoutTransactionsNestedInput
    fiat_currency?: FiatCurrencyUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    transaction_id?: IntFieldUpdateOperationsInput | number
    sender_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    receiver_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    order_id?: NullableIntFieldUpdateOperationsInput | number | null
    transaction_type?: StringFieldUpdateOperationsInput | string
    crypto_currency_id?: NullableIntFieldUpdateOperationsInput | number | null
    fiat_currency_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transaction_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    external_address?: NullableStringFieldUpdateOperationsInput | string | null
    tx_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyInput = {
    transaction_id?: number
    sender_user_id?: number | null
    receiver_user_id?: number | null
    order_id?: number | null
    transaction_type: string
    crypto_currency_id?: number | null
    fiat_currency_id?: number | null
    amount: Decimal | DecimalJsLike | number | string
    transaction_fee: Decimal | DecimalJsLike | number | string
    status: string
    transaction_date?: Date | string
    external_address?: string | null
    tx_hash?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    transaction_type?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transaction_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    external_address?: NullableStringFieldUpdateOperationsInput | string | null
    tx_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    transaction_id?: IntFieldUpdateOperationsInput | number
    sender_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    receiver_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    order_id?: NullableIntFieldUpdateOperationsInput | number | null
    transaction_type?: StringFieldUpdateOperationsInput | string
    crypto_currency_id?: NullableIntFieldUpdateOperationsInput | number | null
    fiat_currency_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transaction_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    external_address?: NullableStringFieldUpdateOperationsInput | string | null
    tx_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentMethodCreateInput = {
    method_type: string
    details: JsonNullValueInput | InputJsonValue
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutPayment_methodsInput
  }

  export type PaymentMethodUncheckedCreateInput = {
    payment_method_id?: number
    user_id: number
    method_type: string
    details: JsonNullValueInput | InputJsonValue
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PaymentMethodUpdateInput = {
    method_type?: StringFieldUpdateOperationsInput | string
    details?: JsonNullValueInput | InputJsonValue
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPayment_methodsNestedInput
  }

  export type PaymentMethodUncheckedUpdateInput = {
    payment_method_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    method_type?: StringFieldUpdateOperationsInput | string
    details?: JsonNullValueInput | InputJsonValue
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentMethodCreateManyInput = {
    payment_method_id?: number
    user_id: number
    method_type: string
    details: JsonNullValueInput | InputJsonValue
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PaymentMethodUpdateManyMutationInput = {
    method_type?: StringFieldUpdateOperationsInput | string
    details?: JsonNullValueInput | InputJsonValue
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentMethodUncheckedUpdateManyInput = {
    payment_method_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    method_type?: StringFieldUpdateOperationsInput | string
    details?: JsonNullValueInput | InputJsonValue
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type WalletListRelationFilter = {
    every?: WalletWhereInput
    some?: WalletWhereInput
    none?: WalletWhereInput
  }

  export type PaymentMethodListRelationFilter = {
    every?: PaymentMethodWhereInput
    some?: PaymentMethodWhereInput
    none?: PaymentMethodWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type WalletOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentMethodOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    user_id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    fiat_balance_thb?: SortOrder
    fiat_balance_usd?: SortOrder
    registration_date?: SortOrder
    is_verified?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    user_id?: SortOrder
    fiat_balance_thb?: SortOrder
    fiat_balance_usd?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    user_id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    fiat_balance_thb?: SortOrder
    fiat_balance_usd?: SortOrder
    registration_date?: SortOrder
    is_verified?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    user_id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    fiat_balance_thb?: SortOrder
    fiat_balance_usd?: SortOrder
    registration_date?: SortOrder
    is_verified?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    user_id?: SortOrder
    fiat_balance_thb?: SortOrder
    fiat_balance_usd?: SortOrder
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

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CryptocurrencyCountOrderByAggregateInput = {
    currency_id?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    decimal_places?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CryptocurrencyAvgOrderByAggregateInput = {
    currency_id?: SortOrder
    decimal_places?: SortOrder
  }

  export type CryptocurrencyMaxOrderByAggregateInput = {
    currency_id?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    decimal_places?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CryptocurrencyMinOrderByAggregateInput = {
    currency_id?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    decimal_places?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CryptocurrencySumOrderByAggregateInput = {
    currency_id?: SortOrder
    decimal_places?: SortOrder
  }

  export type FiatCurrencyCountOrderByAggregateInput = {
    fiat_id?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FiatCurrencyAvgOrderByAggregateInput = {
    fiat_id?: SortOrder
  }

  export type FiatCurrencyMaxOrderByAggregateInput = {
    fiat_id?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FiatCurrencyMinOrderByAggregateInput = {
    fiat_id?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FiatCurrencySumOrderByAggregateInput = {
    fiat_id?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CryptocurrencyScalarRelationFilter = {
    is?: CryptocurrencyWhereInput
    isNot?: CryptocurrencyWhereInput
  }

  export type WalletCountOrderByAggregateInput = {
    wallet_id?: SortOrder
    user_id?: SortOrder
    currency_id?: SortOrder
    balance?: SortOrder
    wallet_address?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type WalletAvgOrderByAggregateInput = {
    wallet_id?: SortOrder
    user_id?: SortOrder
    currency_id?: SortOrder
    balance?: SortOrder
  }

  export type WalletMaxOrderByAggregateInput = {
    wallet_id?: SortOrder
    user_id?: SortOrder
    currency_id?: SortOrder
    balance?: SortOrder
    wallet_address?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type WalletMinOrderByAggregateInput = {
    wallet_id?: SortOrder
    user_id?: SortOrder
    currency_id?: SortOrder
    balance?: SortOrder
    wallet_address?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type WalletSumOrderByAggregateInput = {
    wallet_id?: SortOrder
    user_id?: SortOrder
    currency_id?: SortOrder
    balance?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type FiatCurrencyScalarRelationFilter = {
    is?: FiatCurrencyWhereInput
    isNot?: FiatCurrencyWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrderCountOrderByAggregateInput = {
    order_id?: SortOrder
    maker_user_id?: SortOrder
    taker_user_id?: SortOrder
    order_type?: SortOrder
    crypto_currency_id?: SortOrder
    fiat_currency_id?: SortOrder
    crypto_amount?: SortOrder
    price_per_crypto?: SortOrder
    total_fiat_amount?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    expiry_date?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    order_id?: SortOrder
    maker_user_id?: SortOrder
    taker_user_id?: SortOrder
    crypto_currency_id?: SortOrder
    fiat_currency_id?: SortOrder
    crypto_amount?: SortOrder
    price_per_crypto?: SortOrder
    total_fiat_amount?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    order_id?: SortOrder
    maker_user_id?: SortOrder
    taker_user_id?: SortOrder
    order_type?: SortOrder
    crypto_currency_id?: SortOrder
    fiat_currency_id?: SortOrder
    crypto_amount?: SortOrder
    price_per_crypto?: SortOrder
    total_fiat_amount?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    expiry_date?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    order_id?: SortOrder
    maker_user_id?: SortOrder
    taker_user_id?: SortOrder
    order_type?: SortOrder
    crypto_currency_id?: SortOrder
    fiat_currency_id?: SortOrder
    crypto_amount?: SortOrder
    price_per_crypto?: SortOrder
    total_fiat_amount?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    expiry_date?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    order_id?: SortOrder
    maker_user_id?: SortOrder
    taker_user_id?: SortOrder
    crypto_currency_id?: SortOrder
    fiat_currency_id?: SortOrder
    crypto_amount?: SortOrder
    price_per_crypto?: SortOrder
    total_fiat_amount?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type OrderNullableScalarRelationFilter = {
    is?: OrderWhereInput | null
    isNot?: OrderWhereInput | null
  }

  export type CryptocurrencyNullableScalarRelationFilter = {
    is?: CryptocurrencyWhereInput | null
    isNot?: CryptocurrencyWhereInput | null
  }

  export type FiatCurrencyNullableScalarRelationFilter = {
    is?: FiatCurrencyWhereInput | null
    isNot?: FiatCurrencyWhereInput | null
  }

  export type TransactionCountOrderByAggregateInput = {
    transaction_id?: SortOrder
    sender_user_id?: SortOrder
    receiver_user_id?: SortOrder
    order_id?: SortOrder
    transaction_type?: SortOrder
    crypto_currency_id?: SortOrder
    fiat_currency_id?: SortOrder
    amount?: SortOrder
    transaction_fee?: SortOrder
    status?: SortOrder
    transaction_date?: SortOrder
    external_address?: SortOrder
    tx_hash?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    transaction_id?: SortOrder
    sender_user_id?: SortOrder
    receiver_user_id?: SortOrder
    order_id?: SortOrder
    crypto_currency_id?: SortOrder
    fiat_currency_id?: SortOrder
    amount?: SortOrder
    transaction_fee?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    transaction_id?: SortOrder
    sender_user_id?: SortOrder
    receiver_user_id?: SortOrder
    order_id?: SortOrder
    transaction_type?: SortOrder
    crypto_currency_id?: SortOrder
    fiat_currency_id?: SortOrder
    amount?: SortOrder
    transaction_fee?: SortOrder
    status?: SortOrder
    transaction_date?: SortOrder
    external_address?: SortOrder
    tx_hash?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    transaction_id?: SortOrder
    sender_user_id?: SortOrder
    receiver_user_id?: SortOrder
    order_id?: SortOrder
    transaction_type?: SortOrder
    crypto_currency_id?: SortOrder
    fiat_currency_id?: SortOrder
    amount?: SortOrder
    transaction_fee?: SortOrder
    status?: SortOrder
    transaction_date?: SortOrder
    external_address?: SortOrder
    tx_hash?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    transaction_id?: SortOrder
    sender_user_id?: SortOrder
    receiver_user_id?: SortOrder
    order_id?: SortOrder
    crypto_currency_id?: SortOrder
    fiat_currency_id?: SortOrder
    amount?: SortOrder
    transaction_fee?: SortOrder
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
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type PaymentMethodCountOrderByAggregateInput = {
    payment_method_id?: SortOrder
    user_id?: SortOrder
    method_type?: SortOrder
    details?: SortOrder
    is_verified?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PaymentMethodAvgOrderByAggregateInput = {
    payment_method_id?: SortOrder
    user_id?: SortOrder
  }

  export type PaymentMethodMaxOrderByAggregateInput = {
    payment_method_id?: SortOrder
    user_id?: SortOrder
    method_type?: SortOrder
    is_verified?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PaymentMethodMinOrderByAggregateInput = {
    payment_method_id?: SortOrder
    user_id?: SortOrder
    method_type?: SortOrder
    is_verified?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PaymentMethodSumOrderByAggregateInput = {
    payment_method_id?: SortOrder
    user_id?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type WalletCreateNestedManyWithoutUserInput = {
    create?: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput> | WalletCreateWithoutUserInput[] | WalletUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WalletCreateOrConnectWithoutUserInput | WalletCreateOrConnectWithoutUserInput[]
    createMany?: WalletCreateManyUserInputEnvelope
    connect?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
  }

  export type PaymentMethodCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentMethodCreateWithoutUserInput, PaymentMethodUncheckedCreateWithoutUserInput> | PaymentMethodCreateWithoutUserInput[] | PaymentMethodUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutUserInput | PaymentMethodCreateOrConnectWithoutUserInput[]
    createMany?: PaymentMethodCreateManyUserInputEnvelope
    connect?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutMakerInput = {
    create?: XOR<OrderCreateWithoutMakerInput, OrderUncheckedCreateWithoutMakerInput> | OrderCreateWithoutMakerInput[] | OrderUncheckedCreateWithoutMakerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutMakerInput | OrderCreateOrConnectWithoutMakerInput[]
    createMany?: OrderCreateManyMakerInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutTakerInput = {
    create?: XOR<OrderCreateWithoutTakerInput, OrderUncheckedCreateWithoutTakerInput> | OrderCreateWithoutTakerInput[] | OrderUncheckedCreateWithoutTakerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutTakerInput | OrderCreateOrConnectWithoutTakerInput[]
    createMany?: OrderCreateManyTakerInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutSenderInput = {
    create?: XOR<TransactionCreateWithoutSenderInput, TransactionUncheckedCreateWithoutSenderInput> | TransactionCreateWithoutSenderInput[] | TransactionUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutSenderInput | TransactionCreateOrConnectWithoutSenderInput[]
    createMany?: TransactionCreateManySenderInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutReceiverInput = {
    create?: XOR<TransactionCreateWithoutReceiverInput, TransactionUncheckedCreateWithoutReceiverInput> | TransactionCreateWithoutReceiverInput[] | TransactionUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutReceiverInput | TransactionCreateOrConnectWithoutReceiverInput[]
    createMany?: TransactionCreateManyReceiverInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type WalletUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput> | WalletCreateWithoutUserInput[] | WalletUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WalletCreateOrConnectWithoutUserInput | WalletCreateOrConnectWithoutUserInput[]
    createMany?: WalletCreateManyUserInputEnvelope
    connect?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
  }

  export type PaymentMethodUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentMethodCreateWithoutUserInput, PaymentMethodUncheckedCreateWithoutUserInput> | PaymentMethodCreateWithoutUserInput[] | PaymentMethodUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutUserInput | PaymentMethodCreateOrConnectWithoutUserInput[]
    createMany?: PaymentMethodCreateManyUserInputEnvelope
    connect?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutMakerInput = {
    create?: XOR<OrderCreateWithoutMakerInput, OrderUncheckedCreateWithoutMakerInput> | OrderCreateWithoutMakerInput[] | OrderUncheckedCreateWithoutMakerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutMakerInput | OrderCreateOrConnectWithoutMakerInput[]
    createMany?: OrderCreateManyMakerInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutTakerInput = {
    create?: XOR<OrderCreateWithoutTakerInput, OrderUncheckedCreateWithoutTakerInput> | OrderCreateWithoutTakerInput[] | OrderUncheckedCreateWithoutTakerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutTakerInput | OrderCreateOrConnectWithoutTakerInput[]
    createMany?: OrderCreateManyTakerInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<TransactionCreateWithoutSenderInput, TransactionUncheckedCreateWithoutSenderInput> | TransactionCreateWithoutSenderInput[] | TransactionUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutSenderInput | TransactionCreateOrConnectWithoutSenderInput[]
    createMany?: TransactionCreateManySenderInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<TransactionCreateWithoutReceiverInput, TransactionUncheckedCreateWithoutReceiverInput> | TransactionCreateWithoutReceiverInput[] | TransactionUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutReceiverInput | TransactionCreateOrConnectWithoutReceiverInput[]
    createMany?: TransactionCreateManyReceiverInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type WalletUpdateManyWithoutUserNestedInput = {
    create?: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput> | WalletCreateWithoutUserInput[] | WalletUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WalletCreateOrConnectWithoutUserInput | WalletCreateOrConnectWithoutUserInput[]
    upsert?: WalletUpsertWithWhereUniqueWithoutUserInput | WalletUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WalletCreateManyUserInputEnvelope
    set?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
    disconnect?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
    delete?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
    connect?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
    update?: WalletUpdateWithWhereUniqueWithoutUserInput | WalletUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WalletUpdateManyWithWhereWithoutUserInput | WalletUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WalletScalarWhereInput | WalletScalarWhereInput[]
  }

  export type PaymentMethodUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentMethodCreateWithoutUserInput, PaymentMethodUncheckedCreateWithoutUserInput> | PaymentMethodCreateWithoutUserInput[] | PaymentMethodUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutUserInput | PaymentMethodCreateOrConnectWithoutUserInput[]
    upsert?: PaymentMethodUpsertWithWhereUniqueWithoutUserInput | PaymentMethodUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentMethodCreateManyUserInputEnvelope
    set?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
    disconnect?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
    delete?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
    connect?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
    update?: PaymentMethodUpdateWithWhereUniqueWithoutUserInput | PaymentMethodUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentMethodUpdateManyWithWhereWithoutUserInput | PaymentMethodUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentMethodScalarWhereInput | PaymentMethodScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutMakerNestedInput = {
    create?: XOR<OrderCreateWithoutMakerInput, OrderUncheckedCreateWithoutMakerInput> | OrderCreateWithoutMakerInput[] | OrderUncheckedCreateWithoutMakerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutMakerInput | OrderCreateOrConnectWithoutMakerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutMakerInput | OrderUpsertWithWhereUniqueWithoutMakerInput[]
    createMany?: OrderCreateManyMakerInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutMakerInput | OrderUpdateWithWhereUniqueWithoutMakerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutMakerInput | OrderUpdateManyWithWhereWithoutMakerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutTakerNestedInput = {
    create?: XOR<OrderCreateWithoutTakerInput, OrderUncheckedCreateWithoutTakerInput> | OrderCreateWithoutTakerInput[] | OrderUncheckedCreateWithoutTakerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutTakerInput | OrderCreateOrConnectWithoutTakerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutTakerInput | OrderUpsertWithWhereUniqueWithoutTakerInput[]
    createMany?: OrderCreateManyTakerInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutTakerInput | OrderUpdateWithWhereUniqueWithoutTakerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutTakerInput | OrderUpdateManyWithWhereWithoutTakerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutSenderNestedInput = {
    create?: XOR<TransactionCreateWithoutSenderInput, TransactionUncheckedCreateWithoutSenderInput> | TransactionCreateWithoutSenderInput[] | TransactionUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutSenderInput | TransactionCreateOrConnectWithoutSenderInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutSenderInput | TransactionUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: TransactionCreateManySenderInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutSenderInput | TransactionUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutSenderInput | TransactionUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<TransactionCreateWithoutReceiverInput, TransactionUncheckedCreateWithoutReceiverInput> | TransactionCreateWithoutReceiverInput[] | TransactionUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutReceiverInput | TransactionCreateOrConnectWithoutReceiverInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutReceiverInput | TransactionUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: TransactionCreateManyReceiverInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutReceiverInput | TransactionUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutReceiverInput | TransactionUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WalletUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput> | WalletCreateWithoutUserInput[] | WalletUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WalletCreateOrConnectWithoutUserInput | WalletCreateOrConnectWithoutUserInput[]
    upsert?: WalletUpsertWithWhereUniqueWithoutUserInput | WalletUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WalletCreateManyUserInputEnvelope
    set?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
    disconnect?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
    delete?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
    connect?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
    update?: WalletUpdateWithWhereUniqueWithoutUserInput | WalletUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WalletUpdateManyWithWhereWithoutUserInput | WalletUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WalletScalarWhereInput | WalletScalarWhereInput[]
  }

  export type PaymentMethodUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentMethodCreateWithoutUserInput, PaymentMethodUncheckedCreateWithoutUserInput> | PaymentMethodCreateWithoutUserInput[] | PaymentMethodUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutUserInput | PaymentMethodCreateOrConnectWithoutUserInput[]
    upsert?: PaymentMethodUpsertWithWhereUniqueWithoutUserInput | PaymentMethodUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentMethodCreateManyUserInputEnvelope
    set?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
    disconnect?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
    delete?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
    connect?: PaymentMethodWhereUniqueInput | PaymentMethodWhereUniqueInput[]
    update?: PaymentMethodUpdateWithWhereUniqueWithoutUserInput | PaymentMethodUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentMethodUpdateManyWithWhereWithoutUserInput | PaymentMethodUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentMethodScalarWhereInput | PaymentMethodScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutMakerNestedInput = {
    create?: XOR<OrderCreateWithoutMakerInput, OrderUncheckedCreateWithoutMakerInput> | OrderCreateWithoutMakerInput[] | OrderUncheckedCreateWithoutMakerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutMakerInput | OrderCreateOrConnectWithoutMakerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutMakerInput | OrderUpsertWithWhereUniqueWithoutMakerInput[]
    createMany?: OrderCreateManyMakerInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutMakerInput | OrderUpdateWithWhereUniqueWithoutMakerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutMakerInput | OrderUpdateManyWithWhereWithoutMakerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutTakerNestedInput = {
    create?: XOR<OrderCreateWithoutTakerInput, OrderUncheckedCreateWithoutTakerInput> | OrderCreateWithoutTakerInput[] | OrderUncheckedCreateWithoutTakerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutTakerInput | OrderCreateOrConnectWithoutTakerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutTakerInput | OrderUpsertWithWhereUniqueWithoutTakerInput[]
    createMany?: OrderCreateManyTakerInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutTakerInput | OrderUpdateWithWhereUniqueWithoutTakerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutTakerInput | OrderUpdateManyWithWhereWithoutTakerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<TransactionCreateWithoutSenderInput, TransactionUncheckedCreateWithoutSenderInput> | TransactionCreateWithoutSenderInput[] | TransactionUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutSenderInput | TransactionCreateOrConnectWithoutSenderInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutSenderInput | TransactionUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: TransactionCreateManySenderInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutSenderInput | TransactionUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutSenderInput | TransactionUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<TransactionCreateWithoutReceiverInput, TransactionUncheckedCreateWithoutReceiverInput> | TransactionCreateWithoutReceiverInput[] | TransactionUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutReceiverInput | TransactionCreateOrConnectWithoutReceiverInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutReceiverInput | TransactionUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: TransactionCreateManyReceiverInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutReceiverInput | TransactionUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutReceiverInput | TransactionUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type WalletCreateNestedManyWithoutCryptocurrencyInput = {
    create?: XOR<WalletCreateWithoutCryptocurrencyInput, WalletUncheckedCreateWithoutCryptocurrencyInput> | WalletCreateWithoutCryptocurrencyInput[] | WalletUncheckedCreateWithoutCryptocurrencyInput[]
    connectOrCreate?: WalletCreateOrConnectWithoutCryptocurrencyInput | WalletCreateOrConnectWithoutCryptocurrencyInput[]
    createMany?: WalletCreateManyCryptocurrencyInputEnvelope
    connect?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutCrypto_currencyInput = {
    create?: XOR<OrderCreateWithoutCrypto_currencyInput, OrderUncheckedCreateWithoutCrypto_currencyInput> | OrderCreateWithoutCrypto_currencyInput[] | OrderUncheckedCreateWithoutCrypto_currencyInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCrypto_currencyInput | OrderCreateOrConnectWithoutCrypto_currencyInput[]
    createMany?: OrderCreateManyCrypto_currencyInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutCrypto_currencyInput = {
    create?: XOR<TransactionCreateWithoutCrypto_currencyInput, TransactionUncheckedCreateWithoutCrypto_currencyInput> | TransactionCreateWithoutCrypto_currencyInput[] | TransactionUncheckedCreateWithoutCrypto_currencyInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCrypto_currencyInput | TransactionCreateOrConnectWithoutCrypto_currencyInput[]
    createMany?: TransactionCreateManyCrypto_currencyInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type WalletUncheckedCreateNestedManyWithoutCryptocurrencyInput = {
    create?: XOR<WalletCreateWithoutCryptocurrencyInput, WalletUncheckedCreateWithoutCryptocurrencyInput> | WalletCreateWithoutCryptocurrencyInput[] | WalletUncheckedCreateWithoutCryptocurrencyInput[]
    connectOrCreate?: WalletCreateOrConnectWithoutCryptocurrencyInput | WalletCreateOrConnectWithoutCryptocurrencyInput[]
    createMany?: WalletCreateManyCryptocurrencyInputEnvelope
    connect?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutCrypto_currencyInput = {
    create?: XOR<OrderCreateWithoutCrypto_currencyInput, OrderUncheckedCreateWithoutCrypto_currencyInput> | OrderCreateWithoutCrypto_currencyInput[] | OrderUncheckedCreateWithoutCrypto_currencyInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCrypto_currencyInput | OrderCreateOrConnectWithoutCrypto_currencyInput[]
    createMany?: OrderCreateManyCrypto_currencyInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutCrypto_currencyInput = {
    create?: XOR<TransactionCreateWithoutCrypto_currencyInput, TransactionUncheckedCreateWithoutCrypto_currencyInput> | TransactionCreateWithoutCrypto_currencyInput[] | TransactionUncheckedCreateWithoutCrypto_currencyInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCrypto_currencyInput | TransactionCreateOrConnectWithoutCrypto_currencyInput[]
    createMany?: TransactionCreateManyCrypto_currencyInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type WalletUpdateManyWithoutCryptocurrencyNestedInput = {
    create?: XOR<WalletCreateWithoutCryptocurrencyInput, WalletUncheckedCreateWithoutCryptocurrencyInput> | WalletCreateWithoutCryptocurrencyInput[] | WalletUncheckedCreateWithoutCryptocurrencyInput[]
    connectOrCreate?: WalletCreateOrConnectWithoutCryptocurrencyInput | WalletCreateOrConnectWithoutCryptocurrencyInput[]
    upsert?: WalletUpsertWithWhereUniqueWithoutCryptocurrencyInput | WalletUpsertWithWhereUniqueWithoutCryptocurrencyInput[]
    createMany?: WalletCreateManyCryptocurrencyInputEnvelope
    set?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
    disconnect?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
    delete?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
    connect?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
    update?: WalletUpdateWithWhereUniqueWithoutCryptocurrencyInput | WalletUpdateWithWhereUniqueWithoutCryptocurrencyInput[]
    updateMany?: WalletUpdateManyWithWhereWithoutCryptocurrencyInput | WalletUpdateManyWithWhereWithoutCryptocurrencyInput[]
    deleteMany?: WalletScalarWhereInput | WalletScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutCrypto_currencyNestedInput = {
    create?: XOR<OrderCreateWithoutCrypto_currencyInput, OrderUncheckedCreateWithoutCrypto_currencyInput> | OrderCreateWithoutCrypto_currencyInput[] | OrderUncheckedCreateWithoutCrypto_currencyInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCrypto_currencyInput | OrderCreateOrConnectWithoutCrypto_currencyInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCrypto_currencyInput | OrderUpsertWithWhereUniqueWithoutCrypto_currencyInput[]
    createMany?: OrderCreateManyCrypto_currencyInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCrypto_currencyInput | OrderUpdateWithWhereUniqueWithoutCrypto_currencyInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCrypto_currencyInput | OrderUpdateManyWithWhereWithoutCrypto_currencyInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutCrypto_currencyNestedInput = {
    create?: XOR<TransactionCreateWithoutCrypto_currencyInput, TransactionUncheckedCreateWithoutCrypto_currencyInput> | TransactionCreateWithoutCrypto_currencyInput[] | TransactionUncheckedCreateWithoutCrypto_currencyInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCrypto_currencyInput | TransactionCreateOrConnectWithoutCrypto_currencyInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCrypto_currencyInput | TransactionUpsertWithWhereUniqueWithoutCrypto_currencyInput[]
    createMany?: TransactionCreateManyCrypto_currencyInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCrypto_currencyInput | TransactionUpdateWithWhereUniqueWithoutCrypto_currencyInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCrypto_currencyInput | TransactionUpdateManyWithWhereWithoutCrypto_currencyInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type WalletUncheckedUpdateManyWithoutCryptocurrencyNestedInput = {
    create?: XOR<WalletCreateWithoutCryptocurrencyInput, WalletUncheckedCreateWithoutCryptocurrencyInput> | WalletCreateWithoutCryptocurrencyInput[] | WalletUncheckedCreateWithoutCryptocurrencyInput[]
    connectOrCreate?: WalletCreateOrConnectWithoutCryptocurrencyInput | WalletCreateOrConnectWithoutCryptocurrencyInput[]
    upsert?: WalletUpsertWithWhereUniqueWithoutCryptocurrencyInput | WalletUpsertWithWhereUniqueWithoutCryptocurrencyInput[]
    createMany?: WalletCreateManyCryptocurrencyInputEnvelope
    set?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
    disconnect?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
    delete?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
    connect?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
    update?: WalletUpdateWithWhereUniqueWithoutCryptocurrencyInput | WalletUpdateWithWhereUniqueWithoutCryptocurrencyInput[]
    updateMany?: WalletUpdateManyWithWhereWithoutCryptocurrencyInput | WalletUpdateManyWithWhereWithoutCryptocurrencyInput[]
    deleteMany?: WalletScalarWhereInput | WalletScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutCrypto_currencyNestedInput = {
    create?: XOR<OrderCreateWithoutCrypto_currencyInput, OrderUncheckedCreateWithoutCrypto_currencyInput> | OrderCreateWithoutCrypto_currencyInput[] | OrderUncheckedCreateWithoutCrypto_currencyInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCrypto_currencyInput | OrderCreateOrConnectWithoutCrypto_currencyInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCrypto_currencyInput | OrderUpsertWithWhereUniqueWithoutCrypto_currencyInput[]
    createMany?: OrderCreateManyCrypto_currencyInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCrypto_currencyInput | OrderUpdateWithWhereUniqueWithoutCrypto_currencyInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCrypto_currencyInput | OrderUpdateManyWithWhereWithoutCrypto_currencyInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutCrypto_currencyNestedInput = {
    create?: XOR<TransactionCreateWithoutCrypto_currencyInput, TransactionUncheckedCreateWithoutCrypto_currencyInput> | TransactionCreateWithoutCrypto_currencyInput[] | TransactionUncheckedCreateWithoutCrypto_currencyInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCrypto_currencyInput | TransactionCreateOrConnectWithoutCrypto_currencyInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCrypto_currencyInput | TransactionUpsertWithWhereUniqueWithoutCrypto_currencyInput[]
    createMany?: TransactionCreateManyCrypto_currencyInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCrypto_currencyInput | TransactionUpdateWithWhereUniqueWithoutCrypto_currencyInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCrypto_currencyInput | TransactionUpdateManyWithWhereWithoutCrypto_currencyInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type OrderCreateNestedManyWithoutFiat_currencyInput = {
    create?: XOR<OrderCreateWithoutFiat_currencyInput, OrderUncheckedCreateWithoutFiat_currencyInput> | OrderCreateWithoutFiat_currencyInput[] | OrderUncheckedCreateWithoutFiat_currencyInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutFiat_currencyInput | OrderCreateOrConnectWithoutFiat_currencyInput[]
    createMany?: OrderCreateManyFiat_currencyInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutFiat_currencyInput = {
    create?: XOR<TransactionCreateWithoutFiat_currencyInput, TransactionUncheckedCreateWithoutFiat_currencyInput> | TransactionCreateWithoutFiat_currencyInput[] | TransactionUncheckedCreateWithoutFiat_currencyInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutFiat_currencyInput | TransactionCreateOrConnectWithoutFiat_currencyInput[]
    createMany?: TransactionCreateManyFiat_currencyInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutFiat_currencyInput = {
    create?: XOR<OrderCreateWithoutFiat_currencyInput, OrderUncheckedCreateWithoutFiat_currencyInput> | OrderCreateWithoutFiat_currencyInput[] | OrderUncheckedCreateWithoutFiat_currencyInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutFiat_currencyInput | OrderCreateOrConnectWithoutFiat_currencyInput[]
    createMany?: OrderCreateManyFiat_currencyInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutFiat_currencyInput = {
    create?: XOR<TransactionCreateWithoutFiat_currencyInput, TransactionUncheckedCreateWithoutFiat_currencyInput> | TransactionCreateWithoutFiat_currencyInput[] | TransactionUncheckedCreateWithoutFiat_currencyInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutFiat_currencyInput | TransactionCreateOrConnectWithoutFiat_currencyInput[]
    createMany?: TransactionCreateManyFiat_currencyInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type OrderUpdateManyWithoutFiat_currencyNestedInput = {
    create?: XOR<OrderCreateWithoutFiat_currencyInput, OrderUncheckedCreateWithoutFiat_currencyInput> | OrderCreateWithoutFiat_currencyInput[] | OrderUncheckedCreateWithoutFiat_currencyInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutFiat_currencyInput | OrderCreateOrConnectWithoutFiat_currencyInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutFiat_currencyInput | OrderUpsertWithWhereUniqueWithoutFiat_currencyInput[]
    createMany?: OrderCreateManyFiat_currencyInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutFiat_currencyInput | OrderUpdateWithWhereUniqueWithoutFiat_currencyInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutFiat_currencyInput | OrderUpdateManyWithWhereWithoutFiat_currencyInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutFiat_currencyNestedInput = {
    create?: XOR<TransactionCreateWithoutFiat_currencyInput, TransactionUncheckedCreateWithoutFiat_currencyInput> | TransactionCreateWithoutFiat_currencyInput[] | TransactionUncheckedCreateWithoutFiat_currencyInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutFiat_currencyInput | TransactionCreateOrConnectWithoutFiat_currencyInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutFiat_currencyInput | TransactionUpsertWithWhereUniqueWithoutFiat_currencyInput[]
    createMany?: TransactionCreateManyFiat_currencyInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutFiat_currencyInput | TransactionUpdateWithWhereUniqueWithoutFiat_currencyInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutFiat_currencyInput | TransactionUpdateManyWithWhereWithoutFiat_currencyInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutFiat_currencyNestedInput = {
    create?: XOR<OrderCreateWithoutFiat_currencyInput, OrderUncheckedCreateWithoutFiat_currencyInput> | OrderCreateWithoutFiat_currencyInput[] | OrderUncheckedCreateWithoutFiat_currencyInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutFiat_currencyInput | OrderCreateOrConnectWithoutFiat_currencyInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutFiat_currencyInput | OrderUpsertWithWhereUniqueWithoutFiat_currencyInput[]
    createMany?: OrderCreateManyFiat_currencyInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutFiat_currencyInput | OrderUpdateWithWhereUniqueWithoutFiat_currencyInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutFiat_currencyInput | OrderUpdateManyWithWhereWithoutFiat_currencyInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutFiat_currencyNestedInput = {
    create?: XOR<TransactionCreateWithoutFiat_currencyInput, TransactionUncheckedCreateWithoutFiat_currencyInput> | TransactionCreateWithoutFiat_currencyInput[] | TransactionUncheckedCreateWithoutFiat_currencyInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutFiat_currencyInput | TransactionCreateOrConnectWithoutFiat_currencyInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutFiat_currencyInput | TransactionUpsertWithWhereUniqueWithoutFiat_currencyInput[]
    createMany?: TransactionCreateManyFiat_currencyInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutFiat_currencyInput | TransactionUpdateWithWhereUniqueWithoutFiat_currencyInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutFiat_currencyInput | TransactionUpdateManyWithWhereWithoutFiat_currencyInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWalletsInput = {
    create?: XOR<UserCreateWithoutWalletsInput, UserUncheckedCreateWithoutWalletsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWalletsInput
    connect?: UserWhereUniqueInput
  }

  export type CryptocurrencyCreateNestedOneWithoutWalletsInput = {
    create?: XOR<CryptocurrencyCreateWithoutWalletsInput, CryptocurrencyUncheckedCreateWithoutWalletsInput>
    connectOrCreate?: CryptocurrencyCreateOrConnectWithoutWalletsInput
    connect?: CryptocurrencyWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWalletsNestedInput = {
    create?: XOR<UserCreateWithoutWalletsInput, UserUncheckedCreateWithoutWalletsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWalletsInput
    upsert?: UserUpsertWithoutWalletsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWalletsInput, UserUpdateWithoutWalletsInput>, UserUncheckedUpdateWithoutWalletsInput>
  }

  export type CryptocurrencyUpdateOneRequiredWithoutWalletsNestedInput = {
    create?: XOR<CryptocurrencyCreateWithoutWalletsInput, CryptocurrencyUncheckedCreateWithoutWalletsInput>
    connectOrCreate?: CryptocurrencyCreateOrConnectWithoutWalletsInput
    upsert?: CryptocurrencyUpsertWithoutWalletsInput
    connect?: CryptocurrencyWhereUniqueInput
    update?: XOR<XOR<CryptocurrencyUpdateToOneWithWhereWithoutWalletsInput, CryptocurrencyUpdateWithoutWalletsInput>, CryptocurrencyUncheckedUpdateWithoutWalletsInput>
  }

  export type UserCreateNestedOneWithoutOrders_madeInput = {
    create?: XOR<UserCreateWithoutOrders_madeInput, UserUncheckedCreateWithoutOrders_madeInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrders_madeInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutOrders_takenInput = {
    create?: XOR<UserCreateWithoutOrders_takenInput, UserUncheckedCreateWithoutOrders_takenInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrders_takenInput
    connect?: UserWhereUniqueInput
  }

  export type CryptocurrencyCreateNestedOneWithoutOrdersInput = {
    create?: XOR<CryptocurrencyCreateWithoutOrdersInput, CryptocurrencyUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: CryptocurrencyCreateOrConnectWithoutOrdersInput
    connect?: CryptocurrencyWhereUniqueInput
  }

  export type FiatCurrencyCreateNestedOneWithoutOrdersInput = {
    create?: XOR<FiatCurrencyCreateWithoutOrdersInput, FiatCurrencyUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: FiatCurrencyCreateOrConnectWithoutOrdersInput
    connect?: FiatCurrencyWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutOrderInput = {
    create?: XOR<TransactionCreateWithoutOrderInput, TransactionUncheckedCreateWithoutOrderInput> | TransactionCreateWithoutOrderInput[] | TransactionUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutOrderInput | TransactionCreateOrConnectWithoutOrderInput[]
    createMany?: TransactionCreateManyOrderInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<TransactionCreateWithoutOrderInput, TransactionUncheckedCreateWithoutOrderInput> | TransactionCreateWithoutOrderInput[] | TransactionUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutOrderInput | TransactionCreateOrConnectWithoutOrderInput[]
    createMany?: TransactionCreateManyOrderInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutOrders_madeNestedInput = {
    create?: XOR<UserCreateWithoutOrders_madeInput, UserUncheckedCreateWithoutOrders_madeInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrders_madeInput
    upsert?: UserUpsertWithoutOrders_madeInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrders_madeInput, UserUpdateWithoutOrders_madeInput>, UserUncheckedUpdateWithoutOrders_madeInput>
  }

  export type UserUpdateOneWithoutOrders_takenNestedInput = {
    create?: XOR<UserCreateWithoutOrders_takenInput, UserUncheckedCreateWithoutOrders_takenInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrders_takenInput
    upsert?: UserUpsertWithoutOrders_takenInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrders_takenInput, UserUpdateWithoutOrders_takenInput>, UserUncheckedUpdateWithoutOrders_takenInput>
  }

  export type CryptocurrencyUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<CryptocurrencyCreateWithoutOrdersInput, CryptocurrencyUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: CryptocurrencyCreateOrConnectWithoutOrdersInput
    upsert?: CryptocurrencyUpsertWithoutOrdersInput
    connect?: CryptocurrencyWhereUniqueInput
    update?: XOR<XOR<CryptocurrencyUpdateToOneWithWhereWithoutOrdersInput, CryptocurrencyUpdateWithoutOrdersInput>, CryptocurrencyUncheckedUpdateWithoutOrdersInput>
  }

  export type FiatCurrencyUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<FiatCurrencyCreateWithoutOrdersInput, FiatCurrencyUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: FiatCurrencyCreateOrConnectWithoutOrdersInput
    upsert?: FiatCurrencyUpsertWithoutOrdersInput
    connect?: FiatCurrencyWhereUniqueInput
    update?: XOR<XOR<FiatCurrencyUpdateToOneWithWhereWithoutOrdersInput, FiatCurrencyUpdateWithoutOrdersInput>, FiatCurrencyUncheckedUpdateWithoutOrdersInput>
  }

  export type TransactionUpdateManyWithoutOrderNestedInput = {
    create?: XOR<TransactionCreateWithoutOrderInput, TransactionUncheckedCreateWithoutOrderInput> | TransactionCreateWithoutOrderInput[] | TransactionUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutOrderInput | TransactionCreateOrConnectWithoutOrderInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutOrderInput | TransactionUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: TransactionCreateManyOrderInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutOrderInput | TransactionUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutOrderInput | TransactionUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TransactionUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<TransactionCreateWithoutOrderInput, TransactionUncheckedCreateWithoutOrderInput> | TransactionCreateWithoutOrderInput[] | TransactionUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutOrderInput | TransactionCreateOrConnectWithoutOrderInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutOrderInput | TransactionUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: TransactionCreateManyOrderInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutOrderInput | TransactionUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutOrderInput | TransactionUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTransactions_sentInput = {
    create?: XOR<UserCreateWithoutTransactions_sentInput, UserUncheckedCreateWithoutTransactions_sentInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactions_sentInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTransactions_receivedInput = {
    create?: XOR<UserCreateWithoutTransactions_receivedInput, UserUncheckedCreateWithoutTransactions_receivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactions_receivedInput
    connect?: UserWhereUniqueInput
  }

  export type OrderCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<OrderCreateWithoutTransactionsInput, OrderUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutTransactionsInput
    connect?: OrderWhereUniqueInput
  }

  export type CryptocurrencyCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<CryptocurrencyCreateWithoutTransactionsInput, CryptocurrencyUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CryptocurrencyCreateOrConnectWithoutTransactionsInput
    connect?: CryptocurrencyWhereUniqueInput
  }

  export type FiatCurrencyCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<FiatCurrencyCreateWithoutTransactionsInput, FiatCurrencyUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: FiatCurrencyCreateOrConnectWithoutTransactionsInput
    connect?: FiatCurrencyWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneWithoutTransactions_sentNestedInput = {
    create?: XOR<UserCreateWithoutTransactions_sentInput, UserUncheckedCreateWithoutTransactions_sentInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactions_sentInput
    upsert?: UserUpsertWithoutTransactions_sentInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactions_sentInput, UserUpdateWithoutTransactions_sentInput>, UserUncheckedUpdateWithoutTransactions_sentInput>
  }

  export type UserUpdateOneWithoutTransactions_receivedNestedInput = {
    create?: XOR<UserCreateWithoutTransactions_receivedInput, UserUncheckedCreateWithoutTransactions_receivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactions_receivedInput
    upsert?: UserUpsertWithoutTransactions_receivedInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactions_receivedInput, UserUpdateWithoutTransactions_receivedInput>, UserUncheckedUpdateWithoutTransactions_receivedInput>
  }

  export type OrderUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<OrderCreateWithoutTransactionsInput, OrderUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutTransactionsInput
    upsert?: OrderUpsertWithoutTransactionsInput
    disconnect?: OrderWhereInput | boolean
    delete?: OrderWhereInput | boolean
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutTransactionsInput, OrderUpdateWithoutTransactionsInput>, OrderUncheckedUpdateWithoutTransactionsInput>
  }

  export type CryptocurrencyUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<CryptocurrencyCreateWithoutTransactionsInput, CryptocurrencyUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CryptocurrencyCreateOrConnectWithoutTransactionsInput
    upsert?: CryptocurrencyUpsertWithoutTransactionsInput
    disconnect?: CryptocurrencyWhereInput | boolean
    delete?: CryptocurrencyWhereInput | boolean
    connect?: CryptocurrencyWhereUniqueInput
    update?: XOR<XOR<CryptocurrencyUpdateToOneWithWhereWithoutTransactionsInput, CryptocurrencyUpdateWithoutTransactionsInput>, CryptocurrencyUncheckedUpdateWithoutTransactionsInput>
  }

  export type FiatCurrencyUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<FiatCurrencyCreateWithoutTransactionsInput, FiatCurrencyUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: FiatCurrencyCreateOrConnectWithoutTransactionsInput
    upsert?: FiatCurrencyUpsertWithoutTransactionsInput
    disconnect?: FiatCurrencyWhereInput | boolean
    delete?: FiatCurrencyWhereInput | boolean
    connect?: FiatCurrencyWhereUniqueInput
    update?: XOR<XOR<FiatCurrencyUpdateToOneWithWhereWithoutTransactionsInput, FiatCurrencyUpdateWithoutTransactionsInput>, FiatCurrencyUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserCreateNestedOneWithoutPayment_methodsInput = {
    create?: XOR<UserCreateWithoutPayment_methodsInput, UserUncheckedCreateWithoutPayment_methodsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPayment_methodsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPayment_methodsNestedInput = {
    create?: XOR<UserCreateWithoutPayment_methodsInput, UserUncheckedCreateWithoutPayment_methodsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPayment_methodsInput
    upsert?: UserUpsertWithoutPayment_methodsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPayment_methodsInput, UserUpdateWithoutPayment_methodsInput>, UserUncheckedUpdateWithoutPayment_methodsInput>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type WalletCreateWithoutUserInput = {
    balance: Decimal | DecimalJsLike | number | string
    wallet_address: string
    created_at?: Date | string
    updated_at?: Date | string
    cryptocurrency: CryptocurrencyCreateNestedOneWithoutWalletsInput
  }

  export type WalletUncheckedCreateWithoutUserInput = {
    wallet_id?: number
    currency_id: number
    balance: Decimal | DecimalJsLike | number | string
    wallet_address: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WalletCreateOrConnectWithoutUserInput = {
    where: WalletWhereUniqueInput
    create: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
  }

  export type WalletCreateManyUserInputEnvelope = {
    data: WalletCreateManyUserInput | WalletCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PaymentMethodCreateWithoutUserInput = {
    method_type: string
    details: JsonNullValueInput | InputJsonValue
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PaymentMethodUncheckedCreateWithoutUserInput = {
    payment_method_id?: number
    method_type: string
    details: JsonNullValueInput | InputJsonValue
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PaymentMethodCreateOrConnectWithoutUserInput = {
    where: PaymentMethodWhereUniqueInput
    create: XOR<PaymentMethodCreateWithoutUserInput, PaymentMethodUncheckedCreateWithoutUserInput>
  }

  export type PaymentMethodCreateManyUserInputEnvelope = {
    data: PaymentMethodCreateManyUserInput | PaymentMethodCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutMakerInput = {
    order_type: string
    crypto_amount: Decimal | DecimalJsLike | number | string
    price_per_crypto: Decimal | DecimalJsLike | number | string
    total_fiat_amount: Decimal | DecimalJsLike | number | string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
    expiry_date?: Date | string | null
    taker?: UserCreateNestedOneWithoutOrders_takenInput
    crypto_currency: CryptocurrencyCreateNestedOneWithoutOrdersInput
    fiat_currency: FiatCurrencyCreateNestedOneWithoutOrdersInput
    transactions?: TransactionCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutMakerInput = {
    order_id?: number
    taker_user_id?: number | null
    order_type: string
    crypto_currency_id: number
    fiat_currency_id: number
    crypto_amount: Decimal | DecimalJsLike | number | string
    price_per_crypto: Decimal | DecimalJsLike | number | string
    total_fiat_amount: Decimal | DecimalJsLike | number | string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
    expiry_date?: Date | string | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutMakerInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutMakerInput, OrderUncheckedCreateWithoutMakerInput>
  }

  export type OrderCreateManyMakerInputEnvelope = {
    data: OrderCreateManyMakerInput | OrderCreateManyMakerInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutTakerInput = {
    order_type: string
    crypto_amount: Decimal | DecimalJsLike | number | string
    price_per_crypto: Decimal | DecimalJsLike | number | string
    total_fiat_amount: Decimal | DecimalJsLike | number | string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
    expiry_date?: Date | string | null
    maker: UserCreateNestedOneWithoutOrders_madeInput
    crypto_currency: CryptocurrencyCreateNestedOneWithoutOrdersInput
    fiat_currency: FiatCurrencyCreateNestedOneWithoutOrdersInput
    transactions?: TransactionCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutTakerInput = {
    order_id?: number
    maker_user_id: number
    order_type: string
    crypto_currency_id: number
    fiat_currency_id: number
    crypto_amount: Decimal | DecimalJsLike | number | string
    price_per_crypto: Decimal | DecimalJsLike | number | string
    total_fiat_amount: Decimal | DecimalJsLike | number | string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
    expiry_date?: Date | string | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutTakerInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutTakerInput, OrderUncheckedCreateWithoutTakerInput>
  }

  export type OrderCreateManyTakerInputEnvelope = {
    data: OrderCreateManyTakerInput | OrderCreateManyTakerInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutSenderInput = {
    transaction_type: string
    amount: Decimal | DecimalJsLike | number | string
    transaction_fee: Decimal | DecimalJsLike | number | string
    status: string
    transaction_date?: Date | string
    external_address?: string | null
    tx_hash?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    receiver?: UserCreateNestedOneWithoutTransactions_receivedInput
    order?: OrderCreateNestedOneWithoutTransactionsInput
    crypto_currency?: CryptocurrencyCreateNestedOneWithoutTransactionsInput
    fiat_currency?: FiatCurrencyCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutSenderInput = {
    transaction_id?: number
    receiver_user_id?: number | null
    order_id?: number | null
    transaction_type: string
    crypto_currency_id?: number | null
    fiat_currency_id?: number | null
    amount: Decimal | DecimalJsLike | number | string
    transaction_fee: Decimal | DecimalJsLike | number | string
    status: string
    transaction_date?: Date | string
    external_address?: string | null
    tx_hash?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TransactionCreateOrConnectWithoutSenderInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutSenderInput, TransactionUncheckedCreateWithoutSenderInput>
  }

  export type TransactionCreateManySenderInputEnvelope = {
    data: TransactionCreateManySenderInput | TransactionCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutReceiverInput = {
    transaction_type: string
    amount: Decimal | DecimalJsLike | number | string
    transaction_fee: Decimal | DecimalJsLike | number | string
    status: string
    transaction_date?: Date | string
    external_address?: string | null
    tx_hash?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    sender?: UserCreateNestedOneWithoutTransactions_sentInput
    order?: OrderCreateNestedOneWithoutTransactionsInput
    crypto_currency?: CryptocurrencyCreateNestedOneWithoutTransactionsInput
    fiat_currency?: FiatCurrencyCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutReceiverInput = {
    transaction_id?: number
    sender_user_id?: number | null
    order_id?: number | null
    transaction_type: string
    crypto_currency_id?: number | null
    fiat_currency_id?: number | null
    amount: Decimal | DecimalJsLike | number | string
    transaction_fee: Decimal | DecimalJsLike | number | string
    status: string
    transaction_date?: Date | string
    external_address?: string | null
    tx_hash?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TransactionCreateOrConnectWithoutReceiverInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutReceiverInput, TransactionUncheckedCreateWithoutReceiverInput>
  }

  export type TransactionCreateManyReceiverInputEnvelope = {
    data: TransactionCreateManyReceiverInput | TransactionCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type WalletUpsertWithWhereUniqueWithoutUserInput = {
    where: WalletWhereUniqueInput
    update: XOR<WalletUpdateWithoutUserInput, WalletUncheckedUpdateWithoutUserInput>
    create: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
  }

  export type WalletUpdateWithWhereUniqueWithoutUserInput = {
    where: WalletWhereUniqueInput
    data: XOR<WalletUpdateWithoutUserInput, WalletUncheckedUpdateWithoutUserInput>
  }

  export type WalletUpdateManyWithWhereWithoutUserInput = {
    where: WalletScalarWhereInput
    data: XOR<WalletUpdateManyMutationInput, WalletUncheckedUpdateManyWithoutUserInput>
  }

  export type WalletScalarWhereInput = {
    AND?: WalletScalarWhereInput | WalletScalarWhereInput[]
    OR?: WalletScalarWhereInput[]
    NOT?: WalletScalarWhereInput | WalletScalarWhereInput[]
    wallet_id?: IntFilter<"Wallet"> | number
    user_id?: IntFilter<"Wallet"> | number
    currency_id?: IntFilter<"Wallet"> | number
    balance?: DecimalFilter<"Wallet"> | Decimal | DecimalJsLike | number | string
    wallet_address?: StringFilter<"Wallet"> | string
    created_at?: DateTimeFilter<"Wallet"> | Date | string
    updated_at?: DateTimeFilter<"Wallet"> | Date | string
  }

  export type PaymentMethodUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentMethodWhereUniqueInput
    update: XOR<PaymentMethodUpdateWithoutUserInput, PaymentMethodUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentMethodCreateWithoutUserInput, PaymentMethodUncheckedCreateWithoutUserInput>
  }

  export type PaymentMethodUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentMethodWhereUniqueInput
    data: XOR<PaymentMethodUpdateWithoutUserInput, PaymentMethodUncheckedUpdateWithoutUserInput>
  }

  export type PaymentMethodUpdateManyWithWhereWithoutUserInput = {
    where: PaymentMethodScalarWhereInput
    data: XOR<PaymentMethodUpdateManyMutationInput, PaymentMethodUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentMethodScalarWhereInput = {
    AND?: PaymentMethodScalarWhereInput | PaymentMethodScalarWhereInput[]
    OR?: PaymentMethodScalarWhereInput[]
    NOT?: PaymentMethodScalarWhereInput | PaymentMethodScalarWhereInput[]
    payment_method_id?: IntFilter<"PaymentMethod"> | number
    user_id?: IntFilter<"PaymentMethod"> | number
    method_type?: StringFilter<"PaymentMethod"> | string
    details?: JsonFilter<"PaymentMethod">
    is_verified?: BoolFilter<"PaymentMethod"> | boolean
    created_at?: DateTimeFilter<"PaymentMethod"> | Date | string
    updated_at?: DateTimeFilter<"PaymentMethod"> | Date | string
  }

  export type OrderUpsertWithWhereUniqueWithoutMakerInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutMakerInput, OrderUncheckedUpdateWithoutMakerInput>
    create: XOR<OrderCreateWithoutMakerInput, OrderUncheckedCreateWithoutMakerInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutMakerInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutMakerInput, OrderUncheckedUpdateWithoutMakerInput>
  }

  export type OrderUpdateManyWithWhereWithoutMakerInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutMakerInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    order_id?: IntFilter<"Order"> | number
    maker_user_id?: IntFilter<"Order"> | number
    taker_user_id?: IntNullableFilter<"Order"> | number | null
    order_type?: StringFilter<"Order"> | string
    crypto_currency_id?: IntFilter<"Order"> | number
    fiat_currency_id?: IntFilter<"Order"> | number
    crypto_amount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    price_per_crypto?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    total_fiat_amount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    status?: StringFilter<"Order"> | string
    created_at?: DateTimeFilter<"Order"> | Date | string
    updated_at?: DateTimeFilter<"Order"> | Date | string
    expiry_date?: DateTimeNullableFilter<"Order"> | Date | string | null
  }

  export type OrderUpsertWithWhereUniqueWithoutTakerInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutTakerInput, OrderUncheckedUpdateWithoutTakerInput>
    create: XOR<OrderCreateWithoutTakerInput, OrderUncheckedCreateWithoutTakerInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutTakerInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutTakerInput, OrderUncheckedUpdateWithoutTakerInput>
  }

  export type OrderUpdateManyWithWhereWithoutTakerInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutTakerInput>
  }

  export type TransactionUpsertWithWhereUniqueWithoutSenderInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutSenderInput, TransactionUncheckedUpdateWithoutSenderInput>
    create: XOR<TransactionCreateWithoutSenderInput, TransactionUncheckedCreateWithoutSenderInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutSenderInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutSenderInput, TransactionUncheckedUpdateWithoutSenderInput>
  }

  export type TransactionUpdateManyWithWhereWithoutSenderInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutSenderInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    transaction_id?: IntFilter<"Transaction"> | number
    sender_user_id?: IntNullableFilter<"Transaction"> | number | null
    receiver_user_id?: IntNullableFilter<"Transaction"> | number | null
    order_id?: IntNullableFilter<"Transaction"> | number | null
    transaction_type?: StringFilter<"Transaction"> | string
    crypto_currency_id?: IntNullableFilter<"Transaction"> | number | null
    fiat_currency_id?: IntNullableFilter<"Transaction"> | number | null
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    transaction_fee?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    status?: StringFilter<"Transaction"> | string
    transaction_date?: DateTimeFilter<"Transaction"> | Date | string
    external_address?: StringNullableFilter<"Transaction"> | string | null
    tx_hash?: StringNullableFilter<"Transaction"> | string | null
    created_at?: DateTimeFilter<"Transaction"> | Date | string
    updated_at?: DateTimeFilter<"Transaction"> | Date | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutReceiverInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutReceiverInput, TransactionUncheckedUpdateWithoutReceiverInput>
    create: XOR<TransactionCreateWithoutReceiverInput, TransactionUncheckedCreateWithoutReceiverInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutReceiverInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutReceiverInput, TransactionUncheckedUpdateWithoutReceiverInput>
  }

  export type TransactionUpdateManyWithWhereWithoutReceiverInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutReceiverInput>
  }

  export type WalletCreateWithoutCryptocurrencyInput = {
    balance: Decimal | DecimalJsLike | number | string
    wallet_address: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutWalletsInput
  }

  export type WalletUncheckedCreateWithoutCryptocurrencyInput = {
    wallet_id?: number
    user_id: number
    balance: Decimal | DecimalJsLike | number | string
    wallet_address: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WalletCreateOrConnectWithoutCryptocurrencyInput = {
    where: WalletWhereUniqueInput
    create: XOR<WalletCreateWithoutCryptocurrencyInput, WalletUncheckedCreateWithoutCryptocurrencyInput>
  }

  export type WalletCreateManyCryptocurrencyInputEnvelope = {
    data: WalletCreateManyCryptocurrencyInput | WalletCreateManyCryptocurrencyInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutCrypto_currencyInput = {
    order_type: string
    crypto_amount: Decimal | DecimalJsLike | number | string
    price_per_crypto: Decimal | DecimalJsLike | number | string
    total_fiat_amount: Decimal | DecimalJsLike | number | string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
    expiry_date?: Date | string | null
    maker: UserCreateNestedOneWithoutOrders_madeInput
    taker?: UserCreateNestedOneWithoutOrders_takenInput
    fiat_currency: FiatCurrencyCreateNestedOneWithoutOrdersInput
    transactions?: TransactionCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutCrypto_currencyInput = {
    order_id?: number
    maker_user_id: number
    taker_user_id?: number | null
    order_type: string
    fiat_currency_id: number
    crypto_amount: Decimal | DecimalJsLike | number | string
    price_per_crypto: Decimal | DecimalJsLike | number | string
    total_fiat_amount: Decimal | DecimalJsLike | number | string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
    expiry_date?: Date | string | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutCrypto_currencyInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutCrypto_currencyInput, OrderUncheckedCreateWithoutCrypto_currencyInput>
  }

  export type OrderCreateManyCrypto_currencyInputEnvelope = {
    data: OrderCreateManyCrypto_currencyInput | OrderCreateManyCrypto_currencyInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutCrypto_currencyInput = {
    transaction_type: string
    amount: Decimal | DecimalJsLike | number | string
    transaction_fee: Decimal | DecimalJsLike | number | string
    status: string
    transaction_date?: Date | string
    external_address?: string | null
    tx_hash?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    sender?: UserCreateNestedOneWithoutTransactions_sentInput
    receiver?: UserCreateNestedOneWithoutTransactions_receivedInput
    order?: OrderCreateNestedOneWithoutTransactionsInput
    fiat_currency?: FiatCurrencyCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutCrypto_currencyInput = {
    transaction_id?: number
    sender_user_id?: number | null
    receiver_user_id?: number | null
    order_id?: number | null
    transaction_type: string
    fiat_currency_id?: number | null
    amount: Decimal | DecimalJsLike | number | string
    transaction_fee: Decimal | DecimalJsLike | number | string
    status: string
    transaction_date?: Date | string
    external_address?: string | null
    tx_hash?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TransactionCreateOrConnectWithoutCrypto_currencyInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutCrypto_currencyInput, TransactionUncheckedCreateWithoutCrypto_currencyInput>
  }

  export type TransactionCreateManyCrypto_currencyInputEnvelope = {
    data: TransactionCreateManyCrypto_currencyInput | TransactionCreateManyCrypto_currencyInput[]
    skipDuplicates?: boolean
  }

  export type WalletUpsertWithWhereUniqueWithoutCryptocurrencyInput = {
    where: WalletWhereUniqueInput
    update: XOR<WalletUpdateWithoutCryptocurrencyInput, WalletUncheckedUpdateWithoutCryptocurrencyInput>
    create: XOR<WalletCreateWithoutCryptocurrencyInput, WalletUncheckedCreateWithoutCryptocurrencyInput>
  }

  export type WalletUpdateWithWhereUniqueWithoutCryptocurrencyInput = {
    where: WalletWhereUniqueInput
    data: XOR<WalletUpdateWithoutCryptocurrencyInput, WalletUncheckedUpdateWithoutCryptocurrencyInput>
  }

  export type WalletUpdateManyWithWhereWithoutCryptocurrencyInput = {
    where: WalletScalarWhereInput
    data: XOR<WalletUpdateManyMutationInput, WalletUncheckedUpdateManyWithoutCryptocurrencyInput>
  }

  export type OrderUpsertWithWhereUniqueWithoutCrypto_currencyInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutCrypto_currencyInput, OrderUncheckedUpdateWithoutCrypto_currencyInput>
    create: XOR<OrderCreateWithoutCrypto_currencyInput, OrderUncheckedCreateWithoutCrypto_currencyInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutCrypto_currencyInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutCrypto_currencyInput, OrderUncheckedUpdateWithoutCrypto_currencyInput>
  }

  export type OrderUpdateManyWithWhereWithoutCrypto_currencyInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutCrypto_currencyInput>
  }

  export type TransactionUpsertWithWhereUniqueWithoutCrypto_currencyInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutCrypto_currencyInput, TransactionUncheckedUpdateWithoutCrypto_currencyInput>
    create: XOR<TransactionCreateWithoutCrypto_currencyInput, TransactionUncheckedCreateWithoutCrypto_currencyInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutCrypto_currencyInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutCrypto_currencyInput, TransactionUncheckedUpdateWithoutCrypto_currencyInput>
  }

  export type TransactionUpdateManyWithWhereWithoutCrypto_currencyInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutCrypto_currencyInput>
  }

  export type OrderCreateWithoutFiat_currencyInput = {
    order_type: string
    crypto_amount: Decimal | DecimalJsLike | number | string
    price_per_crypto: Decimal | DecimalJsLike | number | string
    total_fiat_amount: Decimal | DecimalJsLike | number | string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
    expiry_date?: Date | string | null
    maker: UserCreateNestedOneWithoutOrders_madeInput
    taker?: UserCreateNestedOneWithoutOrders_takenInput
    crypto_currency: CryptocurrencyCreateNestedOneWithoutOrdersInput
    transactions?: TransactionCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutFiat_currencyInput = {
    order_id?: number
    maker_user_id: number
    taker_user_id?: number | null
    order_type: string
    crypto_currency_id: number
    crypto_amount: Decimal | DecimalJsLike | number | string
    price_per_crypto: Decimal | DecimalJsLike | number | string
    total_fiat_amount: Decimal | DecimalJsLike | number | string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
    expiry_date?: Date | string | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutFiat_currencyInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutFiat_currencyInput, OrderUncheckedCreateWithoutFiat_currencyInput>
  }

  export type OrderCreateManyFiat_currencyInputEnvelope = {
    data: OrderCreateManyFiat_currencyInput | OrderCreateManyFiat_currencyInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutFiat_currencyInput = {
    transaction_type: string
    amount: Decimal | DecimalJsLike | number | string
    transaction_fee: Decimal | DecimalJsLike | number | string
    status: string
    transaction_date?: Date | string
    external_address?: string | null
    tx_hash?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    sender?: UserCreateNestedOneWithoutTransactions_sentInput
    receiver?: UserCreateNestedOneWithoutTransactions_receivedInput
    order?: OrderCreateNestedOneWithoutTransactionsInput
    crypto_currency?: CryptocurrencyCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutFiat_currencyInput = {
    transaction_id?: number
    sender_user_id?: number | null
    receiver_user_id?: number | null
    order_id?: number | null
    transaction_type: string
    crypto_currency_id?: number | null
    amount: Decimal | DecimalJsLike | number | string
    transaction_fee: Decimal | DecimalJsLike | number | string
    status: string
    transaction_date?: Date | string
    external_address?: string | null
    tx_hash?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TransactionCreateOrConnectWithoutFiat_currencyInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutFiat_currencyInput, TransactionUncheckedCreateWithoutFiat_currencyInput>
  }

  export type TransactionCreateManyFiat_currencyInputEnvelope = {
    data: TransactionCreateManyFiat_currencyInput | TransactionCreateManyFiat_currencyInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithWhereUniqueWithoutFiat_currencyInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutFiat_currencyInput, OrderUncheckedUpdateWithoutFiat_currencyInput>
    create: XOR<OrderCreateWithoutFiat_currencyInput, OrderUncheckedCreateWithoutFiat_currencyInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutFiat_currencyInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutFiat_currencyInput, OrderUncheckedUpdateWithoutFiat_currencyInput>
  }

  export type OrderUpdateManyWithWhereWithoutFiat_currencyInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutFiat_currencyInput>
  }

  export type TransactionUpsertWithWhereUniqueWithoutFiat_currencyInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutFiat_currencyInput, TransactionUncheckedUpdateWithoutFiat_currencyInput>
    create: XOR<TransactionCreateWithoutFiat_currencyInput, TransactionUncheckedCreateWithoutFiat_currencyInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutFiat_currencyInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutFiat_currencyInput, TransactionUncheckedUpdateWithoutFiat_currencyInput>
  }

  export type TransactionUpdateManyWithWhereWithoutFiat_currencyInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutFiat_currencyInput>
  }

  export type UserCreateWithoutWalletsInput = {
    username: string
    email: string
    password_hash: string
    fiat_balance_thb: Decimal | DecimalJsLike | number | string
    fiat_balance_usd: Decimal | DecimalJsLike | number | string
    registration_date?: Date | string
    is_verified?: boolean
    payment_methods?: PaymentMethodCreateNestedManyWithoutUserInput
    orders_made?: OrderCreateNestedManyWithoutMakerInput
    orders_taken?: OrderCreateNestedManyWithoutTakerInput
    transactions_sent?: TransactionCreateNestedManyWithoutSenderInput
    transactions_received?: TransactionCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutWalletsInput = {
    user_id?: number
    username: string
    email: string
    password_hash: string
    fiat_balance_thb: Decimal | DecimalJsLike | number | string
    fiat_balance_usd: Decimal | DecimalJsLike | number | string
    registration_date?: Date | string
    is_verified?: boolean
    payment_methods?: PaymentMethodUncheckedCreateNestedManyWithoutUserInput
    orders_made?: OrderUncheckedCreateNestedManyWithoutMakerInput
    orders_taken?: OrderUncheckedCreateNestedManyWithoutTakerInput
    transactions_sent?: TransactionUncheckedCreateNestedManyWithoutSenderInput
    transactions_received?: TransactionUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutWalletsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWalletsInput, UserUncheckedCreateWithoutWalletsInput>
  }

  export type CryptocurrencyCreateWithoutWalletsInput = {
    symbol: string
    name: string
    decimal_places: number
    created_at?: Date | string
    updated_at?: Date | string
    orders?: OrderCreateNestedManyWithoutCrypto_currencyInput
    transactions?: TransactionCreateNestedManyWithoutCrypto_currencyInput
  }

  export type CryptocurrencyUncheckedCreateWithoutWalletsInput = {
    currency_id?: number
    symbol: string
    name: string
    decimal_places: number
    created_at?: Date | string
    updated_at?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutCrypto_currencyInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutCrypto_currencyInput
  }

  export type CryptocurrencyCreateOrConnectWithoutWalletsInput = {
    where: CryptocurrencyWhereUniqueInput
    create: XOR<CryptocurrencyCreateWithoutWalletsInput, CryptocurrencyUncheckedCreateWithoutWalletsInput>
  }

  export type UserUpsertWithoutWalletsInput = {
    update: XOR<UserUpdateWithoutWalletsInput, UserUncheckedUpdateWithoutWalletsInput>
    create: XOR<UserCreateWithoutWalletsInput, UserUncheckedCreateWithoutWalletsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWalletsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWalletsInput, UserUncheckedUpdateWithoutWalletsInput>
  }

  export type UserUpdateWithoutWalletsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    fiat_balance_thb?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fiat_balance_usd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    registration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    payment_methods?: PaymentMethodUpdateManyWithoutUserNestedInput
    orders_made?: OrderUpdateManyWithoutMakerNestedInput
    orders_taken?: OrderUpdateManyWithoutTakerNestedInput
    transactions_sent?: TransactionUpdateManyWithoutSenderNestedInput
    transactions_received?: TransactionUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutWalletsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    fiat_balance_thb?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fiat_balance_usd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    registration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    payment_methods?: PaymentMethodUncheckedUpdateManyWithoutUserNestedInput
    orders_made?: OrderUncheckedUpdateManyWithoutMakerNestedInput
    orders_taken?: OrderUncheckedUpdateManyWithoutTakerNestedInput
    transactions_sent?: TransactionUncheckedUpdateManyWithoutSenderNestedInput
    transactions_received?: TransactionUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type CryptocurrencyUpsertWithoutWalletsInput = {
    update: XOR<CryptocurrencyUpdateWithoutWalletsInput, CryptocurrencyUncheckedUpdateWithoutWalletsInput>
    create: XOR<CryptocurrencyCreateWithoutWalletsInput, CryptocurrencyUncheckedCreateWithoutWalletsInput>
    where?: CryptocurrencyWhereInput
  }

  export type CryptocurrencyUpdateToOneWithWhereWithoutWalletsInput = {
    where?: CryptocurrencyWhereInput
    data: XOR<CryptocurrencyUpdateWithoutWalletsInput, CryptocurrencyUncheckedUpdateWithoutWalletsInput>
  }

  export type CryptocurrencyUpdateWithoutWalletsInput = {
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    decimal_places?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutCrypto_currencyNestedInput
    transactions?: TransactionUpdateManyWithoutCrypto_currencyNestedInput
  }

  export type CryptocurrencyUncheckedUpdateWithoutWalletsInput = {
    currency_id?: IntFieldUpdateOperationsInput | number
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    decimal_places?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutCrypto_currencyNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutCrypto_currencyNestedInput
  }

  export type UserCreateWithoutOrders_madeInput = {
    username: string
    email: string
    password_hash: string
    fiat_balance_thb: Decimal | DecimalJsLike | number | string
    fiat_balance_usd: Decimal | DecimalJsLike | number | string
    registration_date?: Date | string
    is_verified?: boolean
    wallets?: WalletCreateNestedManyWithoutUserInput
    payment_methods?: PaymentMethodCreateNestedManyWithoutUserInput
    orders_taken?: OrderCreateNestedManyWithoutTakerInput
    transactions_sent?: TransactionCreateNestedManyWithoutSenderInput
    transactions_received?: TransactionCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutOrders_madeInput = {
    user_id?: number
    username: string
    email: string
    password_hash: string
    fiat_balance_thb: Decimal | DecimalJsLike | number | string
    fiat_balance_usd: Decimal | DecimalJsLike | number | string
    registration_date?: Date | string
    is_verified?: boolean
    wallets?: WalletUncheckedCreateNestedManyWithoutUserInput
    payment_methods?: PaymentMethodUncheckedCreateNestedManyWithoutUserInput
    orders_taken?: OrderUncheckedCreateNestedManyWithoutTakerInput
    transactions_sent?: TransactionUncheckedCreateNestedManyWithoutSenderInput
    transactions_received?: TransactionUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutOrders_madeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrders_madeInput, UserUncheckedCreateWithoutOrders_madeInput>
  }

  export type UserCreateWithoutOrders_takenInput = {
    username: string
    email: string
    password_hash: string
    fiat_balance_thb: Decimal | DecimalJsLike | number | string
    fiat_balance_usd: Decimal | DecimalJsLike | number | string
    registration_date?: Date | string
    is_verified?: boolean
    wallets?: WalletCreateNestedManyWithoutUserInput
    payment_methods?: PaymentMethodCreateNestedManyWithoutUserInput
    orders_made?: OrderCreateNestedManyWithoutMakerInput
    transactions_sent?: TransactionCreateNestedManyWithoutSenderInput
    transactions_received?: TransactionCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutOrders_takenInput = {
    user_id?: number
    username: string
    email: string
    password_hash: string
    fiat_balance_thb: Decimal | DecimalJsLike | number | string
    fiat_balance_usd: Decimal | DecimalJsLike | number | string
    registration_date?: Date | string
    is_verified?: boolean
    wallets?: WalletUncheckedCreateNestedManyWithoutUserInput
    payment_methods?: PaymentMethodUncheckedCreateNestedManyWithoutUserInput
    orders_made?: OrderUncheckedCreateNestedManyWithoutMakerInput
    transactions_sent?: TransactionUncheckedCreateNestedManyWithoutSenderInput
    transactions_received?: TransactionUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutOrders_takenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrders_takenInput, UserUncheckedCreateWithoutOrders_takenInput>
  }

  export type CryptocurrencyCreateWithoutOrdersInput = {
    symbol: string
    name: string
    decimal_places: number
    created_at?: Date | string
    updated_at?: Date | string
    wallets?: WalletCreateNestedManyWithoutCryptocurrencyInput
    transactions?: TransactionCreateNestedManyWithoutCrypto_currencyInput
  }

  export type CryptocurrencyUncheckedCreateWithoutOrdersInput = {
    currency_id?: number
    symbol: string
    name: string
    decimal_places: number
    created_at?: Date | string
    updated_at?: Date | string
    wallets?: WalletUncheckedCreateNestedManyWithoutCryptocurrencyInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutCrypto_currencyInput
  }

  export type CryptocurrencyCreateOrConnectWithoutOrdersInput = {
    where: CryptocurrencyWhereUniqueInput
    create: XOR<CryptocurrencyCreateWithoutOrdersInput, CryptocurrencyUncheckedCreateWithoutOrdersInput>
  }

  export type FiatCurrencyCreateWithoutOrdersInput = {
    symbol: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    transactions?: TransactionCreateNestedManyWithoutFiat_currencyInput
  }

  export type FiatCurrencyUncheckedCreateWithoutOrdersInput = {
    fiat_id?: number
    symbol: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutFiat_currencyInput
  }

  export type FiatCurrencyCreateOrConnectWithoutOrdersInput = {
    where: FiatCurrencyWhereUniqueInput
    create: XOR<FiatCurrencyCreateWithoutOrdersInput, FiatCurrencyUncheckedCreateWithoutOrdersInput>
  }

  export type TransactionCreateWithoutOrderInput = {
    transaction_type: string
    amount: Decimal | DecimalJsLike | number | string
    transaction_fee: Decimal | DecimalJsLike | number | string
    status: string
    transaction_date?: Date | string
    external_address?: string | null
    tx_hash?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    sender?: UserCreateNestedOneWithoutTransactions_sentInput
    receiver?: UserCreateNestedOneWithoutTransactions_receivedInput
    crypto_currency?: CryptocurrencyCreateNestedOneWithoutTransactionsInput
    fiat_currency?: FiatCurrencyCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutOrderInput = {
    transaction_id?: number
    sender_user_id?: number | null
    receiver_user_id?: number | null
    transaction_type: string
    crypto_currency_id?: number | null
    fiat_currency_id?: number | null
    amount: Decimal | DecimalJsLike | number | string
    transaction_fee: Decimal | DecimalJsLike | number | string
    status: string
    transaction_date?: Date | string
    external_address?: string | null
    tx_hash?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TransactionCreateOrConnectWithoutOrderInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutOrderInput, TransactionUncheckedCreateWithoutOrderInput>
  }

  export type TransactionCreateManyOrderInputEnvelope = {
    data: TransactionCreateManyOrderInput | TransactionCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOrders_madeInput = {
    update: XOR<UserUpdateWithoutOrders_madeInput, UserUncheckedUpdateWithoutOrders_madeInput>
    create: XOR<UserCreateWithoutOrders_madeInput, UserUncheckedCreateWithoutOrders_madeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrders_madeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrders_madeInput, UserUncheckedUpdateWithoutOrders_madeInput>
  }

  export type UserUpdateWithoutOrders_madeInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    fiat_balance_thb?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fiat_balance_usd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    registration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    wallets?: WalletUpdateManyWithoutUserNestedInput
    payment_methods?: PaymentMethodUpdateManyWithoutUserNestedInput
    orders_taken?: OrderUpdateManyWithoutTakerNestedInput
    transactions_sent?: TransactionUpdateManyWithoutSenderNestedInput
    transactions_received?: TransactionUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutOrders_madeInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    fiat_balance_thb?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fiat_balance_usd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    registration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    wallets?: WalletUncheckedUpdateManyWithoutUserNestedInput
    payment_methods?: PaymentMethodUncheckedUpdateManyWithoutUserNestedInput
    orders_taken?: OrderUncheckedUpdateManyWithoutTakerNestedInput
    transactions_sent?: TransactionUncheckedUpdateManyWithoutSenderNestedInput
    transactions_received?: TransactionUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserUpsertWithoutOrders_takenInput = {
    update: XOR<UserUpdateWithoutOrders_takenInput, UserUncheckedUpdateWithoutOrders_takenInput>
    create: XOR<UserCreateWithoutOrders_takenInput, UserUncheckedCreateWithoutOrders_takenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrders_takenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrders_takenInput, UserUncheckedUpdateWithoutOrders_takenInput>
  }

  export type UserUpdateWithoutOrders_takenInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    fiat_balance_thb?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fiat_balance_usd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    registration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    wallets?: WalletUpdateManyWithoutUserNestedInput
    payment_methods?: PaymentMethodUpdateManyWithoutUserNestedInput
    orders_made?: OrderUpdateManyWithoutMakerNestedInput
    transactions_sent?: TransactionUpdateManyWithoutSenderNestedInput
    transactions_received?: TransactionUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutOrders_takenInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    fiat_balance_thb?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fiat_balance_usd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    registration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    wallets?: WalletUncheckedUpdateManyWithoutUserNestedInput
    payment_methods?: PaymentMethodUncheckedUpdateManyWithoutUserNestedInput
    orders_made?: OrderUncheckedUpdateManyWithoutMakerNestedInput
    transactions_sent?: TransactionUncheckedUpdateManyWithoutSenderNestedInput
    transactions_received?: TransactionUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type CryptocurrencyUpsertWithoutOrdersInput = {
    update: XOR<CryptocurrencyUpdateWithoutOrdersInput, CryptocurrencyUncheckedUpdateWithoutOrdersInput>
    create: XOR<CryptocurrencyCreateWithoutOrdersInput, CryptocurrencyUncheckedCreateWithoutOrdersInput>
    where?: CryptocurrencyWhereInput
  }

  export type CryptocurrencyUpdateToOneWithWhereWithoutOrdersInput = {
    where?: CryptocurrencyWhereInput
    data: XOR<CryptocurrencyUpdateWithoutOrdersInput, CryptocurrencyUncheckedUpdateWithoutOrdersInput>
  }

  export type CryptocurrencyUpdateWithoutOrdersInput = {
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    decimal_places?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    wallets?: WalletUpdateManyWithoutCryptocurrencyNestedInput
    transactions?: TransactionUpdateManyWithoutCrypto_currencyNestedInput
  }

  export type CryptocurrencyUncheckedUpdateWithoutOrdersInput = {
    currency_id?: IntFieldUpdateOperationsInput | number
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    decimal_places?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    wallets?: WalletUncheckedUpdateManyWithoutCryptocurrencyNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutCrypto_currencyNestedInput
  }

  export type FiatCurrencyUpsertWithoutOrdersInput = {
    update: XOR<FiatCurrencyUpdateWithoutOrdersInput, FiatCurrencyUncheckedUpdateWithoutOrdersInput>
    create: XOR<FiatCurrencyCreateWithoutOrdersInput, FiatCurrencyUncheckedCreateWithoutOrdersInput>
    where?: FiatCurrencyWhereInput
  }

  export type FiatCurrencyUpdateToOneWithWhereWithoutOrdersInput = {
    where?: FiatCurrencyWhereInput
    data: XOR<FiatCurrencyUpdateWithoutOrdersInput, FiatCurrencyUncheckedUpdateWithoutOrdersInput>
  }

  export type FiatCurrencyUpdateWithoutOrdersInput = {
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutFiat_currencyNestedInput
  }

  export type FiatCurrencyUncheckedUpdateWithoutOrdersInput = {
    fiat_id?: IntFieldUpdateOperationsInput | number
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutFiat_currencyNestedInput
  }

  export type TransactionUpsertWithWhereUniqueWithoutOrderInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutOrderInput, TransactionUncheckedUpdateWithoutOrderInput>
    create: XOR<TransactionCreateWithoutOrderInput, TransactionUncheckedCreateWithoutOrderInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutOrderInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutOrderInput, TransactionUncheckedUpdateWithoutOrderInput>
  }

  export type TransactionUpdateManyWithWhereWithoutOrderInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutOrderInput>
  }

  export type UserCreateWithoutTransactions_sentInput = {
    username: string
    email: string
    password_hash: string
    fiat_balance_thb: Decimal | DecimalJsLike | number | string
    fiat_balance_usd: Decimal | DecimalJsLike | number | string
    registration_date?: Date | string
    is_verified?: boolean
    wallets?: WalletCreateNestedManyWithoutUserInput
    payment_methods?: PaymentMethodCreateNestedManyWithoutUserInput
    orders_made?: OrderCreateNestedManyWithoutMakerInput
    orders_taken?: OrderCreateNestedManyWithoutTakerInput
    transactions_received?: TransactionCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutTransactions_sentInput = {
    user_id?: number
    username: string
    email: string
    password_hash: string
    fiat_balance_thb: Decimal | DecimalJsLike | number | string
    fiat_balance_usd: Decimal | DecimalJsLike | number | string
    registration_date?: Date | string
    is_verified?: boolean
    wallets?: WalletUncheckedCreateNestedManyWithoutUserInput
    payment_methods?: PaymentMethodUncheckedCreateNestedManyWithoutUserInput
    orders_made?: OrderUncheckedCreateNestedManyWithoutMakerInput
    orders_taken?: OrderUncheckedCreateNestedManyWithoutTakerInput
    transactions_received?: TransactionUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutTransactions_sentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactions_sentInput, UserUncheckedCreateWithoutTransactions_sentInput>
  }

  export type UserCreateWithoutTransactions_receivedInput = {
    username: string
    email: string
    password_hash: string
    fiat_balance_thb: Decimal | DecimalJsLike | number | string
    fiat_balance_usd: Decimal | DecimalJsLike | number | string
    registration_date?: Date | string
    is_verified?: boolean
    wallets?: WalletCreateNestedManyWithoutUserInput
    payment_methods?: PaymentMethodCreateNestedManyWithoutUserInput
    orders_made?: OrderCreateNestedManyWithoutMakerInput
    orders_taken?: OrderCreateNestedManyWithoutTakerInput
    transactions_sent?: TransactionCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutTransactions_receivedInput = {
    user_id?: number
    username: string
    email: string
    password_hash: string
    fiat_balance_thb: Decimal | DecimalJsLike | number | string
    fiat_balance_usd: Decimal | DecimalJsLike | number | string
    registration_date?: Date | string
    is_verified?: boolean
    wallets?: WalletUncheckedCreateNestedManyWithoutUserInput
    payment_methods?: PaymentMethodUncheckedCreateNestedManyWithoutUserInput
    orders_made?: OrderUncheckedCreateNestedManyWithoutMakerInput
    orders_taken?: OrderUncheckedCreateNestedManyWithoutTakerInput
    transactions_sent?: TransactionUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutTransactions_receivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactions_receivedInput, UserUncheckedCreateWithoutTransactions_receivedInput>
  }

  export type OrderCreateWithoutTransactionsInput = {
    order_type: string
    crypto_amount: Decimal | DecimalJsLike | number | string
    price_per_crypto: Decimal | DecimalJsLike | number | string
    total_fiat_amount: Decimal | DecimalJsLike | number | string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
    expiry_date?: Date | string | null
    maker: UserCreateNestedOneWithoutOrders_madeInput
    taker?: UserCreateNestedOneWithoutOrders_takenInput
    crypto_currency: CryptocurrencyCreateNestedOneWithoutOrdersInput
    fiat_currency: FiatCurrencyCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutTransactionsInput = {
    order_id?: number
    maker_user_id: number
    taker_user_id?: number | null
    order_type: string
    crypto_currency_id: number
    fiat_currency_id: number
    crypto_amount: Decimal | DecimalJsLike | number | string
    price_per_crypto: Decimal | DecimalJsLike | number | string
    total_fiat_amount: Decimal | DecimalJsLike | number | string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
    expiry_date?: Date | string | null
  }

  export type OrderCreateOrConnectWithoutTransactionsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutTransactionsInput, OrderUncheckedCreateWithoutTransactionsInput>
  }

  export type CryptocurrencyCreateWithoutTransactionsInput = {
    symbol: string
    name: string
    decimal_places: number
    created_at?: Date | string
    updated_at?: Date | string
    wallets?: WalletCreateNestedManyWithoutCryptocurrencyInput
    orders?: OrderCreateNestedManyWithoutCrypto_currencyInput
  }

  export type CryptocurrencyUncheckedCreateWithoutTransactionsInput = {
    currency_id?: number
    symbol: string
    name: string
    decimal_places: number
    created_at?: Date | string
    updated_at?: Date | string
    wallets?: WalletUncheckedCreateNestedManyWithoutCryptocurrencyInput
    orders?: OrderUncheckedCreateNestedManyWithoutCrypto_currencyInput
  }

  export type CryptocurrencyCreateOrConnectWithoutTransactionsInput = {
    where: CryptocurrencyWhereUniqueInput
    create: XOR<CryptocurrencyCreateWithoutTransactionsInput, CryptocurrencyUncheckedCreateWithoutTransactionsInput>
  }

  export type FiatCurrencyCreateWithoutTransactionsInput = {
    symbol: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    orders?: OrderCreateNestedManyWithoutFiat_currencyInput
  }

  export type FiatCurrencyUncheckedCreateWithoutTransactionsInput = {
    fiat_id?: number
    symbol: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutFiat_currencyInput
  }

  export type FiatCurrencyCreateOrConnectWithoutTransactionsInput = {
    where: FiatCurrencyWhereUniqueInput
    create: XOR<FiatCurrencyCreateWithoutTransactionsInput, FiatCurrencyUncheckedCreateWithoutTransactionsInput>
  }

  export type UserUpsertWithoutTransactions_sentInput = {
    update: XOR<UserUpdateWithoutTransactions_sentInput, UserUncheckedUpdateWithoutTransactions_sentInput>
    create: XOR<UserCreateWithoutTransactions_sentInput, UserUncheckedCreateWithoutTransactions_sentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactions_sentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactions_sentInput, UserUncheckedUpdateWithoutTransactions_sentInput>
  }

  export type UserUpdateWithoutTransactions_sentInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    fiat_balance_thb?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fiat_balance_usd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    registration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    wallets?: WalletUpdateManyWithoutUserNestedInput
    payment_methods?: PaymentMethodUpdateManyWithoutUserNestedInput
    orders_made?: OrderUpdateManyWithoutMakerNestedInput
    orders_taken?: OrderUpdateManyWithoutTakerNestedInput
    transactions_received?: TransactionUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactions_sentInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    fiat_balance_thb?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fiat_balance_usd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    registration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    wallets?: WalletUncheckedUpdateManyWithoutUserNestedInput
    payment_methods?: PaymentMethodUncheckedUpdateManyWithoutUserNestedInput
    orders_made?: OrderUncheckedUpdateManyWithoutMakerNestedInput
    orders_taken?: OrderUncheckedUpdateManyWithoutTakerNestedInput
    transactions_received?: TransactionUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserUpsertWithoutTransactions_receivedInput = {
    update: XOR<UserUpdateWithoutTransactions_receivedInput, UserUncheckedUpdateWithoutTransactions_receivedInput>
    create: XOR<UserCreateWithoutTransactions_receivedInput, UserUncheckedCreateWithoutTransactions_receivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactions_receivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactions_receivedInput, UserUncheckedUpdateWithoutTransactions_receivedInput>
  }

  export type UserUpdateWithoutTransactions_receivedInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    fiat_balance_thb?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fiat_balance_usd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    registration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    wallets?: WalletUpdateManyWithoutUserNestedInput
    payment_methods?: PaymentMethodUpdateManyWithoutUserNestedInput
    orders_made?: OrderUpdateManyWithoutMakerNestedInput
    orders_taken?: OrderUpdateManyWithoutTakerNestedInput
    transactions_sent?: TransactionUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactions_receivedInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    fiat_balance_thb?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fiat_balance_usd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    registration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    wallets?: WalletUncheckedUpdateManyWithoutUserNestedInput
    payment_methods?: PaymentMethodUncheckedUpdateManyWithoutUserNestedInput
    orders_made?: OrderUncheckedUpdateManyWithoutMakerNestedInput
    orders_taken?: OrderUncheckedUpdateManyWithoutTakerNestedInput
    transactions_sent?: TransactionUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type OrderUpsertWithoutTransactionsInput = {
    update: XOR<OrderUpdateWithoutTransactionsInput, OrderUncheckedUpdateWithoutTransactionsInput>
    create: XOR<OrderCreateWithoutTransactionsInput, OrderUncheckedCreateWithoutTransactionsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutTransactionsInput, OrderUncheckedUpdateWithoutTransactionsInput>
  }

  export type OrderUpdateWithoutTransactionsInput = {
    order_type?: StringFieldUpdateOperationsInput | string
    crypto_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_crypto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_fiat_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maker?: UserUpdateOneRequiredWithoutOrders_madeNestedInput
    taker?: UserUpdateOneWithoutOrders_takenNestedInput
    crypto_currency?: CryptocurrencyUpdateOneRequiredWithoutOrdersNestedInput
    fiat_currency?: FiatCurrencyUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutTransactionsInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    maker_user_id?: IntFieldUpdateOperationsInput | number
    taker_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    order_type?: StringFieldUpdateOperationsInput | string
    crypto_currency_id?: IntFieldUpdateOperationsInput | number
    fiat_currency_id?: IntFieldUpdateOperationsInput | number
    crypto_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_crypto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_fiat_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CryptocurrencyUpsertWithoutTransactionsInput = {
    update: XOR<CryptocurrencyUpdateWithoutTransactionsInput, CryptocurrencyUncheckedUpdateWithoutTransactionsInput>
    create: XOR<CryptocurrencyCreateWithoutTransactionsInput, CryptocurrencyUncheckedCreateWithoutTransactionsInput>
    where?: CryptocurrencyWhereInput
  }

  export type CryptocurrencyUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: CryptocurrencyWhereInput
    data: XOR<CryptocurrencyUpdateWithoutTransactionsInput, CryptocurrencyUncheckedUpdateWithoutTransactionsInput>
  }

  export type CryptocurrencyUpdateWithoutTransactionsInput = {
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    decimal_places?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    wallets?: WalletUpdateManyWithoutCryptocurrencyNestedInput
    orders?: OrderUpdateManyWithoutCrypto_currencyNestedInput
  }

  export type CryptocurrencyUncheckedUpdateWithoutTransactionsInput = {
    currency_id?: IntFieldUpdateOperationsInput | number
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    decimal_places?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    wallets?: WalletUncheckedUpdateManyWithoutCryptocurrencyNestedInput
    orders?: OrderUncheckedUpdateManyWithoutCrypto_currencyNestedInput
  }

  export type FiatCurrencyUpsertWithoutTransactionsInput = {
    update: XOR<FiatCurrencyUpdateWithoutTransactionsInput, FiatCurrencyUncheckedUpdateWithoutTransactionsInput>
    create: XOR<FiatCurrencyCreateWithoutTransactionsInput, FiatCurrencyUncheckedCreateWithoutTransactionsInput>
    where?: FiatCurrencyWhereInput
  }

  export type FiatCurrencyUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: FiatCurrencyWhereInput
    data: XOR<FiatCurrencyUpdateWithoutTransactionsInput, FiatCurrencyUncheckedUpdateWithoutTransactionsInput>
  }

  export type FiatCurrencyUpdateWithoutTransactionsInput = {
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutFiat_currencyNestedInput
  }

  export type FiatCurrencyUncheckedUpdateWithoutTransactionsInput = {
    fiat_id?: IntFieldUpdateOperationsInput | number
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutFiat_currencyNestedInput
  }

  export type UserCreateWithoutPayment_methodsInput = {
    username: string
    email: string
    password_hash: string
    fiat_balance_thb: Decimal | DecimalJsLike | number | string
    fiat_balance_usd: Decimal | DecimalJsLike | number | string
    registration_date?: Date | string
    is_verified?: boolean
    wallets?: WalletCreateNestedManyWithoutUserInput
    orders_made?: OrderCreateNestedManyWithoutMakerInput
    orders_taken?: OrderCreateNestedManyWithoutTakerInput
    transactions_sent?: TransactionCreateNestedManyWithoutSenderInput
    transactions_received?: TransactionCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutPayment_methodsInput = {
    user_id?: number
    username: string
    email: string
    password_hash: string
    fiat_balance_thb: Decimal | DecimalJsLike | number | string
    fiat_balance_usd: Decimal | DecimalJsLike | number | string
    registration_date?: Date | string
    is_verified?: boolean
    wallets?: WalletUncheckedCreateNestedManyWithoutUserInput
    orders_made?: OrderUncheckedCreateNestedManyWithoutMakerInput
    orders_taken?: OrderUncheckedCreateNestedManyWithoutTakerInput
    transactions_sent?: TransactionUncheckedCreateNestedManyWithoutSenderInput
    transactions_received?: TransactionUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutPayment_methodsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPayment_methodsInput, UserUncheckedCreateWithoutPayment_methodsInput>
  }

  export type UserUpsertWithoutPayment_methodsInput = {
    update: XOR<UserUpdateWithoutPayment_methodsInput, UserUncheckedUpdateWithoutPayment_methodsInput>
    create: XOR<UserCreateWithoutPayment_methodsInput, UserUncheckedCreateWithoutPayment_methodsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPayment_methodsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPayment_methodsInput, UserUncheckedUpdateWithoutPayment_methodsInput>
  }

  export type UserUpdateWithoutPayment_methodsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    fiat_balance_thb?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fiat_balance_usd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    registration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    wallets?: WalletUpdateManyWithoutUserNestedInput
    orders_made?: OrderUpdateManyWithoutMakerNestedInput
    orders_taken?: OrderUpdateManyWithoutTakerNestedInput
    transactions_sent?: TransactionUpdateManyWithoutSenderNestedInput
    transactions_received?: TransactionUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutPayment_methodsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    fiat_balance_thb?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fiat_balance_usd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    registration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    wallets?: WalletUncheckedUpdateManyWithoutUserNestedInput
    orders_made?: OrderUncheckedUpdateManyWithoutMakerNestedInput
    orders_taken?: OrderUncheckedUpdateManyWithoutTakerNestedInput
    transactions_sent?: TransactionUncheckedUpdateManyWithoutSenderNestedInput
    transactions_received?: TransactionUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type WalletCreateManyUserInput = {
    wallet_id?: number
    currency_id: number
    balance: Decimal | DecimalJsLike | number | string
    wallet_address: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PaymentMethodCreateManyUserInput = {
    payment_method_id?: number
    method_type: string
    details: JsonNullValueInput | InputJsonValue
    is_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrderCreateManyMakerInput = {
    order_id?: number
    taker_user_id?: number | null
    order_type: string
    crypto_currency_id: number
    fiat_currency_id: number
    crypto_amount: Decimal | DecimalJsLike | number | string
    price_per_crypto: Decimal | DecimalJsLike | number | string
    total_fiat_amount: Decimal | DecimalJsLike | number | string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
    expiry_date?: Date | string | null
  }

  export type OrderCreateManyTakerInput = {
    order_id?: number
    maker_user_id: number
    order_type: string
    crypto_currency_id: number
    fiat_currency_id: number
    crypto_amount: Decimal | DecimalJsLike | number | string
    price_per_crypto: Decimal | DecimalJsLike | number | string
    total_fiat_amount: Decimal | DecimalJsLike | number | string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
    expiry_date?: Date | string | null
  }

  export type TransactionCreateManySenderInput = {
    transaction_id?: number
    receiver_user_id?: number | null
    order_id?: number | null
    transaction_type: string
    crypto_currency_id?: number | null
    fiat_currency_id?: number | null
    amount: Decimal | DecimalJsLike | number | string
    transaction_fee: Decimal | DecimalJsLike | number | string
    status: string
    transaction_date?: Date | string
    external_address?: string | null
    tx_hash?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TransactionCreateManyReceiverInput = {
    transaction_id?: number
    sender_user_id?: number | null
    order_id?: number | null
    transaction_type: string
    crypto_currency_id?: number | null
    fiat_currency_id?: number | null
    amount: Decimal | DecimalJsLike | number | string
    transaction_fee: Decimal | DecimalJsLike | number | string
    status: string
    transaction_date?: Date | string
    external_address?: string | null
    tx_hash?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WalletUpdateWithoutUserInput = {
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wallet_address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cryptocurrency?: CryptocurrencyUpdateOneRequiredWithoutWalletsNestedInput
  }

  export type WalletUncheckedUpdateWithoutUserInput = {
    wallet_id?: IntFieldUpdateOperationsInput | number
    currency_id?: IntFieldUpdateOperationsInput | number
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wallet_address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletUncheckedUpdateManyWithoutUserInput = {
    wallet_id?: IntFieldUpdateOperationsInput | number
    currency_id?: IntFieldUpdateOperationsInput | number
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wallet_address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentMethodUpdateWithoutUserInput = {
    method_type?: StringFieldUpdateOperationsInput | string
    details?: JsonNullValueInput | InputJsonValue
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentMethodUncheckedUpdateWithoutUserInput = {
    payment_method_id?: IntFieldUpdateOperationsInput | number
    method_type?: StringFieldUpdateOperationsInput | string
    details?: JsonNullValueInput | InputJsonValue
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentMethodUncheckedUpdateManyWithoutUserInput = {
    payment_method_id?: IntFieldUpdateOperationsInput | number
    method_type?: StringFieldUpdateOperationsInput | string
    details?: JsonNullValueInput | InputJsonValue
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpdateWithoutMakerInput = {
    order_type?: StringFieldUpdateOperationsInput | string
    crypto_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_crypto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_fiat_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    taker?: UserUpdateOneWithoutOrders_takenNestedInput
    crypto_currency?: CryptocurrencyUpdateOneRequiredWithoutOrdersNestedInput
    fiat_currency?: FiatCurrencyUpdateOneRequiredWithoutOrdersNestedInput
    transactions?: TransactionUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutMakerInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    taker_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    order_type?: StringFieldUpdateOperationsInput | string
    crypto_currency_id?: IntFieldUpdateOperationsInput | number
    fiat_currency_id?: IntFieldUpdateOperationsInput | number
    crypto_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_crypto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_fiat_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: TransactionUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutMakerInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    taker_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    order_type?: StringFieldUpdateOperationsInput | string
    crypto_currency_id?: IntFieldUpdateOperationsInput | number
    fiat_currency_id?: IntFieldUpdateOperationsInput | number
    crypto_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_crypto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_fiat_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderUpdateWithoutTakerInput = {
    order_type?: StringFieldUpdateOperationsInput | string
    crypto_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_crypto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_fiat_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maker?: UserUpdateOneRequiredWithoutOrders_madeNestedInput
    crypto_currency?: CryptocurrencyUpdateOneRequiredWithoutOrdersNestedInput
    fiat_currency?: FiatCurrencyUpdateOneRequiredWithoutOrdersNestedInput
    transactions?: TransactionUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutTakerInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    maker_user_id?: IntFieldUpdateOperationsInput | number
    order_type?: StringFieldUpdateOperationsInput | string
    crypto_currency_id?: IntFieldUpdateOperationsInput | number
    fiat_currency_id?: IntFieldUpdateOperationsInput | number
    crypto_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_crypto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_fiat_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: TransactionUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutTakerInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    maker_user_id?: IntFieldUpdateOperationsInput | number
    order_type?: StringFieldUpdateOperationsInput | string
    crypto_currency_id?: IntFieldUpdateOperationsInput | number
    fiat_currency_id?: IntFieldUpdateOperationsInput | number
    crypto_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_crypto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_fiat_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionUpdateWithoutSenderInput = {
    transaction_type?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transaction_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    external_address?: NullableStringFieldUpdateOperationsInput | string | null
    tx_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: UserUpdateOneWithoutTransactions_receivedNestedInput
    order?: OrderUpdateOneWithoutTransactionsNestedInput
    crypto_currency?: CryptocurrencyUpdateOneWithoutTransactionsNestedInput
    fiat_currency?: FiatCurrencyUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutSenderInput = {
    transaction_id?: IntFieldUpdateOperationsInput | number
    receiver_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    order_id?: NullableIntFieldUpdateOperationsInput | number | null
    transaction_type?: StringFieldUpdateOperationsInput | string
    crypto_currency_id?: NullableIntFieldUpdateOperationsInput | number | null
    fiat_currency_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transaction_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    external_address?: NullableStringFieldUpdateOperationsInput | string | null
    tx_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutSenderInput = {
    transaction_id?: IntFieldUpdateOperationsInput | number
    receiver_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    order_id?: NullableIntFieldUpdateOperationsInput | number | null
    transaction_type?: StringFieldUpdateOperationsInput | string
    crypto_currency_id?: NullableIntFieldUpdateOperationsInput | number | null
    fiat_currency_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transaction_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    external_address?: NullableStringFieldUpdateOperationsInput | string | null
    tx_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpdateWithoutReceiverInput = {
    transaction_type?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transaction_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    external_address?: NullableStringFieldUpdateOperationsInput | string | null
    tx_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneWithoutTransactions_sentNestedInput
    order?: OrderUpdateOneWithoutTransactionsNestedInput
    crypto_currency?: CryptocurrencyUpdateOneWithoutTransactionsNestedInput
    fiat_currency?: FiatCurrencyUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutReceiverInput = {
    transaction_id?: IntFieldUpdateOperationsInput | number
    sender_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    order_id?: NullableIntFieldUpdateOperationsInput | number | null
    transaction_type?: StringFieldUpdateOperationsInput | string
    crypto_currency_id?: NullableIntFieldUpdateOperationsInput | number | null
    fiat_currency_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transaction_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    external_address?: NullableStringFieldUpdateOperationsInput | string | null
    tx_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutReceiverInput = {
    transaction_id?: IntFieldUpdateOperationsInput | number
    sender_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    order_id?: NullableIntFieldUpdateOperationsInput | number | null
    transaction_type?: StringFieldUpdateOperationsInput | string
    crypto_currency_id?: NullableIntFieldUpdateOperationsInput | number | null
    fiat_currency_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transaction_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    external_address?: NullableStringFieldUpdateOperationsInput | string | null
    tx_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletCreateManyCryptocurrencyInput = {
    wallet_id?: number
    user_id: number
    balance: Decimal | DecimalJsLike | number | string
    wallet_address: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrderCreateManyCrypto_currencyInput = {
    order_id?: number
    maker_user_id: number
    taker_user_id?: number | null
    order_type: string
    fiat_currency_id: number
    crypto_amount: Decimal | DecimalJsLike | number | string
    price_per_crypto: Decimal | DecimalJsLike | number | string
    total_fiat_amount: Decimal | DecimalJsLike | number | string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
    expiry_date?: Date | string | null
  }

  export type TransactionCreateManyCrypto_currencyInput = {
    transaction_id?: number
    sender_user_id?: number | null
    receiver_user_id?: number | null
    order_id?: number | null
    transaction_type: string
    fiat_currency_id?: number | null
    amount: Decimal | DecimalJsLike | number | string
    transaction_fee: Decimal | DecimalJsLike | number | string
    status: string
    transaction_date?: Date | string
    external_address?: string | null
    tx_hash?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WalletUpdateWithoutCryptocurrencyInput = {
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wallet_address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWalletsNestedInput
  }

  export type WalletUncheckedUpdateWithoutCryptocurrencyInput = {
    wallet_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wallet_address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletUncheckedUpdateManyWithoutCryptocurrencyInput = {
    wallet_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wallet_address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpdateWithoutCrypto_currencyInput = {
    order_type?: StringFieldUpdateOperationsInput | string
    crypto_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_crypto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_fiat_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maker?: UserUpdateOneRequiredWithoutOrders_madeNestedInput
    taker?: UserUpdateOneWithoutOrders_takenNestedInput
    fiat_currency?: FiatCurrencyUpdateOneRequiredWithoutOrdersNestedInput
    transactions?: TransactionUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutCrypto_currencyInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    maker_user_id?: IntFieldUpdateOperationsInput | number
    taker_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    order_type?: StringFieldUpdateOperationsInput | string
    fiat_currency_id?: IntFieldUpdateOperationsInput | number
    crypto_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_crypto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_fiat_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: TransactionUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutCrypto_currencyInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    maker_user_id?: IntFieldUpdateOperationsInput | number
    taker_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    order_type?: StringFieldUpdateOperationsInput | string
    fiat_currency_id?: IntFieldUpdateOperationsInput | number
    crypto_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_crypto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_fiat_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionUpdateWithoutCrypto_currencyInput = {
    transaction_type?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transaction_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    external_address?: NullableStringFieldUpdateOperationsInput | string | null
    tx_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneWithoutTransactions_sentNestedInput
    receiver?: UserUpdateOneWithoutTransactions_receivedNestedInput
    order?: OrderUpdateOneWithoutTransactionsNestedInput
    fiat_currency?: FiatCurrencyUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutCrypto_currencyInput = {
    transaction_id?: IntFieldUpdateOperationsInput | number
    sender_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    receiver_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    order_id?: NullableIntFieldUpdateOperationsInput | number | null
    transaction_type?: StringFieldUpdateOperationsInput | string
    fiat_currency_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transaction_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    external_address?: NullableStringFieldUpdateOperationsInput | string | null
    tx_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutCrypto_currencyInput = {
    transaction_id?: IntFieldUpdateOperationsInput | number
    sender_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    receiver_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    order_id?: NullableIntFieldUpdateOperationsInput | number | null
    transaction_type?: StringFieldUpdateOperationsInput | string
    fiat_currency_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transaction_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    external_address?: NullableStringFieldUpdateOperationsInput | string | null
    tx_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyFiat_currencyInput = {
    order_id?: number
    maker_user_id: number
    taker_user_id?: number | null
    order_type: string
    crypto_currency_id: number
    crypto_amount: Decimal | DecimalJsLike | number | string
    price_per_crypto: Decimal | DecimalJsLike | number | string
    total_fiat_amount: Decimal | DecimalJsLike | number | string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
    expiry_date?: Date | string | null
  }

  export type TransactionCreateManyFiat_currencyInput = {
    transaction_id?: number
    sender_user_id?: number | null
    receiver_user_id?: number | null
    order_id?: number | null
    transaction_type: string
    crypto_currency_id?: number | null
    amount: Decimal | DecimalJsLike | number | string
    transaction_fee: Decimal | DecimalJsLike | number | string
    status: string
    transaction_date?: Date | string
    external_address?: string | null
    tx_hash?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrderUpdateWithoutFiat_currencyInput = {
    order_type?: StringFieldUpdateOperationsInput | string
    crypto_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_crypto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_fiat_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maker?: UserUpdateOneRequiredWithoutOrders_madeNestedInput
    taker?: UserUpdateOneWithoutOrders_takenNestedInput
    crypto_currency?: CryptocurrencyUpdateOneRequiredWithoutOrdersNestedInput
    transactions?: TransactionUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutFiat_currencyInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    maker_user_id?: IntFieldUpdateOperationsInput | number
    taker_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    order_type?: StringFieldUpdateOperationsInput | string
    crypto_currency_id?: IntFieldUpdateOperationsInput | number
    crypto_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_crypto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_fiat_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: TransactionUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutFiat_currencyInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    maker_user_id?: IntFieldUpdateOperationsInput | number
    taker_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    order_type?: StringFieldUpdateOperationsInput | string
    crypto_currency_id?: IntFieldUpdateOperationsInput | number
    crypto_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_crypto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_fiat_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expiry_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionUpdateWithoutFiat_currencyInput = {
    transaction_type?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transaction_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    external_address?: NullableStringFieldUpdateOperationsInput | string | null
    tx_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneWithoutTransactions_sentNestedInput
    receiver?: UserUpdateOneWithoutTransactions_receivedNestedInput
    order?: OrderUpdateOneWithoutTransactionsNestedInput
    crypto_currency?: CryptocurrencyUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutFiat_currencyInput = {
    transaction_id?: IntFieldUpdateOperationsInput | number
    sender_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    receiver_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    order_id?: NullableIntFieldUpdateOperationsInput | number | null
    transaction_type?: StringFieldUpdateOperationsInput | string
    crypto_currency_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transaction_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    external_address?: NullableStringFieldUpdateOperationsInput | string | null
    tx_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutFiat_currencyInput = {
    transaction_id?: IntFieldUpdateOperationsInput | number
    sender_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    receiver_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    order_id?: NullableIntFieldUpdateOperationsInput | number | null
    transaction_type?: StringFieldUpdateOperationsInput | string
    crypto_currency_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transaction_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    external_address?: NullableStringFieldUpdateOperationsInput | string | null
    tx_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyOrderInput = {
    transaction_id?: number
    sender_user_id?: number | null
    receiver_user_id?: number | null
    transaction_type: string
    crypto_currency_id?: number | null
    fiat_currency_id?: number | null
    amount: Decimal | DecimalJsLike | number | string
    transaction_fee: Decimal | DecimalJsLike | number | string
    status: string
    transaction_date?: Date | string
    external_address?: string | null
    tx_hash?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TransactionUpdateWithoutOrderInput = {
    transaction_type?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transaction_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    external_address?: NullableStringFieldUpdateOperationsInput | string | null
    tx_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneWithoutTransactions_sentNestedInput
    receiver?: UserUpdateOneWithoutTransactions_receivedNestedInput
    crypto_currency?: CryptocurrencyUpdateOneWithoutTransactionsNestedInput
    fiat_currency?: FiatCurrencyUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutOrderInput = {
    transaction_id?: IntFieldUpdateOperationsInput | number
    sender_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    receiver_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    transaction_type?: StringFieldUpdateOperationsInput | string
    crypto_currency_id?: NullableIntFieldUpdateOperationsInput | number | null
    fiat_currency_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transaction_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    external_address?: NullableStringFieldUpdateOperationsInput | string | null
    tx_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutOrderInput = {
    transaction_id?: IntFieldUpdateOperationsInput | number
    sender_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    receiver_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    transaction_type?: StringFieldUpdateOperationsInput | string
    crypto_currency_id?: NullableIntFieldUpdateOperationsInput | number | null
    fiat_currency_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transaction_fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    external_address?: NullableStringFieldUpdateOperationsInput | string | null
    tx_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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