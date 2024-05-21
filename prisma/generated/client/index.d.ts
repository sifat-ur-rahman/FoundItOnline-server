
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
 * Model LostItem
 * 
 */
export type LostItem = $Result.DefaultSelection<Prisma.$LostItemPayload>
/**
 * Model FoundItem
 * 
 */
export type FoundItem = $Result.DefaultSelection<Prisma.$FoundItemPayload>
/**
 * Model Claim
 * 
 */
export type Claim = $Result.DefaultSelection<Prisma.$ClaimPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserStatus: {
  ACTIVE: 'ACTIVE',
  DEACTIVATED: 'DEACTIVATED'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const ItemStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  AVAILABLE: 'AVAILABLE'
};

export type ItemStatus = (typeof ItemStatus)[keyof typeof ItemStatus]


export const ClaimStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type ClaimStatus = (typeof ClaimStatus)[keyof typeof ClaimStatus]

}

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type ItemStatus = $Enums.ItemStatus

export const ItemStatus: typeof $Enums.ItemStatus

export type ClaimStatus = $Enums.ClaimStatus

export const ClaimStatus: typeof $Enums.ClaimStatus

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
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.lostItem`: Exposes CRUD operations for the **LostItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LostItems
    * const lostItems = await prisma.lostItem.findMany()
    * ```
    */
  get lostItem(): Prisma.LostItemDelegate<ExtArgs>;

  /**
   * `prisma.foundItem`: Exposes CRUD operations for the **FoundItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FoundItems
    * const foundItems = await prisma.foundItem.findMany()
    * ```
    */
  get foundItem(): Prisma.FoundItemDelegate<ExtArgs>;

  /**
   * `prisma.claim`: Exposes CRUD operations for the **Claim** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Claims
    * const claims = await prisma.claim.findMany()
    * ```
    */
  get claim(): Prisma.ClaimDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.14.0
   * Query Engine version: efd2449663b3d73d637ea1fd226bafbcf45b3102
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    LostItem: 'LostItem',
    FoundItem: 'FoundItem',
    Claim: 'Claim'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'lostItem' | 'foundItem' | 'claim'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      LostItem: {
        payload: Prisma.$LostItemPayload<ExtArgs>
        fields: Prisma.LostItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LostItemFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LostItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LostItemFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LostItemPayload>
          }
          findFirst: {
            args: Prisma.LostItemFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LostItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LostItemFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LostItemPayload>
          }
          findMany: {
            args: Prisma.LostItemFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LostItemPayload>[]
          }
          create: {
            args: Prisma.LostItemCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LostItemPayload>
          }
          createMany: {
            args: Prisma.LostItemCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.LostItemDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LostItemPayload>
          }
          update: {
            args: Prisma.LostItemUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LostItemPayload>
          }
          deleteMany: {
            args: Prisma.LostItemDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LostItemUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LostItemUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LostItemPayload>
          }
          aggregate: {
            args: Prisma.LostItemAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLostItem>
          }
          groupBy: {
            args: Prisma.LostItemGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LostItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.LostItemCountArgs<ExtArgs>,
            result: $Utils.Optional<LostItemCountAggregateOutputType> | number
          }
        }
      }
      FoundItem: {
        payload: Prisma.$FoundItemPayload<ExtArgs>
        fields: Prisma.FoundItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FoundItemFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FoundItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FoundItemFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FoundItemPayload>
          }
          findFirst: {
            args: Prisma.FoundItemFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FoundItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FoundItemFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FoundItemPayload>
          }
          findMany: {
            args: Prisma.FoundItemFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FoundItemPayload>[]
          }
          create: {
            args: Prisma.FoundItemCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FoundItemPayload>
          }
          createMany: {
            args: Prisma.FoundItemCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FoundItemDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FoundItemPayload>
          }
          update: {
            args: Prisma.FoundItemUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FoundItemPayload>
          }
          deleteMany: {
            args: Prisma.FoundItemDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FoundItemUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FoundItemUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FoundItemPayload>
          }
          aggregate: {
            args: Prisma.FoundItemAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFoundItem>
          }
          groupBy: {
            args: Prisma.FoundItemGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FoundItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.FoundItemCountArgs<ExtArgs>,
            result: $Utils.Optional<FoundItemCountAggregateOutputType> | number
          }
        }
      }
      Claim: {
        payload: Prisma.$ClaimPayload<ExtArgs>
        fields: Prisma.ClaimFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClaimFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClaimFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>
          }
          findFirst: {
            args: Prisma.ClaimFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClaimFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>
          }
          findMany: {
            args: Prisma.ClaimFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>[]
          }
          create: {
            args: Prisma.ClaimCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>
          }
          createMany: {
            args: Prisma.ClaimCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ClaimDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>
          }
          update: {
            args: Prisma.ClaimUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>
          }
          deleteMany: {
            args: Prisma.ClaimDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ClaimUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ClaimUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>
          }
          aggregate: {
            args: Prisma.ClaimAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateClaim>
          }
          groupBy: {
            args: Prisma.ClaimGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ClaimGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClaimCountArgs<ExtArgs>,
            result: $Utils.Optional<ClaimCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    lostItems: number
    foundItems: number
    claimRequests: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lostItems?: boolean | UserCountOutputTypeCountLostItemsArgs
    foundItems?: boolean | UserCountOutputTypeCountFoundItemsArgs
    claimRequests?: boolean | UserCountOutputTypeCountClaimRequestsArgs
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
  export type UserCountOutputTypeCountLostItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LostItemWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFoundItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoundItemWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountClaimRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClaimWhereInput
  }


  /**
   * Count Type LostItemCountOutputType
   */

  export type LostItemCountOutputType = {
    claimRequests: number
  }

  export type LostItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    claimRequests?: boolean | LostItemCountOutputTypeCountClaimRequestsArgs
  }

  // Custom InputTypes
  /**
   * LostItemCountOutputType without action
   */
  export type LostItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LostItemCountOutputType
     */
    select?: LostItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LostItemCountOutputType without action
   */
  export type LostItemCountOutputTypeCountClaimRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClaimWhereInput
  }


  /**
   * Count Type FoundItemCountOutputType
   */

  export type FoundItemCountOutputType = {
    claims: number
  }

  export type FoundItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    claims?: boolean | FoundItemCountOutputTypeCountClaimsArgs
  }

  // Custom InputTypes
  /**
   * FoundItemCountOutputType without action
   */
  export type FoundItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoundItemCountOutputType
     */
    select?: FoundItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FoundItemCountOutputType without action
   */
  export type FoundItemCountOutputTypeCountClaimsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClaimWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    username: string | null
    email: string | null
    password: string | null
    role: string | null
    status: $Enums.UserStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    username: string | null
    email: string | null
    password: string | null
    role: string | null
    status: $Enums.UserStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    username: number
    email: number
    password: number
    role: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    username?: true
    email?: true
    password?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    username?: true
    email?: true
    password?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    username?: true
    email?: true
    password?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    username: string
    email: string
    password: string
    role: string | null
    status: $Enums.UserStatus
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    id?: boolean
    name?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lostItems?: boolean | User$lostItemsArgs<ExtArgs>
    foundItems?: boolean | User$foundItemsArgs<ExtArgs>
    claimRequests?: boolean | User$claimRequestsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lostItems?: boolean | User$lostItemsArgs<ExtArgs>
    foundItems?: boolean | User$foundItemsArgs<ExtArgs>
    claimRequests?: boolean | User$claimRequestsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      lostItems: Prisma.$LostItemPayload<ExtArgs>[]
      foundItems: Prisma.$FoundItemPayload<ExtArgs>[]
      claimRequests: Prisma.$ClaimPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      username: string
      email: string
      password: string
      role: string | null
      status: $Enums.UserStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

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
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

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
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

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
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    lostItems<T extends User$lostItemsArgs<ExtArgs> = {}>(args?: Subset<T, User$lostItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LostItemPayload<ExtArgs>, T, 'findMany'> | Null>;

    foundItems<T extends User$foundItemsArgs<ExtArgs> = {}>(args?: Subset<T, User$foundItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoundItemPayload<ExtArgs>, T, 'findMany'> | Null>;

    claimRequests<T extends User$claimRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$claimRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'UserStatus'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
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
  }

  /**
   * User.lostItems
   */
  export type User$lostItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LostItem
     */
    select?: LostItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LostItemInclude<ExtArgs> | null
    where?: LostItemWhereInput
    orderBy?: LostItemOrderByWithRelationInput | LostItemOrderByWithRelationInput[]
    cursor?: LostItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LostItemScalarFieldEnum | LostItemScalarFieldEnum[]
  }

  /**
   * User.foundItems
   */
  export type User$foundItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoundItem
     */
    select?: FoundItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoundItemInclude<ExtArgs> | null
    where?: FoundItemWhereInput
    orderBy?: FoundItemOrderByWithRelationInput | FoundItemOrderByWithRelationInput[]
    cursor?: FoundItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FoundItemScalarFieldEnum | FoundItemScalarFieldEnum[]
  }

  /**
   * User.claimRequests
   */
  export type User$claimRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    where?: ClaimWhereInput
    orderBy?: ClaimOrderByWithRelationInput | ClaimOrderByWithRelationInput[]
    cursor?: ClaimWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClaimScalarFieldEnum | ClaimScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model LostItem
   */

  export type AggregateLostItem = {
    _count: LostItemCountAggregateOutputType | null
    _min: LostItemMinAggregateOutputType | null
    _max: LostItemMaxAggregateOutputType | null
  }

  export type LostItemMinAggregateOutputType = {
    id: string | null
    category: string | null
    description: string | null
    dateLost: Date | null
    locationLost: string | null
    contactPhone: string | null
    contactEmail: string | null
    images: string | null
    status: $Enums.ItemStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type LostItemMaxAggregateOutputType = {
    id: string | null
    category: string | null
    description: string | null
    dateLost: Date | null
    locationLost: string | null
    contactPhone: string | null
    contactEmail: string | null
    images: string | null
    status: $Enums.ItemStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type LostItemCountAggregateOutputType = {
    id: number
    category: number
    description: number
    dateLost: number
    locationLost: number
    contactPhone: number
    contactEmail: number
    images: number
    status: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type LostItemMinAggregateInputType = {
    id?: true
    category?: true
    description?: true
    dateLost?: true
    locationLost?: true
    contactPhone?: true
    contactEmail?: true
    images?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type LostItemMaxAggregateInputType = {
    id?: true
    category?: true
    description?: true
    dateLost?: true
    locationLost?: true
    contactPhone?: true
    contactEmail?: true
    images?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type LostItemCountAggregateInputType = {
    id?: true
    category?: true
    description?: true
    dateLost?: true
    locationLost?: true
    contactPhone?: true
    contactEmail?: true
    images?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type LostItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LostItem to aggregate.
     */
    where?: LostItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LostItems to fetch.
     */
    orderBy?: LostItemOrderByWithRelationInput | LostItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LostItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LostItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LostItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LostItems
    **/
    _count?: true | LostItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LostItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LostItemMaxAggregateInputType
  }

  export type GetLostItemAggregateType<T extends LostItemAggregateArgs> = {
        [P in keyof T & keyof AggregateLostItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLostItem[P]>
      : GetScalarType<T[P], AggregateLostItem[P]>
  }




  export type LostItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LostItemWhereInput
    orderBy?: LostItemOrderByWithAggregationInput | LostItemOrderByWithAggregationInput[]
    by: LostItemScalarFieldEnum[] | LostItemScalarFieldEnum
    having?: LostItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LostItemCountAggregateInputType | true
    _min?: LostItemMinAggregateInputType
    _max?: LostItemMaxAggregateInputType
  }

  export type LostItemGroupByOutputType = {
    id: string
    category: string
    description: string
    dateLost: Date | null
    locationLost: string | null
    contactPhone: string | null
    contactEmail: string | null
    images: string | null
    status: $Enums.ItemStatus
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: LostItemCountAggregateOutputType | null
    _min: LostItemMinAggregateOutputType | null
    _max: LostItemMaxAggregateOutputType | null
  }

  type GetLostItemGroupByPayload<T extends LostItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LostItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LostItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LostItemGroupByOutputType[P]>
            : GetScalarType<T[P], LostItemGroupByOutputType[P]>
        }
      >
    >


  export type LostItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    description?: boolean
    dateLost?: boolean
    locationLost?: boolean
    contactPhone?: boolean
    contactEmail?: boolean
    images?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    claimRequests?: boolean | LostItem$claimRequestsArgs<ExtArgs>
    _count?: boolean | LostItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lostItem"]>

  export type LostItemSelectScalar = {
    id?: boolean
    category?: boolean
    description?: boolean
    dateLost?: boolean
    locationLost?: boolean
    contactPhone?: boolean
    contactEmail?: boolean
    images?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }


  export type LostItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    claimRequests?: boolean | LostItem$claimRequestsArgs<ExtArgs>
    _count?: boolean | LostItemCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $LostItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LostItem"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      claimRequests: Prisma.$ClaimPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      category: string
      description: string
      dateLost: Date | null
      locationLost: string | null
      contactPhone: string | null
      contactEmail: string | null
      images: string | null
      status: $Enums.ItemStatus
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["lostItem"]>
    composites: {}
  }


  type LostItemGetPayload<S extends boolean | null | undefined | LostItemDefaultArgs> = $Result.GetResult<Prisma.$LostItemPayload, S>

  type LostItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LostItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LostItemCountAggregateInputType | true
    }

  export interface LostItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LostItem'], meta: { name: 'LostItem' } }
    /**
     * Find zero or one LostItem that matches the filter.
     * @param {LostItemFindUniqueArgs} args - Arguments to find a LostItem
     * @example
     * // Get one LostItem
     * const lostItem = await prisma.lostItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LostItemFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LostItemFindUniqueArgs<ExtArgs>>
    ): Prisma__LostItemClient<$Result.GetResult<Prisma.$LostItemPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one LostItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LostItemFindUniqueOrThrowArgs} args - Arguments to find a LostItem
     * @example
     * // Get one LostItem
     * const lostItem = await prisma.lostItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LostItemFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LostItemFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LostItemClient<$Result.GetResult<Prisma.$LostItemPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first LostItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LostItemFindFirstArgs} args - Arguments to find a LostItem
     * @example
     * // Get one LostItem
     * const lostItem = await prisma.lostItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LostItemFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LostItemFindFirstArgs<ExtArgs>>
    ): Prisma__LostItemClient<$Result.GetResult<Prisma.$LostItemPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first LostItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LostItemFindFirstOrThrowArgs} args - Arguments to find a LostItem
     * @example
     * // Get one LostItem
     * const lostItem = await prisma.lostItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LostItemFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LostItemFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LostItemClient<$Result.GetResult<Prisma.$LostItemPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more LostItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LostItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LostItems
     * const lostItems = await prisma.lostItem.findMany()
     * 
     * // Get first 10 LostItems
     * const lostItems = await prisma.lostItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lostItemWithIdOnly = await prisma.lostItem.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LostItemFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LostItemFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LostItemPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a LostItem.
     * @param {LostItemCreateArgs} args - Arguments to create a LostItem.
     * @example
     * // Create one LostItem
     * const LostItem = await prisma.lostItem.create({
     *   data: {
     *     // ... data to create a LostItem
     *   }
     * })
     * 
    **/
    create<T extends LostItemCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LostItemCreateArgs<ExtArgs>>
    ): Prisma__LostItemClient<$Result.GetResult<Prisma.$LostItemPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many LostItems.
     * @param {LostItemCreateManyArgs} args - Arguments to create many LostItems.
     * @example
     * // Create many LostItems
     * const lostItem = await prisma.lostItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends LostItemCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LostItemCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LostItem.
     * @param {LostItemDeleteArgs} args - Arguments to delete one LostItem.
     * @example
     * // Delete one LostItem
     * const LostItem = await prisma.lostItem.delete({
     *   where: {
     *     // ... filter to delete one LostItem
     *   }
     * })
     * 
    **/
    delete<T extends LostItemDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LostItemDeleteArgs<ExtArgs>>
    ): Prisma__LostItemClient<$Result.GetResult<Prisma.$LostItemPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one LostItem.
     * @param {LostItemUpdateArgs} args - Arguments to update one LostItem.
     * @example
     * // Update one LostItem
     * const lostItem = await prisma.lostItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LostItemUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LostItemUpdateArgs<ExtArgs>>
    ): Prisma__LostItemClient<$Result.GetResult<Prisma.$LostItemPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more LostItems.
     * @param {LostItemDeleteManyArgs} args - Arguments to filter LostItems to delete.
     * @example
     * // Delete a few LostItems
     * const { count } = await prisma.lostItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LostItemDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LostItemDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LostItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LostItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LostItems
     * const lostItem = await prisma.lostItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LostItemUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LostItemUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LostItem.
     * @param {LostItemUpsertArgs} args - Arguments to update or create a LostItem.
     * @example
     * // Update or create a LostItem
     * const lostItem = await prisma.lostItem.upsert({
     *   create: {
     *     // ... data to create a LostItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LostItem we want to update
     *   }
     * })
    **/
    upsert<T extends LostItemUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LostItemUpsertArgs<ExtArgs>>
    ): Prisma__LostItemClient<$Result.GetResult<Prisma.$LostItemPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of LostItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LostItemCountArgs} args - Arguments to filter LostItems to count.
     * @example
     * // Count the number of LostItems
     * const count = await prisma.lostItem.count({
     *   where: {
     *     // ... the filter for the LostItems we want to count
     *   }
     * })
    **/
    count<T extends LostItemCountArgs>(
      args?: Subset<T, LostItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LostItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LostItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LostItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LostItemAggregateArgs>(args: Subset<T, LostItemAggregateArgs>): Prisma.PrismaPromise<GetLostItemAggregateType<T>>

    /**
     * Group by LostItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LostItemGroupByArgs} args - Group by arguments.
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
      T extends LostItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LostItemGroupByArgs['orderBy'] }
        : { orderBy?: LostItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LostItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLostItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LostItem model
   */
  readonly fields: LostItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LostItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LostItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    claimRequests<T extends LostItem$claimRequestsArgs<ExtArgs> = {}>(args?: Subset<T, LostItem$claimRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the LostItem model
   */ 
  interface LostItemFieldRefs {
    readonly id: FieldRef<"LostItem", 'String'>
    readonly category: FieldRef<"LostItem", 'String'>
    readonly description: FieldRef<"LostItem", 'String'>
    readonly dateLost: FieldRef<"LostItem", 'DateTime'>
    readonly locationLost: FieldRef<"LostItem", 'String'>
    readonly contactPhone: FieldRef<"LostItem", 'String'>
    readonly contactEmail: FieldRef<"LostItem", 'String'>
    readonly images: FieldRef<"LostItem", 'String'>
    readonly status: FieldRef<"LostItem", 'ItemStatus'>
    readonly createdAt: FieldRef<"LostItem", 'DateTime'>
    readonly updatedAt: FieldRef<"LostItem", 'DateTime'>
    readonly userId: FieldRef<"LostItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LostItem findUnique
   */
  export type LostItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LostItem
     */
    select?: LostItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LostItemInclude<ExtArgs> | null
    /**
     * Filter, which LostItem to fetch.
     */
    where: LostItemWhereUniqueInput
  }

  /**
   * LostItem findUniqueOrThrow
   */
  export type LostItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LostItem
     */
    select?: LostItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LostItemInclude<ExtArgs> | null
    /**
     * Filter, which LostItem to fetch.
     */
    where: LostItemWhereUniqueInput
  }

  /**
   * LostItem findFirst
   */
  export type LostItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LostItem
     */
    select?: LostItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LostItemInclude<ExtArgs> | null
    /**
     * Filter, which LostItem to fetch.
     */
    where?: LostItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LostItems to fetch.
     */
    orderBy?: LostItemOrderByWithRelationInput | LostItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LostItems.
     */
    cursor?: LostItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LostItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LostItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LostItems.
     */
    distinct?: LostItemScalarFieldEnum | LostItemScalarFieldEnum[]
  }

  /**
   * LostItem findFirstOrThrow
   */
  export type LostItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LostItem
     */
    select?: LostItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LostItemInclude<ExtArgs> | null
    /**
     * Filter, which LostItem to fetch.
     */
    where?: LostItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LostItems to fetch.
     */
    orderBy?: LostItemOrderByWithRelationInput | LostItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LostItems.
     */
    cursor?: LostItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LostItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LostItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LostItems.
     */
    distinct?: LostItemScalarFieldEnum | LostItemScalarFieldEnum[]
  }

  /**
   * LostItem findMany
   */
  export type LostItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LostItem
     */
    select?: LostItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LostItemInclude<ExtArgs> | null
    /**
     * Filter, which LostItems to fetch.
     */
    where?: LostItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LostItems to fetch.
     */
    orderBy?: LostItemOrderByWithRelationInput | LostItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LostItems.
     */
    cursor?: LostItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LostItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LostItems.
     */
    skip?: number
    distinct?: LostItemScalarFieldEnum | LostItemScalarFieldEnum[]
  }

  /**
   * LostItem create
   */
  export type LostItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LostItem
     */
    select?: LostItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LostItemInclude<ExtArgs> | null
    /**
     * The data needed to create a LostItem.
     */
    data: XOR<LostItemCreateInput, LostItemUncheckedCreateInput>
  }

  /**
   * LostItem createMany
   */
  export type LostItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LostItems.
     */
    data: LostItemCreateManyInput | LostItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LostItem update
   */
  export type LostItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LostItem
     */
    select?: LostItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LostItemInclude<ExtArgs> | null
    /**
     * The data needed to update a LostItem.
     */
    data: XOR<LostItemUpdateInput, LostItemUncheckedUpdateInput>
    /**
     * Choose, which LostItem to update.
     */
    where: LostItemWhereUniqueInput
  }

  /**
   * LostItem updateMany
   */
  export type LostItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LostItems.
     */
    data: XOR<LostItemUpdateManyMutationInput, LostItemUncheckedUpdateManyInput>
    /**
     * Filter which LostItems to update
     */
    where?: LostItemWhereInput
  }

  /**
   * LostItem upsert
   */
  export type LostItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LostItem
     */
    select?: LostItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LostItemInclude<ExtArgs> | null
    /**
     * The filter to search for the LostItem to update in case it exists.
     */
    where: LostItemWhereUniqueInput
    /**
     * In case the LostItem found by the `where` argument doesn't exist, create a new LostItem with this data.
     */
    create: XOR<LostItemCreateInput, LostItemUncheckedCreateInput>
    /**
     * In case the LostItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LostItemUpdateInput, LostItemUncheckedUpdateInput>
  }

  /**
   * LostItem delete
   */
  export type LostItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LostItem
     */
    select?: LostItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LostItemInclude<ExtArgs> | null
    /**
     * Filter which LostItem to delete.
     */
    where: LostItemWhereUniqueInput
  }

  /**
   * LostItem deleteMany
   */
  export type LostItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LostItems to delete
     */
    where?: LostItemWhereInput
  }

  /**
   * LostItem.claimRequests
   */
  export type LostItem$claimRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    where?: ClaimWhereInput
    orderBy?: ClaimOrderByWithRelationInput | ClaimOrderByWithRelationInput[]
    cursor?: ClaimWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClaimScalarFieldEnum | ClaimScalarFieldEnum[]
  }

  /**
   * LostItem without action
   */
  export type LostItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LostItem
     */
    select?: LostItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LostItemInclude<ExtArgs> | null
  }


  /**
   * Model FoundItem
   */

  export type AggregateFoundItem = {
    _count: FoundItemCountAggregateOutputType | null
    _min: FoundItemMinAggregateOutputType | null
    _max: FoundItemMaxAggregateOutputType | null
  }

  export type FoundItemMinAggregateOutputType = {
    id: string | null
    userId: string | null
    category: string | null
    description: string | null
    dateFound: Date | null
    locationFound: string | null
    contactPhone: string | null
    contactEmail: string | null
    images: string | null
    status: $Enums.ItemStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FoundItemMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    category: string | null
    description: string | null
    dateFound: Date | null
    locationFound: string | null
    contactPhone: string | null
    contactEmail: string | null
    images: string | null
    status: $Enums.ItemStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FoundItemCountAggregateOutputType = {
    id: number
    userId: number
    category: number
    description: number
    dateFound: number
    locationFound: number
    contactPhone: number
    contactEmail: number
    images: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FoundItemMinAggregateInputType = {
    id?: true
    userId?: true
    category?: true
    description?: true
    dateFound?: true
    locationFound?: true
    contactPhone?: true
    contactEmail?: true
    images?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FoundItemMaxAggregateInputType = {
    id?: true
    userId?: true
    category?: true
    description?: true
    dateFound?: true
    locationFound?: true
    contactPhone?: true
    contactEmail?: true
    images?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FoundItemCountAggregateInputType = {
    id?: true
    userId?: true
    category?: true
    description?: true
    dateFound?: true
    locationFound?: true
    contactPhone?: true
    contactEmail?: true
    images?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FoundItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoundItem to aggregate.
     */
    where?: FoundItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoundItems to fetch.
     */
    orderBy?: FoundItemOrderByWithRelationInput | FoundItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FoundItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoundItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoundItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FoundItems
    **/
    _count?: true | FoundItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FoundItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FoundItemMaxAggregateInputType
  }

  export type GetFoundItemAggregateType<T extends FoundItemAggregateArgs> = {
        [P in keyof T & keyof AggregateFoundItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFoundItem[P]>
      : GetScalarType<T[P], AggregateFoundItem[P]>
  }




  export type FoundItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoundItemWhereInput
    orderBy?: FoundItemOrderByWithAggregationInput | FoundItemOrderByWithAggregationInput[]
    by: FoundItemScalarFieldEnum[] | FoundItemScalarFieldEnum
    having?: FoundItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FoundItemCountAggregateInputType | true
    _min?: FoundItemMinAggregateInputType
    _max?: FoundItemMaxAggregateInputType
  }

  export type FoundItemGroupByOutputType = {
    id: string
    userId: string
    category: string
    description: string
    dateFound: Date | null
    locationFound: string | null
    contactPhone: string | null
    contactEmail: string | null
    images: string | null
    status: $Enums.ItemStatus
    createdAt: Date
    updatedAt: Date
    _count: FoundItemCountAggregateOutputType | null
    _min: FoundItemMinAggregateOutputType | null
    _max: FoundItemMaxAggregateOutputType | null
  }

  type GetFoundItemGroupByPayload<T extends FoundItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FoundItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FoundItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FoundItemGroupByOutputType[P]>
            : GetScalarType<T[P], FoundItemGroupByOutputType[P]>
        }
      >
    >


  export type FoundItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    category?: boolean
    description?: boolean
    dateFound?: boolean
    locationFound?: boolean
    contactPhone?: boolean
    contactEmail?: boolean
    images?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    claims?: boolean | FoundItem$claimsArgs<ExtArgs>
    _count?: boolean | FoundItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["foundItem"]>

  export type FoundItemSelectScalar = {
    id?: boolean
    userId?: boolean
    category?: boolean
    description?: boolean
    dateFound?: boolean
    locationFound?: boolean
    contactPhone?: boolean
    contactEmail?: boolean
    images?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type FoundItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    claims?: boolean | FoundItem$claimsArgs<ExtArgs>
    _count?: boolean | FoundItemCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $FoundItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FoundItem"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      claims: Prisma.$ClaimPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      category: string
      description: string
      dateFound: Date | null
      locationFound: string | null
      contactPhone: string | null
      contactEmail: string | null
      images: string | null
      status: $Enums.ItemStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["foundItem"]>
    composites: {}
  }


  type FoundItemGetPayload<S extends boolean | null | undefined | FoundItemDefaultArgs> = $Result.GetResult<Prisma.$FoundItemPayload, S>

  type FoundItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FoundItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FoundItemCountAggregateInputType | true
    }

  export interface FoundItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FoundItem'], meta: { name: 'FoundItem' } }
    /**
     * Find zero or one FoundItem that matches the filter.
     * @param {FoundItemFindUniqueArgs} args - Arguments to find a FoundItem
     * @example
     * // Get one FoundItem
     * const foundItem = await prisma.foundItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FoundItemFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FoundItemFindUniqueArgs<ExtArgs>>
    ): Prisma__FoundItemClient<$Result.GetResult<Prisma.$FoundItemPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one FoundItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FoundItemFindUniqueOrThrowArgs} args - Arguments to find a FoundItem
     * @example
     * // Get one FoundItem
     * const foundItem = await prisma.foundItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FoundItemFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FoundItemFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FoundItemClient<$Result.GetResult<Prisma.$FoundItemPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first FoundItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoundItemFindFirstArgs} args - Arguments to find a FoundItem
     * @example
     * // Get one FoundItem
     * const foundItem = await prisma.foundItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FoundItemFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FoundItemFindFirstArgs<ExtArgs>>
    ): Prisma__FoundItemClient<$Result.GetResult<Prisma.$FoundItemPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first FoundItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoundItemFindFirstOrThrowArgs} args - Arguments to find a FoundItem
     * @example
     * // Get one FoundItem
     * const foundItem = await prisma.foundItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FoundItemFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FoundItemFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FoundItemClient<$Result.GetResult<Prisma.$FoundItemPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more FoundItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoundItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FoundItems
     * const foundItems = await prisma.foundItem.findMany()
     * 
     * // Get first 10 FoundItems
     * const foundItems = await prisma.foundItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const foundItemWithIdOnly = await prisma.foundItem.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FoundItemFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FoundItemFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoundItemPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a FoundItem.
     * @param {FoundItemCreateArgs} args - Arguments to create a FoundItem.
     * @example
     * // Create one FoundItem
     * const FoundItem = await prisma.foundItem.create({
     *   data: {
     *     // ... data to create a FoundItem
     *   }
     * })
     * 
    **/
    create<T extends FoundItemCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FoundItemCreateArgs<ExtArgs>>
    ): Prisma__FoundItemClient<$Result.GetResult<Prisma.$FoundItemPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many FoundItems.
     * @param {FoundItemCreateManyArgs} args - Arguments to create many FoundItems.
     * @example
     * // Create many FoundItems
     * const foundItem = await prisma.foundItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends FoundItemCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FoundItemCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FoundItem.
     * @param {FoundItemDeleteArgs} args - Arguments to delete one FoundItem.
     * @example
     * // Delete one FoundItem
     * const FoundItem = await prisma.foundItem.delete({
     *   where: {
     *     // ... filter to delete one FoundItem
     *   }
     * })
     * 
    **/
    delete<T extends FoundItemDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FoundItemDeleteArgs<ExtArgs>>
    ): Prisma__FoundItemClient<$Result.GetResult<Prisma.$FoundItemPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one FoundItem.
     * @param {FoundItemUpdateArgs} args - Arguments to update one FoundItem.
     * @example
     * // Update one FoundItem
     * const foundItem = await prisma.foundItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FoundItemUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FoundItemUpdateArgs<ExtArgs>>
    ): Prisma__FoundItemClient<$Result.GetResult<Prisma.$FoundItemPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more FoundItems.
     * @param {FoundItemDeleteManyArgs} args - Arguments to filter FoundItems to delete.
     * @example
     * // Delete a few FoundItems
     * const { count } = await prisma.foundItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FoundItemDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FoundItemDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FoundItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoundItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FoundItems
     * const foundItem = await prisma.foundItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FoundItemUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FoundItemUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FoundItem.
     * @param {FoundItemUpsertArgs} args - Arguments to update or create a FoundItem.
     * @example
     * // Update or create a FoundItem
     * const foundItem = await prisma.foundItem.upsert({
     *   create: {
     *     // ... data to create a FoundItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FoundItem we want to update
     *   }
     * })
    **/
    upsert<T extends FoundItemUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FoundItemUpsertArgs<ExtArgs>>
    ): Prisma__FoundItemClient<$Result.GetResult<Prisma.$FoundItemPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of FoundItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoundItemCountArgs} args - Arguments to filter FoundItems to count.
     * @example
     * // Count the number of FoundItems
     * const count = await prisma.foundItem.count({
     *   where: {
     *     // ... the filter for the FoundItems we want to count
     *   }
     * })
    **/
    count<T extends FoundItemCountArgs>(
      args?: Subset<T, FoundItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FoundItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FoundItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoundItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FoundItemAggregateArgs>(args: Subset<T, FoundItemAggregateArgs>): Prisma.PrismaPromise<GetFoundItemAggregateType<T>>

    /**
     * Group by FoundItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoundItemGroupByArgs} args - Group by arguments.
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
      T extends FoundItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FoundItemGroupByArgs['orderBy'] }
        : { orderBy?: FoundItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FoundItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoundItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FoundItem model
   */
  readonly fields: FoundItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FoundItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FoundItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    claims<T extends FoundItem$claimsArgs<ExtArgs> = {}>(args?: Subset<T, FoundItem$claimsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the FoundItem model
   */ 
  interface FoundItemFieldRefs {
    readonly id: FieldRef<"FoundItem", 'String'>
    readonly userId: FieldRef<"FoundItem", 'String'>
    readonly category: FieldRef<"FoundItem", 'String'>
    readonly description: FieldRef<"FoundItem", 'String'>
    readonly dateFound: FieldRef<"FoundItem", 'DateTime'>
    readonly locationFound: FieldRef<"FoundItem", 'String'>
    readonly contactPhone: FieldRef<"FoundItem", 'String'>
    readonly contactEmail: FieldRef<"FoundItem", 'String'>
    readonly images: FieldRef<"FoundItem", 'String'>
    readonly status: FieldRef<"FoundItem", 'ItemStatus'>
    readonly createdAt: FieldRef<"FoundItem", 'DateTime'>
    readonly updatedAt: FieldRef<"FoundItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FoundItem findUnique
   */
  export type FoundItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoundItem
     */
    select?: FoundItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoundItemInclude<ExtArgs> | null
    /**
     * Filter, which FoundItem to fetch.
     */
    where: FoundItemWhereUniqueInput
  }

  /**
   * FoundItem findUniqueOrThrow
   */
  export type FoundItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoundItem
     */
    select?: FoundItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoundItemInclude<ExtArgs> | null
    /**
     * Filter, which FoundItem to fetch.
     */
    where: FoundItemWhereUniqueInput
  }

  /**
   * FoundItem findFirst
   */
  export type FoundItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoundItem
     */
    select?: FoundItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoundItemInclude<ExtArgs> | null
    /**
     * Filter, which FoundItem to fetch.
     */
    where?: FoundItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoundItems to fetch.
     */
    orderBy?: FoundItemOrderByWithRelationInput | FoundItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoundItems.
     */
    cursor?: FoundItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoundItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoundItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoundItems.
     */
    distinct?: FoundItemScalarFieldEnum | FoundItemScalarFieldEnum[]
  }

  /**
   * FoundItem findFirstOrThrow
   */
  export type FoundItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoundItem
     */
    select?: FoundItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoundItemInclude<ExtArgs> | null
    /**
     * Filter, which FoundItem to fetch.
     */
    where?: FoundItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoundItems to fetch.
     */
    orderBy?: FoundItemOrderByWithRelationInput | FoundItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoundItems.
     */
    cursor?: FoundItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoundItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoundItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoundItems.
     */
    distinct?: FoundItemScalarFieldEnum | FoundItemScalarFieldEnum[]
  }

  /**
   * FoundItem findMany
   */
  export type FoundItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoundItem
     */
    select?: FoundItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoundItemInclude<ExtArgs> | null
    /**
     * Filter, which FoundItems to fetch.
     */
    where?: FoundItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoundItems to fetch.
     */
    orderBy?: FoundItemOrderByWithRelationInput | FoundItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FoundItems.
     */
    cursor?: FoundItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoundItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoundItems.
     */
    skip?: number
    distinct?: FoundItemScalarFieldEnum | FoundItemScalarFieldEnum[]
  }

  /**
   * FoundItem create
   */
  export type FoundItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoundItem
     */
    select?: FoundItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoundItemInclude<ExtArgs> | null
    /**
     * The data needed to create a FoundItem.
     */
    data: XOR<FoundItemCreateInput, FoundItemUncheckedCreateInput>
  }

  /**
   * FoundItem createMany
   */
  export type FoundItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FoundItems.
     */
    data: FoundItemCreateManyInput | FoundItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FoundItem update
   */
  export type FoundItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoundItem
     */
    select?: FoundItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoundItemInclude<ExtArgs> | null
    /**
     * The data needed to update a FoundItem.
     */
    data: XOR<FoundItemUpdateInput, FoundItemUncheckedUpdateInput>
    /**
     * Choose, which FoundItem to update.
     */
    where: FoundItemWhereUniqueInput
  }

  /**
   * FoundItem updateMany
   */
  export type FoundItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FoundItems.
     */
    data: XOR<FoundItemUpdateManyMutationInput, FoundItemUncheckedUpdateManyInput>
    /**
     * Filter which FoundItems to update
     */
    where?: FoundItemWhereInput
  }

  /**
   * FoundItem upsert
   */
  export type FoundItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoundItem
     */
    select?: FoundItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoundItemInclude<ExtArgs> | null
    /**
     * The filter to search for the FoundItem to update in case it exists.
     */
    where: FoundItemWhereUniqueInput
    /**
     * In case the FoundItem found by the `where` argument doesn't exist, create a new FoundItem with this data.
     */
    create: XOR<FoundItemCreateInput, FoundItemUncheckedCreateInput>
    /**
     * In case the FoundItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FoundItemUpdateInput, FoundItemUncheckedUpdateInput>
  }

  /**
   * FoundItem delete
   */
  export type FoundItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoundItem
     */
    select?: FoundItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoundItemInclude<ExtArgs> | null
    /**
     * Filter which FoundItem to delete.
     */
    where: FoundItemWhereUniqueInput
  }

  /**
   * FoundItem deleteMany
   */
  export type FoundItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoundItems to delete
     */
    where?: FoundItemWhereInput
  }

  /**
   * FoundItem.claims
   */
  export type FoundItem$claimsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    where?: ClaimWhereInput
    orderBy?: ClaimOrderByWithRelationInput | ClaimOrderByWithRelationInput[]
    cursor?: ClaimWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClaimScalarFieldEnum | ClaimScalarFieldEnum[]
  }

  /**
   * FoundItem without action
   */
  export type FoundItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoundItem
     */
    select?: FoundItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoundItemInclude<ExtArgs> | null
  }


  /**
   * Model Claim
   */

  export type AggregateClaim = {
    _count: ClaimCountAggregateOutputType | null
    _min: ClaimMinAggregateOutputType | null
    _max: ClaimMaxAggregateOutputType | null
  }

  export type ClaimMinAggregateOutputType = {
    id: string | null
    itemId: string | null
    description: string | null
    contactPhone: string | null
    contactEmail: string | null
    status: $Enums.ClaimStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    lostItemId: string | null
    foundItemId: string | null
  }

  export type ClaimMaxAggregateOutputType = {
    id: string | null
    itemId: string | null
    description: string | null
    contactPhone: string | null
    contactEmail: string | null
    status: $Enums.ClaimStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    lostItemId: string | null
    foundItemId: string | null
  }

  export type ClaimCountAggregateOutputType = {
    id: number
    itemId: number
    description: number
    contactPhone: number
    contactEmail: number
    status: number
    createdAt: number
    updatedAt: number
    userId: number
    lostItemId: number
    foundItemId: number
    _all: number
  }


  export type ClaimMinAggregateInputType = {
    id?: true
    itemId?: true
    description?: true
    contactPhone?: true
    contactEmail?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    lostItemId?: true
    foundItemId?: true
  }

  export type ClaimMaxAggregateInputType = {
    id?: true
    itemId?: true
    description?: true
    contactPhone?: true
    contactEmail?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    lostItemId?: true
    foundItemId?: true
  }

  export type ClaimCountAggregateInputType = {
    id?: true
    itemId?: true
    description?: true
    contactPhone?: true
    contactEmail?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    lostItemId?: true
    foundItemId?: true
    _all?: true
  }

  export type ClaimAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Claim to aggregate.
     */
    where?: ClaimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Claims to fetch.
     */
    orderBy?: ClaimOrderByWithRelationInput | ClaimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClaimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Claims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Claims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Claims
    **/
    _count?: true | ClaimCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClaimMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClaimMaxAggregateInputType
  }

  export type GetClaimAggregateType<T extends ClaimAggregateArgs> = {
        [P in keyof T & keyof AggregateClaim]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClaim[P]>
      : GetScalarType<T[P], AggregateClaim[P]>
  }




  export type ClaimGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClaimWhereInput
    orderBy?: ClaimOrderByWithAggregationInput | ClaimOrderByWithAggregationInput[]
    by: ClaimScalarFieldEnum[] | ClaimScalarFieldEnum
    having?: ClaimScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClaimCountAggregateInputType | true
    _min?: ClaimMinAggregateInputType
    _max?: ClaimMaxAggregateInputType
  }

  export type ClaimGroupByOutputType = {
    id: string
    itemId: string
    description: string
    contactPhone: string | null
    contactEmail: string | null
    status: $Enums.ClaimStatus
    createdAt: Date
    updatedAt: Date
    userId: string
    lostItemId: string | null
    foundItemId: string | null
    _count: ClaimCountAggregateOutputType | null
    _min: ClaimMinAggregateOutputType | null
    _max: ClaimMaxAggregateOutputType | null
  }

  type GetClaimGroupByPayload<T extends ClaimGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClaimGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClaimGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClaimGroupByOutputType[P]>
            : GetScalarType<T[P], ClaimGroupByOutputType[P]>
        }
      >
    >


  export type ClaimSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemId?: boolean
    description?: boolean
    contactPhone?: boolean
    contactEmail?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    lostItemId?: boolean
    foundItemId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    lostItem?: boolean | Claim$lostItemArgs<ExtArgs>
    foundItem?: boolean | Claim$foundItemArgs<ExtArgs>
  }, ExtArgs["result"]["claim"]>

  export type ClaimSelectScalar = {
    id?: boolean
    itemId?: boolean
    description?: boolean
    contactPhone?: boolean
    contactEmail?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    lostItemId?: boolean
    foundItemId?: boolean
  }


  export type ClaimInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    lostItem?: boolean | Claim$lostItemArgs<ExtArgs>
    foundItem?: boolean | Claim$foundItemArgs<ExtArgs>
  }


  export type $ClaimPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Claim"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      lostItem: Prisma.$LostItemPayload<ExtArgs> | null
      foundItem: Prisma.$FoundItemPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      itemId: string
      description: string
      contactPhone: string | null
      contactEmail: string | null
      status: $Enums.ClaimStatus
      createdAt: Date
      updatedAt: Date
      userId: string
      lostItemId: string | null
      foundItemId: string | null
    }, ExtArgs["result"]["claim"]>
    composites: {}
  }


  type ClaimGetPayload<S extends boolean | null | undefined | ClaimDefaultArgs> = $Result.GetResult<Prisma.$ClaimPayload, S>

  type ClaimCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ClaimFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ClaimCountAggregateInputType | true
    }

  export interface ClaimDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Claim'], meta: { name: 'Claim' } }
    /**
     * Find zero or one Claim that matches the filter.
     * @param {ClaimFindUniqueArgs} args - Arguments to find a Claim
     * @example
     * // Get one Claim
     * const claim = await prisma.claim.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ClaimFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ClaimFindUniqueArgs<ExtArgs>>
    ): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Claim that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ClaimFindUniqueOrThrowArgs} args - Arguments to find a Claim
     * @example
     * // Get one Claim
     * const claim = await prisma.claim.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ClaimFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ClaimFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Claim that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimFindFirstArgs} args - Arguments to find a Claim
     * @example
     * // Get one Claim
     * const claim = await prisma.claim.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ClaimFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ClaimFindFirstArgs<ExtArgs>>
    ): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Claim that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimFindFirstOrThrowArgs} args - Arguments to find a Claim
     * @example
     * // Get one Claim
     * const claim = await prisma.claim.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ClaimFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ClaimFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Claims that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Claims
     * const claims = await prisma.claim.findMany()
     * 
     * // Get first 10 Claims
     * const claims = await prisma.claim.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const claimWithIdOnly = await prisma.claim.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ClaimFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClaimFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Claim.
     * @param {ClaimCreateArgs} args - Arguments to create a Claim.
     * @example
     * // Create one Claim
     * const Claim = await prisma.claim.create({
     *   data: {
     *     // ... data to create a Claim
     *   }
     * })
     * 
    **/
    create<T extends ClaimCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ClaimCreateArgs<ExtArgs>>
    ): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Claims.
     * @param {ClaimCreateManyArgs} args - Arguments to create many Claims.
     * @example
     * // Create many Claims
     * const claim = await prisma.claim.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ClaimCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClaimCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Claim.
     * @param {ClaimDeleteArgs} args - Arguments to delete one Claim.
     * @example
     * // Delete one Claim
     * const Claim = await prisma.claim.delete({
     *   where: {
     *     // ... filter to delete one Claim
     *   }
     * })
     * 
    **/
    delete<T extends ClaimDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ClaimDeleteArgs<ExtArgs>>
    ): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Claim.
     * @param {ClaimUpdateArgs} args - Arguments to update one Claim.
     * @example
     * // Update one Claim
     * const claim = await prisma.claim.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ClaimUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ClaimUpdateArgs<ExtArgs>>
    ): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Claims.
     * @param {ClaimDeleteManyArgs} args - Arguments to filter Claims to delete.
     * @example
     * // Delete a few Claims
     * const { count } = await prisma.claim.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ClaimDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClaimDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Claims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Claims
     * const claim = await prisma.claim.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ClaimUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ClaimUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Claim.
     * @param {ClaimUpsertArgs} args - Arguments to update or create a Claim.
     * @example
     * // Update or create a Claim
     * const claim = await prisma.claim.upsert({
     *   create: {
     *     // ... data to create a Claim
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Claim we want to update
     *   }
     * })
    **/
    upsert<T extends ClaimUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ClaimUpsertArgs<ExtArgs>>
    ): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Claims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimCountArgs} args - Arguments to filter Claims to count.
     * @example
     * // Count the number of Claims
     * const count = await prisma.claim.count({
     *   where: {
     *     // ... the filter for the Claims we want to count
     *   }
     * })
    **/
    count<T extends ClaimCountArgs>(
      args?: Subset<T, ClaimCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClaimCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Claim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClaimAggregateArgs>(args: Subset<T, ClaimAggregateArgs>): Prisma.PrismaPromise<GetClaimAggregateType<T>>

    /**
     * Group by Claim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimGroupByArgs} args - Group by arguments.
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
      T extends ClaimGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClaimGroupByArgs['orderBy'] }
        : { orderBy?: ClaimGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClaimGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClaimGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Claim model
   */
  readonly fields: ClaimFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Claim.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClaimClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    lostItem<T extends Claim$lostItemArgs<ExtArgs> = {}>(args?: Subset<T, Claim$lostItemArgs<ExtArgs>>): Prisma__LostItemClient<$Result.GetResult<Prisma.$LostItemPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    foundItem<T extends Claim$foundItemArgs<ExtArgs> = {}>(args?: Subset<T, Claim$foundItemArgs<ExtArgs>>): Prisma__FoundItemClient<$Result.GetResult<Prisma.$FoundItemPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Claim model
   */ 
  interface ClaimFieldRefs {
    readonly id: FieldRef<"Claim", 'String'>
    readonly itemId: FieldRef<"Claim", 'String'>
    readonly description: FieldRef<"Claim", 'String'>
    readonly contactPhone: FieldRef<"Claim", 'String'>
    readonly contactEmail: FieldRef<"Claim", 'String'>
    readonly status: FieldRef<"Claim", 'ClaimStatus'>
    readonly createdAt: FieldRef<"Claim", 'DateTime'>
    readonly updatedAt: FieldRef<"Claim", 'DateTime'>
    readonly userId: FieldRef<"Claim", 'String'>
    readonly lostItemId: FieldRef<"Claim", 'String'>
    readonly foundItemId: FieldRef<"Claim", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Claim findUnique
   */
  export type ClaimFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * Filter, which Claim to fetch.
     */
    where: ClaimWhereUniqueInput
  }

  /**
   * Claim findUniqueOrThrow
   */
  export type ClaimFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * Filter, which Claim to fetch.
     */
    where: ClaimWhereUniqueInput
  }

  /**
   * Claim findFirst
   */
  export type ClaimFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * Filter, which Claim to fetch.
     */
    where?: ClaimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Claims to fetch.
     */
    orderBy?: ClaimOrderByWithRelationInput | ClaimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Claims.
     */
    cursor?: ClaimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Claims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Claims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Claims.
     */
    distinct?: ClaimScalarFieldEnum | ClaimScalarFieldEnum[]
  }

  /**
   * Claim findFirstOrThrow
   */
  export type ClaimFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * Filter, which Claim to fetch.
     */
    where?: ClaimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Claims to fetch.
     */
    orderBy?: ClaimOrderByWithRelationInput | ClaimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Claims.
     */
    cursor?: ClaimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Claims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Claims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Claims.
     */
    distinct?: ClaimScalarFieldEnum | ClaimScalarFieldEnum[]
  }

  /**
   * Claim findMany
   */
  export type ClaimFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * Filter, which Claims to fetch.
     */
    where?: ClaimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Claims to fetch.
     */
    orderBy?: ClaimOrderByWithRelationInput | ClaimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Claims.
     */
    cursor?: ClaimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Claims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Claims.
     */
    skip?: number
    distinct?: ClaimScalarFieldEnum | ClaimScalarFieldEnum[]
  }

  /**
   * Claim create
   */
  export type ClaimCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * The data needed to create a Claim.
     */
    data: XOR<ClaimCreateInput, ClaimUncheckedCreateInput>
  }

  /**
   * Claim createMany
   */
  export type ClaimCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Claims.
     */
    data: ClaimCreateManyInput | ClaimCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Claim update
   */
  export type ClaimUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * The data needed to update a Claim.
     */
    data: XOR<ClaimUpdateInput, ClaimUncheckedUpdateInput>
    /**
     * Choose, which Claim to update.
     */
    where: ClaimWhereUniqueInput
  }

  /**
   * Claim updateMany
   */
  export type ClaimUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Claims.
     */
    data: XOR<ClaimUpdateManyMutationInput, ClaimUncheckedUpdateManyInput>
    /**
     * Filter which Claims to update
     */
    where?: ClaimWhereInput
  }

  /**
   * Claim upsert
   */
  export type ClaimUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * The filter to search for the Claim to update in case it exists.
     */
    where: ClaimWhereUniqueInput
    /**
     * In case the Claim found by the `where` argument doesn't exist, create a new Claim with this data.
     */
    create: XOR<ClaimCreateInput, ClaimUncheckedCreateInput>
    /**
     * In case the Claim was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClaimUpdateInput, ClaimUncheckedUpdateInput>
  }

  /**
   * Claim delete
   */
  export type ClaimDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * Filter which Claim to delete.
     */
    where: ClaimWhereUniqueInput
  }

  /**
   * Claim deleteMany
   */
  export type ClaimDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Claims to delete
     */
    where?: ClaimWhereInput
  }

  /**
   * Claim.lostItem
   */
  export type Claim$lostItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LostItem
     */
    select?: LostItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LostItemInclude<ExtArgs> | null
    where?: LostItemWhereInput
  }

  /**
   * Claim.foundItem
   */
  export type Claim$foundItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoundItem
     */
    select?: FoundItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoundItemInclude<ExtArgs> | null
    where?: FoundItemWhereInput
  }

  /**
   * Claim without action
   */
  export type ClaimDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
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
    id: 'id',
    name: 'name',
    username: 'username',
    email: 'email',
    password: 'password',
    role: 'role',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const LostItemScalarFieldEnum: {
    id: 'id',
    category: 'category',
    description: 'description',
    dateLost: 'dateLost',
    locationLost: 'locationLost',
    contactPhone: 'contactPhone',
    contactEmail: 'contactEmail',
    images: 'images',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type LostItemScalarFieldEnum = (typeof LostItemScalarFieldEnum)[keyof typeof LostItemScalarFieldEnum]


  export const FoundItemScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    category: 'category',
    description: 'description',
    dateFound: 'dateFound',
    locationFound: 'locationFound',
    contactPhone: 'contactPhone',
    contactEmail: 'contactEmail',
    images: 'images',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FoundItemScalarFieldEnum = (typeof FoundItemScalarFieldEnum)[keyof typeof FoundItemScalarFieldEnum]


  export const ClaimScalarFieldEnum: {
    id: 'id',
    itemId: 'itemId',
    description: 'description',
    contactPhone: 'contactPhone',
    contactEmail: 'contactEmail',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    lostItemId: 'lostItemId',
    foundItemId: 'foundItemId'
  };

  export type ClaimScalarFieldEnum = (typeof ClaimScalarFieldEnum)[keyof typeof ClaimScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ItemStatus'
   */
  export type EnumItemStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ItemStatus'>
    


  /**
   * Reference to a field of type 'ItemStatus[]'
   */
  export type ListEnumItemStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ItemStatus[]'>
    


  /**
   * Reference to a field of type 'ClaimStatus'
   */
  export type EnumClaimStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ClaimStatus'>
    


  /**
   * Reference to a field of type 'ClaimStatus[]'
   */
  export type ListEnumClaimStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ClaimStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringNullableFilter<"User"> | string | null
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    lostItems?: LostItemListRelationFilter
    foundItems?: FoundItemListRelationFilter
    claimRequests?: ClaimListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lostItems?: LostItemOrderByRelationAggregateInput
    foundItems?: FoundItemOrderByRelationAggregateInput
    claimRequests?: ClaimOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringNullableFilter<"User"> | string | null
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    lostItems?: LostItemListRelationFilter
    foundItems?: FoundItemListRelationFilter
    claimRequests?: ClaimListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: StringNullableWithAggregatesFilter<"User"> | string | null
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type LostItemWhereInput = {
    AND?: LostItemWhereInput | LostItemWhereInput[]
    OR?: LostItemWhereInput[]
    NOT?: LostItemWhereInput | LostItemWhereInput[]
    id?: StringFilter<"LostItem"> | string
    category?: StringFilter<"LostItem"> | string
    description?: StringFilter<"LostItem"> | string
    dateLost?: DateTimeNullableFilter<"LostItem"> | Date | string | null
    locationLost?: StringNullableFilter<"LostItem"> | string | null
    contactPhone?: StringNullableFilter<"LostItem"> | string | null
    contactEmail?: StringNullableFilter<"LostItem"> | string | null
    images?: StringNullableFilter<"LostItem"> | string | null
    status?: EnumItemStatusFilter<"LostItem"> | $Enums.ItemStatus
    createdAt?: DateTimeFilter<"LostItem"> | Date | string
    updatedAt?: DateTimeFilter<"LostItem"> | Date | string
    userId?: StringFilter<"LostItem"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    claimRequests?: ClaimListRelationFilter
  }

  export type LostItemOrderByWithRelationInput = {
    id?: SortOrder
    category?: SortOrder
    description?: SortOrder
    dateLost?: SortOrderInput | SortOrder
    locationLost?: SortOrderInput | SortOrder
    contactPhone?: SortOrderInput | SortOrder
    contactEmail?: SortOrderInput | SortOrder
    images?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    claimRequests?: ClaimOrderByRelationAggregateInput
  }

  export type LostItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LostItemWhereInput | LostItemWhereInput[]
    OR?: LostItemWhereInput[]
    NOT?: LostItemWhereInput | LostItemWhereInput[]
    category?: StringFilter<"LostItem"> | string
    description?: StringFilter<"LostItem"> | string
    dateLost?: DateTimeNullableFilter<"LostItem"> | Date | string | null
    locationLost?: StringNullableFilter<"LostItem"> | string | null
    contactPhone?: StringNullableFilter<"LostItem"> | string | null
    contactEmail?: StringNullableFilter<"LostItem"> | string | null
    images?: StringNullableFilter<"LostItem"> | string | null
    status?: EnumItemStatusFilter<"LostItem"> | $Enums.ItemStatus
    createdAt?: DateTimeFilter<"LostItem"> | Date | string
    updatedAt?: DateTimeFilter<"LostItem"> | Date | string
    userId?: StringFilter<"LostItem"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    claimRequests?: ClaimListRelationFilter
  }, "id">

  export type LostItemOrderByWithAggregationInput = {
    id?: SortOrder
    category?: SortOrder
    description?: SortOrder
    dateLost?: SortOrderInput | SortOrder
    locationLost?: SortOrderInput | SortOrder
    contactPhone?: SortOrderInput | SortOrder
    contactEmail?: SortOrderInput | SortOrder
    images?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: LostItemCountOrderByAggregateInput
    _max?: LostItemMaxOrderByAggregateInput
    _min?: LostItemMinOrderByAggregateInput
  }

  export type LostItemScalarWhereWithAggregatesInput = {
    AND?: LostItemScalarWhereWithAggregatesInput | LostItemScalarWhereWithAggregatesInput[]
    OR?: LostItemScalarWhereWithAggregatesInput[]
    NOT?: LostItemScalarWhereWithAggregatesInput | LostItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LostItem"> | string
    category?: StringWithAggregatesFilter<"LostItem"> | string
    description?: StringWithAggregatesFilter<"LostItem"> | string
    dateLost?: DateTimeNullableWithAggregatesFilter<"LostItem"> | Date | string | null
    locationLost?: StringNullableWithAggregatesFilter<"LostItem"> | string | null
    contactPhone?: StringNullableWithAggregatesFilter<"LostItem"> | string | null
    contactEmail?: StringNullableWithAggregatesFilter<"LostItem"> | string | null
    images?: StringNullableWithAggregatesFilter<"LostItem"> | string | null
    status?: EnumItemStatusWithAggregatesFilter<"LostItem"> | $Enums.ItemStatus
    createdAt?: DateTimeWithAggregatesFilter<"LostItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LostItem"> | Date | string
    userId?: StringWithAggregatesFilter<"LostItem"> | string
  }

  export type FoundItemWhereInput = {
    AND?: FoundItemWhereInput | FoundItemWhereInput[]
    OR?: FoundItemWhereInput[]
    NOT?: FoundItemWhereInput | FoundItemWhereInput[]
    id?: StringFilter<"FoundItem"> | string
    userId?: StringFilter<"FoundItem"> | string
    category?: StringFilter<"FoundItem"> | string
    description?: StringFilter<"FoundItem"> | string
    dateFound?: DateTimeNullableFilter<"FoundItem"> | Date | string | null
    locationFound?: StringNullableFilter<"FoundItem"> | string | null
    contactPhone?: StringNullableFilter<"FoundItem"> | string | null
    contactEmail?: StringNullableFilter<"FoundItem"> | string | null
    images?: StringNullableFilter<"FoundItem"> | string | null
    status?: EnumItemStatusFilter<"FoundItem"> | $Enums.ItemStatus
    createdAt?: DateTimeFilter<"FoundItem"> | Date | string
    updatedAt?: DateTimeFilter<"FoundItem"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    claims?: ClaimListRelationFilter
  }

  export type FoundItemOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    category?: SortOrder
    description?: SortOrder
    dateFound?: SortOrderInput | SortOrder
    locationFound?: SortOrderInput | SortOrder
    contactPhone?: SortOrderInput | SortOrder
    contactEmail?: SortOrderInput | SortOrder
    images?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    claims?: ClaimOrderByRelationAggregateInput
  }

  export type FoundItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FoundItemWhereInput | FoundItemWhereInput[]
    OR?: FoundItemWhereInput[]
    NOT?: FoundItemWhereInput | FoundItemWhereInput[]
    userId?: StringFilter<"FoundItem"> | string
    category?: StringFilter<"FoundItem"> | string
    description?: StringFilter<"FoundItem"> | string
    dateFound?: DateTimeNullableFilter<"FoundItem"> | Date | string | null
    locationFound?: StringNullableFilter<"FoundItem"> | string | null
    contactPhone?: StringNullableFilter<"FoundItem"> | string | null
    contactEmail?: StringNullableFilter<"FoundItem"> | string | null
    images?: StringNullableFilter<"FoundItem"> | string | null
    status?: EnumItemStatusFilter<"FoundItem"> | $Enums.ItemStatus
    createdAt?: DateTimeFilter<"FoundItem"> | Date | string
    updatedAt?: DateTimeFilter<"FoundItem"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    claims?: ClaimListRelationFilter
  }, "id">

  export type FoundItemOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    category?: SortOrder
    description?: SortOrder
    dateFound?: SortOrderInput | SortOrder
    locationFound?: SortOrderInput | SortOrder
    contactPhone?: SortOrderInput | SortOrder
    contactEmail?: SortOrderInput | SortOrder
    images?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FoundItemCountOrderByAggregateInput
    _max?: FoundItemMaxOrderByAggregateInput
    _min?: FoundItemMinOrderByAggregateInput
  }

  export type FoundItemScalarWhereWithAggregatesInput = {
    AND?: FoundItemScalarWhereWithAggregatesInput | FoundItemScalarWhereWithAggregatesInput[]
    OR?: FoundItemScalarWhereWithAggregatesInput[]
    NOT?: FoundItemScalarWhereWithAggregatesInput | FoundItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FoundItem"> | string
    userId?: StringWithAggregatesFilter<"FoundItem"> | string
    category?: StringWithAggregatesFilter<"FoundItem"> | string
    description?: StringWithAggregatesFilter<"FoundItem"> | string
    dateFound?: DateTimeNullableWithAggregatesFilter<"FoundItem"> | Date | string | null
    locationFound?: StringNullableWithAggregatesFilter<"FoundItem"> | string | null
    contactPhone?: StringNullableWithAggregatesFilter<"FoundItem"> | string | null
    contactEmail?: StringNullableWithAggregatesFilter<"FoundItem"> | string | null
    images?: StringNullableWithAggregatesFilter<"FoundItem"> | string | null
    status?: EnumItemStatusWithAggregatesFilter<"FoundItem"> | $Enums.ItemStatus
    createdAt?: DateTimeWithAggregatesFilter<"FoundItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FoundItem"> | Date | string
  }

  export type ClaimWhereInput = {
    AND?: ClaimWhereInput | ClaimWhereInput[]
    OR?: ClaimWhereInput[]
    NOT?: ClaimWhereInput | ClaimWhereInput[]
    id?: StringFilter<"Claim"> | string
    itemId?: StringFilter<"Claim"> | string
    description?: StringFilter<"Claim"> | string
    contactPhone?: StringNullableFilter<"Claim"> | string | null
    contactEmail?: StringNullableFilter<"Claim"> | string | null
    status?: EnumClaimStatusFilter<"Claim"> | $Enums.ClaimStatus
    createdAt?: DateTimeFilter<"Claim"> | Date | string
    updatedAt?: DateTimeFilter<"Claim"> | Date | string
    userId?: StringFilter<"Claim"> | string
    lostItemId?: StringNullableFilter<"Claim"> | string | null
    foundItemId?: StringNullableFilter<"Claim"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    lostItem?: XOR<LostItemNullableRelationFilter, LostItemWhereInput> | null
    foundItem?: XOR<FoundItemNullableRelationFilter, FoundItemWhereInput> | null
  }

  export type ClaimOrderByWithRelationInput = {
    id?: SortOrder
    itemId?: SortOrder
    description?: SortOrder
    contactPhone?: SortOrderInput | SortOrder
    contactEmail?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    lostItemId?: SortOrderInput | SortOrder
    foundItemId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    lostItem?: LostItemOrderByWithRelationInput
    foundItem?: FoundItemOrderByWithRelationInput
  }

  export type ClaimWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClaimWhereInput | ClaimWhereInput[]
    OR?: ClaimWhereInput[]
    NOT?: ClaimWhereInput | ClaimWhereInput[]
    itemId?: StringFilter<"Claim"> | string
    description?: StringFilter<"Claim"> | string
    contactPhone?: StringNullableFilter<"Claim"> | string | null
    contactEmail?: StringNullableFilter<"Claim"> | string | null
    status?: EnumClaimStatusFilter<"Claim"> | $Enums.ClaimStatus
    createdAt?: DateTimeFilter<"Claim"> | Date | string
    updatedAt?: DateTimeFilter<"Claim"> | Date | string
    userId?: StringFilter<"Claim"> | string
    lostItemId?: StringNullableFilter<"Claim"> | string | null
    foundItemId?: StringNullableFilter<"Claim"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    lostItem?: XOR<LostItemNullableRelationFilter, LostItemWhereInput> | null
    foundItem?: XOR<FoundItemNullableRelationFilter, FoundItemWhereInput> | null
  }, "id">

  export type ClaimOrderByWithAggregationInput = {
    id?: SortOrder
    itemId?: SortOrder
    description?: SortOrder
    contactPhone?: SortOrderInput | SortOrder
    contactEmail?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    lostItemId?: SortOrderInput | SortOrder
    foundItemId?: SortOrderInput | SortOrder
    _count?: ClaimCountOrderByAggregateInput
    _max?: ClaimMaxOrderByAggregateInput
    _min?: ClaimMinOrderByAggregateInput
  }

  export type ClaimScalarWhereWithAggregatesInput = {
    AND?: ClaimScalarWhereWithAggregatesInput | ClaimScalarWhereWithAggregatesInput[]
    OR?: ClaimScalarWhereWithAggregatesInput[]
    NOT?: ClaimScalarWhereWithAggregatesInput | ClaimScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Claim"> | string
    itemId?: StringWithAggregatesFilter<"Claim"> | string
    description?: StringWithAggregatesFilter<"Claim"> | string
    contactPhone?: StringNullableWithAggregatesFilter<"Claim"> | string | null
    contactEmail?: StringNullableWithAggregatesFilter<"Claim"> | string | null
    status?: EnumClaimStatusWithAggregatesFilter<"Claim"> | $Enums.ClaimStatus
    createdAt?: DateTimeWithAggregatesFilter<"Claim"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Claim"> | Date | string
    userId?: StringWithAggregatesFilter<"Claim"> | string
    lostItemId?: StringNullableWithAggregatesFilter<"Claim"> | string | null
    foundItemId?: StringNullableWithAggregatesFilter<"Claim"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    name: string
    username: string
    email: string
    password: string
    role?: string | null
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    lostItems?: LostItemCreateNestedManyWithoutUserInput
    foundItems?: FoundItemCreateNestedManyWithoutUserInput
    claimRequests?: ClaimCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    username: string
    email: string
    password: string
    role?: string | null
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    lostItems?: LostItemUncheckedCreateNestedManyWithoutUserInput
    foundItems?: FoundItemUncheckedCreateNestedManyWithoutUserInput
    claimRequests?: ClaimUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lostItems?: LostItemUpdateManyWithoutUserNestedInput
    foundItems?: FoundItemUpdateManyWithoutUserNestedInput
    claimRequests?: ClaimUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lostItems?: LostItemUncheckedUpdateManyWithoutUserNestedInput
    foundItems?: FoundItemUncheckedUpdateManyWithoutUserNestedInput
    claimRequests?: ClaimUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    username: string
    email: string
    password: string
    role?: string | null
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LostItemCreateInput = {
    id?: string
    category: string
    description: string
    dateLost?: Date | string | null
    locationLost?: string | null
    contactPhone?: string | null
    contactEmail?: string | null
    images?: string | null
    status?: $Enums.ItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLostItemsInput
    claimRequests?: ClaimCreateNestedManyWithoutLostItemInput
  }

  export type LostItemUncheckedCreateInput = {
    id?: string
    category: string
    description: string
    dateLost?: Date | string | null
    locationLost?: string | null
    contactPhone?: string | null
    contactEmail?: string | null
    images?: string | null
    status?: $Enums.ItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    claimRequests?: ClaimUncheckedCreateNestedManyWithoutLostItemInput
  }

  export type LostItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dateLost?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    locationLost?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLostItemsNestedInput
    claimRequests?: ClaimUpdateManyWithoutLostItemNestedInput
  }

  export type LostItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dateLost?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    locationLost?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    claimRequests?: ClaimUncheckedUpdateManyWithoutLostItemNestedInput
  }

  export type LostItemCreateManyInput = {
    id?: string
    category: string
    description: string
    dateLost?: Date | string | null
    locationLost?: string | null
    contactPhone?: string | null
    contactEmail?: string | null
    images?: string | null
    status?: $Enums.ItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type LostItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dateLost?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    locationLost?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LostItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dateLost?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    locationLost?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type FoundItemCreateInput = {
    id?: string
    category: string
    description: string
    dateFound?: Date | string | null
    locationFound?: string | null
    contactPhone?: string | null
    contactEmail?: string | null
    images?: string | null
    status?: $Enums.ItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFoundItemsInput
    claims?: ClaimCreateNestedManyWithoutFoundItemInput
  }

  export type FoundItemUncheckedCreateInput = {
    id?: string
    userId: string
    category: string
    description: string
    dateFound?: Date | string | null
    locationFound?: string | null
    contactPhone?: string | null
    contactEmail?: string | null
    images?: string | null
    status?: $Enums.ItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    claims?: ClaimUncheckedCreateNestedManyWithoutFoundItemInput
  }

  export type FoundItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dateFound?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    locationFound?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFoundItemsNestedInput
    claims?: ClaimUpdateManyWithoutFoundItemNestedInput
  }

  export type FoundItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dateFound?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    locationFound?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    claims?: ClaimUncheckedUpdateManyWithoutFoundItemNestedInput
  }

  export type FoundItemCreateManyInput = {
    id?: string
    userId: string
    category: string
    description: string
    dateFound?: Date | string | null
    locationFound?: string | null
    contactPhone?: string | null
    contactEmail?: string | null
    images?: string | null
    status?: $Enums.ItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoundItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dateFound?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    locationFound?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoundItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dateFound?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    locationFound?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClaimCreateInput = {
    id?: string
    itemId: string
    description: string
    contactPhone?: string | null
    contactEmail?: string | null
    status?: $Enums.ClaimStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutClaimRequestsInput
    lostItem?: LostItemCreateNestedOneWithoutClaimRequestsInput
    foundItem?: FoundItemCreateNestedOneWithoutClaimsInput
  }

  export type ClaimUncheckedCreateInput = {
    id?: string
    itemId: string
    description: string
    contactPhone?: string | null
    contactEmail?: string | null
    status?: $Enums.ClaimStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    lostItemId?: string | null
    foundItemId?: string | null
  }

  export type ClaimUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumClaimStatusFieldUpdateOperationsInput | $Enums.ClaimStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutClaimRequestsNestedInput
    lostItem?: LostItemUpdateOneWithoutClaimRequestsNestedInput
    foundItem?: FoundItemUpdateOneWithoutClaimsNestedInput
  }

  export type ClaimUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumClaimStatusFieldUpdateOperationsInput | $Enums.ClaimStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    lostItemId?: NullableStringFieldUpdateOperationsInput | string | null
    foundItemId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClaimCreateManyInput = {
    id?: string
    itemId: string
    description: string
    contactPhone?: string | null
    contactEmail?: string | null
    status?: $Enums.ClaimStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    lostItemId?: string | null
    foundItemId?: string | null
  }

  export type ClaimUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumClaimStatusFieldUpdateOperationsInput | $Enums.ClaimStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClaimUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumClaimStatusFieldUpdateOperationsInput | $Enums.ClaimStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    lostItemId?: NullableStringFieldUpdateOperationsInput | string | null
    foundItemId?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
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

  export type LostItemListRelationFilter = {
    every?: LostItemWhereInput
    some?: LostItemWhereInput
    none?: LostItemWhereInput
  }

  export type FoundItemListRelationFilter = {
    every?: FoundItemWhereInput
    some?: FoundItemWhereInput
    none?: FoundItemWhereInput
  }

  export type ClaimListRelationFilter = {
    every?: ClaimWhereInput
    some?: ClaimWhereInput
    none?: ClaimWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LostItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FoundItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClaimOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
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

  export type EnumItemStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemStatus | EnumItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumItemStatusFilter<$PrismaModel> | $Enums.ItemStatus
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type LostItemCountOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    description?: SortOrder
    dateLost?: SortOrder
    locationLost?: SortOrder
    contactPhone?: SortOrder
    contactEmail?: SortOrder
    images?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type LostItemMaxOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    description?: SortOrder
    dateLost?: SortOrder
    locationLost?: SortOrder
    contactPhone?: SortOrder
    contactEmail?: SortOrder
    images?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type LostItemMinOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    description?: SortOrder
    dateLost?: SortOrder
    locationLost?: SortOrder
    contactPhone?: SortOrder
    contactEmail?: SortOrder
    images?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
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

  export type EnumItemStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemStatus | EnumItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumItemStatusWithAggregatesFilter<$PrismaModel> | $Enums.ItemStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumItemStatusFilter<$PrismaModel>
    _max?: NestedEnumItemStatusFilter<$PrismaModel>
  }

  export type FoundItemCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    category?: SortOrder
    description?: SortOrder
    dateFound?: SortOrder
    locationFound?: SortOrder
    contactPhone?: SortOrder
    contactEmail?: SortOrder
    images?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoundItemMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    category?: SortOrder
    description?: SortOrder
    dateFound?: SortOrder
    locationFound?: SortOrder
    contactPhone?: SortOrder
    contactEmail?: SortOrder
    images?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoundItemMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    category?: SortOrder
    description?: SortOrder
    dateFound?: SortOrder
    locationFound?: SortOrder
    contactPhone?: SortOrder
    contactEmail?: SortOrder
    images?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumClaimStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ClaimStatus | EnumClaimStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ClaimStatus[] | ListEnumClaimStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClaimStatus[] | ListEnumClaimStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumClaimStatusFilter<$PrismaModel> | $Enums.ClaimStatus
  }

  export type LostItemNullableRelationFilter = {
    is?: LostItemWhereInput | null
    isNot?: LostItemWhereInput | null
  }

  export type FoundItemNullableRelationFilter = {
    is?: FoundItemWhereInput | null
    isNot?: FoundItemWhereInput | null
  }

  export type ClaimCountOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    description?: SortOrder
    contactPhone?: SortOrder
    contactEmail?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    lostItemId?: SortOrder
    foundItemId?: SortOrder
  }

  export type ClaimMaxOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    description?: SortOrder
    contactPhone?: SortOrder
    contactEmail?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    lostItemId?: SortOrder
    foundItemId?: SortOrder
  }

  export type ClaimMinOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    description?: SortOrder
    contactPhone?: SortOrder
    contactEmail?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    lostItemId?: SortOrder
    foundItemId?: SortOrder
  }

  export type EnumClaimStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClaimStatus | EnumClaimStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ClaimStatus[] | ListEnumClaimStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClaimStatus[] | ListEnumClaimStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumClaimStatusWithAggregatesFilter<$PrismaModel> | $Enums.ClaimStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumClaimStatusFilter<$PrismaModel>
    _max?: NestedEnumClaimStatusFilter<$PrismaModel>
  }

  export type LostItemCreateNestedManyWithoutUserInput = {
    create?: XOR<LostItemCreateWithoutUserInput, LostItemUncheckedCreateWithoutUserInput> | LostItemCreateWithoutUserInput[] | LostItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LostItemCreateOrConnectWithoutUserInput | LostItemCreateOrConnectWithoutUserInput[]
    createMany?: LostItemCreateManyUserInputEnvelope
    connect?: LostItemWhereUniqueInput | LostItemWhereUniqueInput[]
  }

  export type FoundItemCreateNestedManyWithoutUserInput = {
    create?: XOR<FoundItemCreateWithoutUserInput, FoundItemUncheckedCreateWithoutUserInput> | FoundItemCreateWithoutUserInput[] | FoundItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FoundItemCreateOrConnectWithoutUserInput | FoundItemCreateOrConnectWithoutUserInput[]
    createMany?: FoundItemCreateManyUserInputEnvelope
    connect?: FoundItemWhereUniqueInput | FoundItemWhereUniqueInput[]
  }

  export type ClaimCreateNestedManyWithoutUserInput = {
    create?: XOR<ClaimCreateWithoutUserInput, ClaimUncheckedCreateWithoutUserInput> | ClaimCreateWithoutUserInput[] | ClaimUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutUserInput | ClaimCreateOrConnectWithoutUserInput[]
    createMany?: ClaimCreateManyUserInputEnvelope
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
  }

  export type LostItemUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LostItemCreateWithoutUserInput, LostItemUncheckedCreateWithoutUserInput> | LostItemCreateWithoutUserInput[] | LostItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LostItemCreateOrConnectWithoutUserInput | LostItemCreateOrConnectWithoutUserInput[]
    createMany?: LostItemCreateManyUserInputEnvelope
    connect?: LostItemWhereUniqueInput | LostItemWhereUniqueInput[]
  }

  export type FoundItemUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FoundItemCreateWithoutUserInput, FoundItemUncheckedCreateWithoutUserInput> | FoundItemCreateWithoutUserInput[] | FoundItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FoundItemCreateOrConnectWithoutUserInput | FoundItemCreateOrConnectWithoutUserInput[]
    createMany?: FoundItemCreateManyUserInputEnvelope
    connect?: FoundItemWhereUniqueInput | FoundItemWhereUniqueInput[]
  }

  export type ClaimUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ClaimCreateWithoutUserInput, ClaimUncheckedCreateWithoutUserInput> | ClaimCreateWithoutUserInput[] | ClaimUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutUserInput | ClaimCreateOrConnectWithoutUserInput[]
    createMany?: ClaimCreateManyUserInputEnvelope
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LostItemUpdateManyWithoutUserNestedInput = {
    create?: XOR<LostItemCreateWithoutUserInput, LostItemUncheckedCreateWithoutUserInput> | LostItemCreateWithoutUserInput[] | LostItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LostItemCreateOrConnectWithoutUserInput | LostItemCreateOrConnectWithoutUserInput[]
    upsert?: LostItemUpsertWithWhereUniqueWithoutUserInput | LostItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LostItemCreateManyUserInputEnvelope
    set?: LostItemWhereUniqueInput | LostItemWhereUniqueInput[]
    disconnect?: LostItemWhereUniqueInput | LostItemWhereUniqueInput[]
    delete?: LostItemWhereUniqueInput | LostItemWhereUniqueInput[]
    connect?: LostItemWhereUniqueInput | LostItemWhereUniqueInput[]
    update?: LostItemUpdateWithWhereUniqueWithoutUserInput | LostItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LostItemUpdateManyWithWhereWithoutUserInput | LostItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LostItemScalarWhereInput | LostItemScalarWhereInput[]
  }

  export type FoundItemUpdateManyWithoutUserNestedInput = {
    create?: XOR<FoundItemCreateWithoutUserInput, FoundItemUncheckedCreateWithoutUserInput> | FoundItemCreateWithoutUserInput[] | FoundItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FoundItemCreateOrConnectWithoutUserInput | FoundItemCreateOrConnectWithoutUserInput[]
    upsert?: FoundItemUpsertWithWhereUniqueWithoutUserInput | FoundItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FoundItemCreateManyUserInputEnvelope
    set?: FoundItemWhereUniqueInput | FoundItemWhereUniqueInput[]
    disconnect?: FoundItemWhereUniqueInput | FoundItemWhereUniqueInput[]
    delete?: FoundItemWhereUniqueInput | FoundItemWhereUniqueInput[]
    connect?: FoundItemWhereUniqueInput | FoundItemWhereUniqueInput[]
    update?: FoundItemUpdateWithWhereUniqueWithoutUserInput | FoundItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FoundItemUpdateManyWithWhereWithoutUserInput | FoundItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FoundItemScalarWhereInput | FoundItemScalarWhereInput[]
  }

  export type ClaimUpdateManyWithoutUserNestedInput = {
    create?: XOR<ClaimCreateWithoutUserInput, ClaimUncheckedCreateWithoutUserInput> | ClaimCreateWithoutUserInput[] | ClaimUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutUserInput | ClaimCreateOrConnectWithoutUserInput[]
    upsert?: ClaimUpsertWithWhereUniqueWithoutUserInput | ClaimUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ClaimCreateManyUserInputEnvelope
    set?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    disconnect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    delete?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    update?: ClaimUpdateWithWhereUniqueWithoutUserInput | ClaimUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ClaimUpdateManyWithWhereWithoutUserInput | ClaimUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ClaimScalarWhereInput | ClaimScalarWhereInput[]
  }

  export type LostItemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LostItemCreateWithoutUserInput, LostItemUncheckedCreateWithoutUserInput> | LostItemCreateWithoutUserInput[] | LostItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LostItemCreateOrConnectWithoutUserInput | LostItemCreateOrConnectWithoutUserInput[]
    upsert?: LostItemUpsertWithWhereUniqueWithoutUserInput | LostItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LostItemCreateManyUserInputEnvelope
    set?: LostItemWhereUniqueInput | LostItemWhereUniqueInput[]
    disconnect?: LostItemWhereUniqueInput | LostItemWhereUniqueInput[]
    delete?: LostItemWhereUniqueInput | LostItemWhereUniqueInput[]
    connect?: LostItemWhereUniqueInput | LostItemWhereUniqueInput[]
    update?: LostItemUpdateWithWhereUniqueWithoutUserInput | LostItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LostItemUpdateManyWithWhereWithoutUserInput | LostItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LostItemScalarWhereInput | LostItemScalarWhereInput[]
  }

  export type FoundItemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FoundItemCreateWithoutUserInput, FoundItemUncheckedCreateWithoutUserInput> | FoundItemCreateWithoutUserInput[] | FoundItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FoundItemCreateOrConnectWithoutUserInput | FoundItemCreateOrConnectWithoutUserInput[]
    upsert?: FoundItemUpsertWithWhereUniqueWithoutUserInput | FoundItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FoundItemCreateManyUserInputEnvelope
    set?: FoundItemWhereUniqueInput | FoundItemWhereUniqueInput[]
    disconnect?: FoundItemWhereUniqueInput | FoundItemWhereUniqueInput[]
    delete?: FoundItemWhereUniqueInput | FoundItemWhereUniqueInput[]
    connect?: FoundItemWhereUniqueInput | FoundItemWhereUniqueInput[]
    update?: FoundItemUpdateWithWhereUniqueWithoutUserInput | FoundItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FoundItemUpdateManyWithWhereWithoutUserInput | FoundItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FoundItemScalarWhereInput | FoundItemScalarWhereInput[]
  }

  export type ClaimUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ClaimCreateWithoutUserInput, ClaimUncheckedCreateWithoutUserInput> | ClaimCreateWithoutUserInput[] | ClaimUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutUserInput | ClaimCreateOrConnectWithoutUserInput[]
    upsert?: ClaimUpsertWithWhereUniqueWithoutUserInput | ClaimUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ClaimCreateManyUserInputEnvelope
    set?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    disconnect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    delete?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    update?: ClaimUpdateWithWhereUniqueWithoutUserInput | ClaimUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ClaimUpdateManyWithWhereWithoutUserInput | ClaimUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ClaimScalarWhereInput | ClaimScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLostItemsInput = {
    create?: XOR<UserCreateWithoutLostItemsInput, UserUncheckedCreateWithoutLostItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLostItemsInput
    connect?: UserWhereUniqueInput
  }

  export type ClaimCreateNestedManyWithoutLostItemInput = {
    create?: XOR<ClaimCreateWithoutLostItemInput, ClaimUncheckedCreateWithoutLostItemInput> | ClaimCreateWithoutLostItemInput[] | ClaimUncheckedCreateWithoutLostItemInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutLostItemInput | ClaimCreateOrConnectWithoutLostItemInput[]
    createMany?: ClaimCreateManyLostItemInputEnvelope
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
  }

  export type ClaimUncheckedCreateNestedManyWithoutLostItemInput = {
    create?: XOR<ClaimCreateWithoutLostItemInput, ClaimUncheckedCreateWithoutLostItemInput> | ClaimCreateWithoutLostItemInput[] | ClaimUncheckedCreateWithoutLostItemInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutLostItemInput | ClaimCreateOrConnectWithoutLostItemInput[]
    createMany?: ClaimCreateManyLostItemInputEnvelope
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumItemStatusFieldUpdateOperationsInput = {
    set?: $Enums.ItemStatus
  }

  export type UserUpdateOneRequiredWithoutLostItemsNestedInput = {
    create?: XOR<UserCreateWithoutLostItemsInput, UserUncheckedCreateWithoutLostItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLostItemsInput
    upsert?: UserUpsertWithoutLostItemsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLostItemsInput, UserUpdateWithoutLostItemsInput>, UserUncheckedUpdateWithoutLostItemsInput>
  }

  export type ClaimUpdateManyWithoutLostItemNestedInput = {
    create?: XOR<ClaimCreateWithoutLostItemInput, ClaimUncheckedCreateWithoutLostItemInput> | ClaimCreateWithoutLostItemInput[] | ClaimUncheckedCreateWithoutLostItemInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutLostItemInput | ClaimCreateOrConnectWithoutLostItemInput[]
    upsert?: ClaimUpsertWithWhereUniqueWithoutLostItemInput | ClaimUpsertWithWhereUniqueWithoutLostItemInput[]
    createMany?: ClaimCreateManyLostItemInputEnvelope
    set?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    disconnect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    delete?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    update?: ClaimUpdateWithWhereUniqueWithoutLostItemInput | ClaimUpdateWithWhereUniqueWithoutLostItemInput[]
    updateMany?: ClaimUpdateManyWithWhereWithoutLostItemInput | ClaimUpdateManyWithWhereWithoutLostItemInput[]
    deleteMany?: ClaimScalarWhereInput | ClaimScalarWhereInput[]
  }

  export type ClaimUncheckedUpdateManyWithoutLostItemNestedInput = {
    create?: XOR<ClaimCreateWithoutLostItemInput, ClaimUncheckedCreateWithoutLostItemInput> | ClaimCreateWithoutLostItemInput[] | ClaimUncheckedCreateWithoutLostItemInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutLostItemInput | ClaimCreateOrConnectWithoutLostItemInput[]
    upsert?: ClaimUpsertWithWhereUniqueWithoutLostItemInput | ClaimUpsertWithWhereUniqueWithoutLostItemInput[]
    createMany?: ClaimCreateManyLostItemInputEnvelope
    set?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    disconnect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    delete?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    update?: ClaimUpdateWithWhereUniqueWithoutLostItemInput | ClaimUpdateWithWhereUniqueWithoutLostItemInput[]
    updateMany?: ClaimUpdateManyWithWhereWithoutLostItemInput | ClaimUpdateManyWithWhereWithoutLostItemInput[]
    deleteMany?: ClaimScalarWhereInput | ClaimScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFoundItemsInput = {
    create?: XOR<UserCreateWithoutFoundItemsInput, UserUncheckedCreateWithoutFoundItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFoundItemsInput
    connect?: UserWhereUniqueInput
  }

  export type ClaimCreateNestedManyWithoutFoundItemInput = {
    create?: XOR<ClaimCreateWithoutFoundItemInput, ClaimUncheckedCreateWithoutFoundItemInput> | ClaimCreateWithoutFoundItemInput[] | ClaimUncheckedCreateWithoutFoundItemInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutFoundItemInput | ClaimCreateOrConnectWithoutFoundItemInput[]
    createMany?: ClaimCreateManyFoundItemInputEnvelope
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
  }

  export type ClaimUncheckedCreateNestedManyWithoutFoundItemInput = {
    create?: XOR<ClaimCreateWithoutFoundItemInput, ClaimUncheckedCreateWithoutFoundItemInput> | ClaimCreateWithoutFoundItemInput[] | ClaimUncheckedCreateWithoutFoundItemInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutFoundItemInput | ClaimCreateOrConnectWithoutFoundItemInput[]
    createMany?: ClaimCreateManyFoundItemInputEnvelope
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutFoundItemsNestedInput = {
    create?: XOR<UserCreateWithoutFoundItemsInput, UserUncheckedCreateWithoutFoundItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFoundItemsInput
    upsert?: UserUpsertWithoutFoundItemsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFoundItemsInput, UserUpdateWithoutFoundItemsInput>, UserUncheckedUpdateWithoutFoundItemsInput>
  }

  export type ClaimUpdateManyWithoutFoundItemNestedInput = {
    create?: XOR<ClaimCreateWithoutFoundItemInput, ClaimUncheckedCreateWithoutFoundItemInput> | ClaimCreateWithoutFoundItemInput[] | ClaimUncheckedCreateWithoutFoundItemInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutFoundItemInput | ClaimCreateOrConnectWithoutFoundItemInput[]
    upsert?: ClaimUpsertWithWhereUniqueWithoutFoundItemInput | ClaimUpsertWithWhereUniqueWithoutFoundItemInput[]
    createMany?: ClaimCreateManyFoundItemInputEnvelope
    set?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    disconnect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    delete?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    update?: ClaimUpdateWithWhereUniqueWithoutFoundItemInput | ClaimUpdateWithWhereUniqueWithoutFoundItemInput[]
    updateMany?: ClaimUpdateManyWithWhereWithoutFoundItemInput | ClaimUpdateManyWithWhereWithoutFoundItemInput[]
    deleteMany?: ClaimScalarWhereInput | ClaimScalarWhereInput[]
  }

  export type ClaimUncheckedUpdateManyWithoutFoundItemNestedInput = {
    create?: XOR<ClaimCreateWithoutFoundItemInput, ClaimUncheckedCreateWithoutFoundItemInput> | ClaimCreateWithoutFoundItemInput[] | ClaimUncheckedCreateWithoutFoundItemInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutFoundItemInput | ClaimCreateOrConnectWithoutFoundItemInput[]
    upsert?: ClaimUpsertWithWhereUniqueWithoutFoundItemInput | ClaimUpsertWithWhereUniqueWithoutFoundItemInput[]
    createMany?: ClaimCreateManyFoundItemInputEnvelope
    set?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    disconnect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    delete?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    update?: ClaimUpdateWithWhereUniqueWithoutFoundItemInput | ClaimUpdateWithWhereUniqueWithoutFoundItemInput[]
    updateMany?: ClaimUpdateManyWithWhereWithoutFoundItemInput | ClaimUpdateManyWithWhereWithoutFoundItemInput[]
    deleteMany?: ClaimScalarWhereInput | ClaimScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutClaimRequestsInput = {
    create?: XOR<UserCreateWithoutClaimRequestsInput, UserUncheckedCreateWithoutClaimRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutClaimRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type LostItemCreateNestedOneWithoutClaimRequestsInput = {
    create?: XOR<LostItemCreateWithoutClaimRequestsInput, LostItemUncheckedCreateWithoutClaimRequestsInput>
    connectOrCreate?: LostItemCreateOrConnectWithoutClaimRequestsInput
    connect?: LostItemWhereUniqueInput
  }

  export type FoundItemCreateNestedOneWithoutClaimsInput = {
    create?: XOR<FoundItemCreateWithoutClaimsInput, FoundItemUncheckedCreateWithoutClaimsInput>
    connectOrCreate?: FoundItemCreateOrConnectWithoutClaimsInput
    connect?: FoundItemWhereUniqueInput
  }

  export type EnumClaimStatusFieldUpdateOperationsInput = {
    set?: $Enums.ClaimStatus
  }

  export type UserUpdateOneRequiredWithoutClaimRequestsNestedInput = {
    create?: XOR<UserCreateWithoutClaimRequestsInput, UserUncheckedCreateWithoutClaimRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutClaimRequestsInput
    upsert?: UserUpsertWithoutClaimRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutClaimRequestsInput, UserUpdateWithoutClaimRequestsInput>, UserUncheckedUpdateWithoutClaimRequestsInput>
  }

  export type LostItemUpdateOneWithoutClaimRequestsNestedInput = {
    create?: XOR<LostItemCreateWithoutClaimRequestsInput, LostItemUncheckedCreateWithoutClaimRequestsInput>
    connectOrCreate?: LostItemCreateOrConnectWithoutClaimRequestsInput
    upsert?: LostItemUpsertWithoutClaimRequestsInput
    disconnect?: LostItemWhereInput | boolean
    delete?: LostItemWhereInput | boolean
    connect?: LostItemWhereUniqueInput
    update?: XOR<XOR<LostItemUpdateToOneWithWhereWithoutClaimRequestsInput, LostItemUpdateWithoutClaimRequestsInput>, LostItemUncheckedUpdateWithoutClaimRequestsInput>
  }

  export type FoundItemUpdateOneWithoutClaimsNestedInput = {
    create?: XOR<FoundItemCreateWithoutClaimsInput, FoundItemUncheckedCreateWithoutClaimsInput>
    connectOrCreate?: FoundItemCreateOrConnectWithoutClaimsInput
    upsert?: FoundItemUpsertWithoutClaimsInput
    disconnect?: FoundItemWhereInput | boolean
    delete?: FoundItemWhereInput | boolean
    connect?: FoundItemWhereUniqueInput
    update?: XOR<XOR<FoundItemUpdateToOneWithWhereWithoutClaimsInput, FoundItemUpdateWithoutClaimsInput>, FoundItemUncheckedUpdateWithoutClaimsInput>
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

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
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

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
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

  export type NestedEnumItemStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemStatus | EnumItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumItemStatusFilter<$PrismaModel> | $Enums.ItemStatus
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

  export type NestedEnumItemStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemStatus | EnumItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumItemStatusWithAggregatesFilter<$PrismaModel> | $Enums.ItemStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumItemStatusFilter<$PrismaModel>
    _max?: NestedEnumItemStatusFilter<$PrismaModel>
  }

  export type NestedEnumClaimStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ClaimStatus | EnumClaimStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ClaimStatus[] | ListEnumClaimStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClaimStatus[] | ListEnumClaimStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumClaimStatusFilter<$PrismaModel> | $Enums.ClaimStatus
  }

  export type NestedEnumClaimStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClaimStatus | EnumClaimStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ClaimStatus[] | ListEnumClaimStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClaimStatus[] | ListEnumClaimStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumClaimStatusWithAggregatesFilter<$PrismaModel> | $Enums.ClaimStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumClaimStatusFilter<$PrismaModel>
    _max?: NestedEnumClaimStatusFilter<$PrismaModel>
  }

  export type LostItemCreateWithoutUserInput = {
    id?: string
    category: string
    description: string
    dateLost?: Date | string | null
    locationLost?: string | null
    contactPhone?: string | null
    contactEmail?: string | null
    images?: string | null
    status?: $Enums.ItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    claimRequests?: ClaimCreateNestedManyWithoutLostItemInput
  }

  export type LostItemUncheckedCreateWithoutUserInput = {
    id?: string
    category: string
    description: string
    dateLost?: Date | string | null
    locationLost?: string | null
    contactPhone?: string | null
    contactEmail?: string | null
    images?: string | null
    status?: $Enums.ItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    claimRequests?: ClaimUncheckedCreateNestedManyWithoutLostItemInput
  }

  export type LostItemCreateOrConnectWithoutUserInput = {
    where: LostItemWhereUniqueInput
    create: XOR<LostItemCreateWithoutUserInput, LostItemUncheckedCreateWithoutUserInput>
  }

  export type LostItemCreateManyUserInputEnvelope = {
    data: LostItemCreateManyUserInput | LostItemCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FoundItemCreateWithoutUserInput = {
    id?: string
    category: string
    description: string
    dateFound?: Date | string | null
    locationFound?: string | null
    contactPhone?: string | null
    contactEmail?: string | null
    images?: string | null
    status?: $Enums.ItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    claims?: ClaimCreateNestedManyWithoutFoundItemInput
  }

  export type FoundItemUncheckedCreateWithoutUserInput = {
    id?: string
    category: string
    description: string
    dateFound?: Date | string | null
    locationFound?: string | null
    contactPhone?: string | null
    contactEmail?: string | null
    images?: string | null
    status?: $Enums.ItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    claims?: ClaimUncheckedCreateNestedManyWithoutFoundItemInput
  }

  export type FoundItemCreateOrConnectWithoutUserInput = {
    where: FoundItemWhereUniqueInput
    create: XOR<FoundItemCreateWithoutUserInput, FoundItemUncheckedCreateWithoutUserInput>
  }

  export type FoundItemCreateManyUserInputEnvelope = {
    data: FoundItemCreateManyUserInput | FoundItemCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ClaimCreateWithoutUserInput = {
    id?: string
    itemId: string
    description: string
    contactPhone?: string | null
    contactEmail?: string | null
    status?: $Enums.ClaimStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    lostItem?: LostItemCreateNestedOneWithoutClaimRequestsInput
    foundItem?: FoundItemCreateNestedOneWithoutClaimsInput
  }

  export type ClaimUncheckedCreateWithoutUserInput = {
    id?: string
    itemId: string
    description: string
    contactPhone?: string | null
    contactEmail?: string | null
    status?: $Enums.ClaimStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    lostItemId?: string | null
    foundItemId?: string | null
  }

  export type ClaimCreateOrConnectWithoutUserInput = {
    where: ClaimWhereUniqueInput
    create: XOR<ClaimCreateWithoutUserInput, ClaimUncheckedCreateWithoutUserInput>
  }

  export type ClaimCreateManyUserInputEnvelope = {
    data: ClaimCreateManyUserInput | ClaimCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LostItemUpsertWithWhereUniqueWithoutUserInput = {
    where: LostItemWhereUniqueInput
    update: XOR<LostItemUpdateWithoutUserInput, LostItemUncheckedUpdateWithoutUserInput>
    create: XOR<LostItemCreateWithoutUserInput, LostItemUncheckedCreateWithoutUserInput>
  }

  export type LostItemUpdateWithWhereUniqueWithoutUserInput = {
    where: LostItemWhereUniqueInput
    data: XOR<LostItemUpdateWithoutUserInput, LostItemUncheckedUpdateWithoutUserInput>
  }

  export type LostItemUpdateManyWithWhereWithoutUserInput = {
    where: LostItemScalarWhereInput
    data: XOR<LostItemUpdateManyMutationInput, LostItemUncheckedUpdateManyWithoutUserInput>
  }

  export type LostItemScalarWhereInput = {
    AND?: LostItemScalarWhereInput | LostItemScalarWhereInput[]
    OR?: LostItemScalarWhereInput[]
    NOT?: LostItemScalarWhereInput | LostItemScalarWhereInput[]
    id?: StringFilter<"LostItem"> | string
    category?: StringFilter<"LostItem"> | string
    description?: StringFilter<"LostItem"> | string
    dateLost?: DateTimeNullableFilter<"LostItem"> | Date | string | null
    locationLost?: StringNullableFilter<"LostItem"> | string | null
    contactPhone?: StringNullableFilter<"LostItem"> | string | null
    contactEmail?: StringNullableFilter<"LostItem"> | string | null
    images?: StringNullableFilter<"LostItem"> | string | null
    status?: EnumItemStatusFilter<"LostItem"> | $Enums.ItemStatus
    createdAt?: DateTimeFilter<"LostItem"> | Date | string
    updatedAt?: DateTimeFilter<"LostItem"> | Date | string
    userId?: StringFilter<"LostItem"> | string
  }

  export type FoundItemUpsertWithWhereUniqueWithoutUserInput = {
    where: FoundItemWhereUniqueInput
    update: XOR<FoundItemUpdateWithoutUserInput, FoundItemUncheckedUpdateWithoutUserInput>
    create: XOR<FoundItemCreateWithoutUserInput, FoundItemUncheckedCreateWithoutUserInput>
  }

  export type FoundItemUpdateWithWhereUniqueWithoutUserInput = {
    where: FoundItemWhereUniqueInput
    data: XOR<FoundItemUpdateWithoutUserInput, FoundItemUncheckedUpdateWithoutUserInput>
  }

  export type FoundItemUpdateManyWithWhereWithoutUserInput = {
    where: FoundItemScalarWhereInput
    data: XOR<FoundItemUpdateManyMutationInput, FoundItemUncheckedUpdateManyWithoutUserInput>
  }

  export type FoundItemScalarWhereInput = {
    AND?: FoundItemScalarWhereInput | FoundItemScalarWhereInput[]
    OR?: FoundItemScalarWhereInput[]
    NOT?: FoundItemScalarWhereInput | FoundItemScalarWhereInput[]
    id?: StringFilter<"FoundItem"> | string
    userId?: StringFilter<"FoundItem"> | string
    category?: StringFilter<"FoundItem"> | string
    description?: StringFilter<"FoundItem"> | string
    dateFound?: DateTimeNullableFilter<"FoundItem"> | Date | string | null
    locationFound?: StringNullableFilter<"FoundItem"> | string | null
    contactPhone?: StringNullableFilter<"FoundItem"> | string | null
    contactEmail?: StringNullableFilter<"FoundItem"> | string | null
    images?: StringNullableFilter<"FoundItem"> | string | null
    status?: EnumItemStatusFilter<"FoundItem"> | $Enums.ItemStatus
    createdAt?: DateTimeFilter<"FoundItem"> | Date | string
    updatedAt?: DateTimeFilter<"FoundItem"> | Date | string
  }

  export type ClaimUpsertWithWhereUniqueWithoutUserInput = {
    where: ClaimWhereUniqueInput
    update: XOR<ClaimUpdateWithoutUserInput, ClaimUncheckedUpdateWithoutUserInput>
    create: XOR<ClaimCreateWithoutUserInput, ClaimUncheckedCreateWithoutUserInput>
  }

  export type ClaimUpdateWithWhereUniqueWithoutUserInput = {
    where: ClaimWhereUniqueInput
    data: XOR<ClaimUpdateWithoutUserInput, ClaimUncheckedUpdateWithoutUserInput>
  }

  export type ClaimUpdateManyWithWhereWithoutUserInput = {
    where: ClaimScalarWhereInput
    data: XOR<ClaimUpdateManyMutationInput, ClaimUncheckedUpdateManyWithoutUserInput>
  }

  export type ClaimScalarWhereInput = {
    AND?: ClaimScalarWhereInput | ClaimScalarWhereInput[]
    OR?: ClaimScalarWhereInput[]
    NOT?: ClaimScalarWhereInput | ClaimScalarWhereInput[]
    id?: StringFilter<"Claim"> | string
    itemId?: StringFilter<"Claim"> | string
    description?: StringFilter<"Claim"> | string
    contactPhone?: StringNullableFilter<"Claim"> | string | null
    contactEmail?: StringNullableFilter<"Claim"> | string | null
    status?: EnumClaimStatusFilter<"Claim"> | $Enums.ClaimStatus
    createdAt?: DateTimeFilter<"Claim"> | Date | string
    updatedAt?: DateTimeFilter<"Claim"> | Date | string
    userId?: StringFilter<"Claim"> | string
    lostItemId?: StringNullableFilter<"Claim"> | string | null
    foundItemId?: StringNullableFilter<"Claim"> | string | null
  }

  export type UserCreateWithoutLostItemsInput = {
    id?: string
    name: string
    username: string
    email: string
    password: string
    role?: string | null
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    foundItems?: FoundItemCreateNestedManyWithoutUserInput
    claimRequests?: ClaimCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLostItemsInput = {
    id?: string
    name: string
    username: string
    email: string
    password: string
    role?: string | null
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    foundItems?: FoundItemUncheckedCreateNestedManyWithoutUserInput
    claimRequests?: ClaimUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLostItemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLostItemsInput, UserUncheckedCreateWithoutLostItemsInput>
  }

  export type ClaimCreateWithoutLostItemInput = {
    id?: string
    itemId: string
    description: string
    contactPhone?: string | null
    contactEmail?: string | null
    status?: $Enums.ClaimStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutClaimRequestsInput
    foundItem?: FoundItemCreateNestedOneWithoutClaimsInput
  }

  export type ClaimUncheckedCreateWithoutLostItemInput = {
    id?: string
    itemId: string
    description: string
    contactPhone?: string | null
    contactEmail?: string | null
    status?: $Enums.ClaimStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    foundItemId?: string | null
  }

  export type ClaimCreateOrConnectWithoutLostItemInput = {
    where: ClaimWhereUniqueInput
    create: XOR<ClaimCreateWithoutLostItemInput, ClaimUncheckedCreateWithoutLostItemInput>
  }

  export type ClaimCreateManyLostItemInputEnvelope = {
    data: ClaimCreateManyLostItemInput | ClaimCreateManyLostItemInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutLostItemsInput = {
    update: XOR<UserUpdateWithoutLostItemsInput, UserUncheckedUpdateWithoutLostItemsInput>
    create: XOR<UserCreateWithoutLostItemsInput, UserUncheckedCreateWithoutLostItemsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLostItemsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLostItemsInput, UserUncheckedUpdateWithoutLostItemsInput>
  }

  export type UserUpdateWithoutLostItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foundItems?: FoundItemUpdateManyWithoutUserNestedInput
    claimRequests?: ClaimUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLostItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foundItems?: FoundItemUncheckedUpdateManyWithoutUserNestedInput
    claimRequests?: ClaimUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ClaimUpsertWithWhereUniqueWithoutLostItemInput = {
    where: ClaimWhereUniqueInput
    update: XOR<ClaimUpdateWithoutLostItemInput, ClaimUncheckedUpdateWithoutLostItemInput>
    create: XOR<ClaimCreateWithoutLostItemInput, ClaimUncheckedCreateWithoutLostItemInput>
  }

  export type ClaimUpdateWithWhereUniqueWithoutLostItemInput = {
    where: ClaimWhereUniqueInput
    data: XOR<ClaimUpdateWithoutLostItemInput, ClaimUncheckedUpdateWithoutLostItemInput>
  }

  export type ClaimUpdateManyWithWhereWithoutLostItemInput = {
    where: ClaimScalarWhereInput
    data: XOR<ClaimUpdateManyMutationInput, ClaimUncheckedUpdateManyWithoutLostItemInput>
  }

  export type UserCreateWithoutFoundItemsInput = {
    id?: string
    name: string
    username: string
    email: string
    password: string
    role?: string | null
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    lostItems?: LostItemCreateNestedManyWithoutUserInput
    claimRequests?: ClaimCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFoundItemsInput = {
    id?: string
    name: string
    username: string
    email: string
    password: string
    role?: string | null
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    lostItems?: LostItemUncheckedCreateNestedManyWithoutUserInput
    claimRequests?: ClaimUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFoundItemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFoundItemsInput, UserUncheckedCreateWithoutFoundItemsInput>
  }

  export type ClaimCreateWithoutFoundItemInput = {
    id?: string
    itemId: string
    description: string
    contactPhone?: string | null
    contactEmail?: string | null
    status?: $Enums.ClaimStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutClaimRequestsInput
    lostItem?: LostItemCreateNestedOneWithoutClaimRequestsInput
  }

  export type ClaimUncheckedCreateWithoutFoundItemInput = {
    id?: string
    itemId: string
    description: string
    contactPhone?: string | null
    contactEmail?: string | null
    status?: $Enums.ClaimStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    lostItemId?: string | null
  }

  export type ClaimCreateOrConnectWithoutFoundItemInput = {
    where: ClaimWhereUniqueInput
    create: XOR<ClaimCreateWithoutFoundItemInput, ClaimUncheckedCreateWithoutFoundItemInput>
  }

  export type ClaimCreateManyFoundItemInputEnvelope = {
    data: ClaimCreateManyFoundItemInput | ClaimCreateManyFoundItemInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutFoundItemsInput = {
    update: XOR<UserUpdateWithoutFoundItemsInput, UserUncheckedUpdateWithoutFoundItemsInput>
    create: XOR<UserCreateWithoutFoundItemsInput, UserUncheckedCreateWithoutFoundItemsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFoundItemsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFoundItemsInput, UserUncheckedUpdateWithoutFoundItemsInput>
  }

  export type UserUpdateWithoutFoundItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lostItems?: LostItemUpdateManyWithoutUserNestedInput
    claimRequests?: ClaimUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFoundItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lostItems?: LostItemUncheckedUpdateManyWithoutUserNestedInput
    claimRequests?: ClaimUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ClaimUpsertWithWhereUniqueWithoutFoundItemInput = {
    where: ClaimWhereUniqueInput
    update: XOR<ClaimUpdateWithoutFoundItemInput, ClaimUncheckedUpdateWithoutFoundItemInput>
    create: XOR<ClaimCreateWithoutFoundItemInput, ClaimUncheckedCreateWithoutFoundItemInput>
  }

  export type ClaimUpdateWithWhereUniqueWithoutFoundItemInput = {
    where: ClaimWhereUniqueInput
    data: XOR<ClaimUpdateWithoutFoundItemInput, ClaimUncheckedUpdateWithoutFoundItemInput>
  }

  export type ClaimUpdateManyWithWhereWithoutFoundItemInput = {
    where: ClaimScalarWhereInput
    data: XOR<ClaimUpdateManyMutationInput, ClaimUncheckedUpdateManyWithoutFoundItemInput>
  }

  export type UserCreateWithoutClaimRequestsInput = {
    id?: string
    name: string
    username: string
    email: string
    password: string
    role?: string | null
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    lostItems?: LostItemCreateNestedManyWithoutUserInput
    foundItems?: FoundItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutClaimRequestsInput = {
    id?: string
    name: string
    username: string
    email: string
    password: string
    role?: string | null
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    lostItems?: LostItemUncheckedCreateNestedManyWithoutUserInput
    foundItems?: FoundItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutClaimRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClaimRequestsInput, UserUncheckedCreateWithoutClaimRequestsInput>
  }

  export type LostItemCreateWithoutClaimRequestsInput = {
    id?: string
    category: string
    description: string
    dateLost?: Date | string | null
    locationLost?: string | null
    contactPhone?: string | null
    contactEmail?: string | null
    images?: string | null
    status?: $Enums.ItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLostItemsInput
  }

  export type LostItemUncheckedCreateWithoutClaimRequestsInput = {
    id?: string
    category: string
    description: string
    dateLost?: Date | string | null
    locationLost?: string | null
    contactPhone?: string | null
    contactEmail?: string | null
    images?: string | null
    status?: $Enums.ItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type LostItemCreateOrConnectWithoutClaimRequestsInput = {
    where: LostItemWhereUniqueInput
    create: XOR<LostItemCreateWithoutClaimRequestsInput, LostItemUncheckedCreateWithoutClaimRequestsInput>
  }

  export type FoundItemCreateWithoutClaimsInput = {
    id?: string
    category: string
    description: string
    dateFound?: Date | string | null
    locationFound?: string | null
    contactPhone?: string | null
    contactEmail?: string | null
    images?: string | null
    status?: $Enums.ItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFoundItemsInput
  }

  export type FoundItemUncheckedCreateWithoutClaimsInput = {
    id?: string
    userId: string
    category: string
    description: string
    dateFound?: Date | string | null
    locationFound?: string | null
    contactPhone?: string | null
    contactEmail?: string | null
    images?: string | null
    status?: $Enums.ItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoundItemCreateOrConnectWithoutClaimsInput = {
    where: FoundItemWhereUniqueInput
    create: XOR<FoundItemCreateWithoutClaimsInput, FoundItemUncheckedCreateWithoutClaimsInput>
  }

  export type UserUpsertWithoutClaimRequestsInput = {
    update: XOR<UserUpdateWithoutClaimRequestsInput, UserUncheckedUpdateWithoutClaimRequestsInput>
    create: XOR<UserCreateWithoutClaimRequestsInput, UserUncheckedCreateWithoutClaimRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutClaimRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutClaimRequestsInput, UserUncheckedUpdateWithoutClaimRequestsInput>
  }

  export type UserUpdateWithoutClaimRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lostItems?: LostItemUpdateManyWithoutUserNestedInput
    foundItems?: FoundItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutClaimRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lostItems?: LostItemUncheckedUpdateManyWithoutUserNestedInput
    foundItems?: FoundItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LostItemUpsertWithoutClaimRequestsInput = {
    update: XOR<LostItemUpdateWithoutClaimRequestsInput, LostItemUncheckedUpdateWithoutClaimRequestsInput>
    create: XOR<LostItemCreateWithoutClaimRequestsInput, LostItemUncheckedCreateWithoutClaimRequestsInput>
    where?: LostItemWhereInput
  }

  export type LostItemUpdateToOneWithWhereWithoutClaimRequestsInput = {
    where?: LostItemWhereInput
    data: XOR<LostItemUpdateWithoutClaimRequestsInput, LostItemUncheckedUpdateWithoutClaimRequestsInput>
  }

  export type LostItemUpdateWithoutClaimRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dateLost?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    locationLost?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLostItemsNestedInput
  }

  export type LostItemUncheckedUpdateWithoutClaimRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dateLost?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    locationLost?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type FoundItemUpsertWithoutClaimsInput = {
    update: XOR<FoundItemUpdateWithoutClaimsInput, FoundItemUncheckedUpdateWithoutClaimsInput>
    create: XOR<FoundItemCreateWithoutClaimsInput, FoundItemUncheckedCreateWithoutClaimsInput>
    where?: FoundItemWhereInput
  }

  export type FoundItemUpdateToOneWithWhereWithoutClaimsInput = {
    where?: FoundItemWhereInput
    data: XOR<FoundItemUpdateWithoutClaimsInput, FoundItemUncheckedUpdateWithoutClaimsInput>
  }

  export type FoundItemUpdateWithoutClaimsInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dateFound?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    locationFound?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFoundItemsNestedInput
  }

  export type FoundItemUncheckedUpdateWithoutClaimsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dateFound?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    locationFound?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LostItemCreateManyUserInput = {
    id?: string
    category: string
    description: string
    dateLost?: Date | string | null
    locationLost?: string | null
    contactPhone?: string | null
    contactEmail?: string | null
    images?: string | null
    status?: $Enums.ItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoundItemCreateManyUserInput = {
    id?: string
    category: string
    description: string
    dateFound?: Date | string | null
    locationFound?: string | null
    contactPhone?: string | null
    contactEmail?: string | null
    images?: string | null
    status?: $Enums.ItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClaimCreateManyUserInput = {
    id?: string
    itemId: string
    description: string
    contactPhone?: string | null
    contactEmail?: string | null
    status?: $Enums.ClaimStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    lostItemId?: string | null
    foundItemId?: string | null
  }

  export type LostItemUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dateLost?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    locationLost?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    claimRequests?: ClaimUpdateManyWithoutLostItemNestedInput
  }

  export type LostItemUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dateLost?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    locationLost?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    claimRequests?: ClaimUncheckedUpdateManyWithoutLostItemNestedInput
  }

  export type LostItemUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dateLost?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    locationLost?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoundItemUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dateFound?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    locationFound?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    claims?: ClaimUpdateManyWithoutFoundItemNestedInput
  }

  export type FoundItemUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dateFound?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    locationFound?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    claims?: ClaimUncheckedUpdateManyWithoutFoundItemNestedInput
  }

  export type FoundItemUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dateFound?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    locationFound?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClaimUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumClaimStatusFieldUpdateOperationsInput | $Enums.ClaimStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lostItem?: LostItemUpdateOneWithoutClaimRequestsNestedInput
    foundItem?: FoundItemUpdateOneWithoutClaimsNestedInput
  }

  export type ClaimUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumClaimStatusFieldUpdateOperationsInput | $Enums.ClaimStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lostItemId?: NullableStringFieldUpdateOperationsInput | string | null
    foundItemId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClaimUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumClaimStatusFieldUpdateOperationsInput | $Enums.ClaimStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lostItemId?: NullableStringFieldUpdateOperationsInput | string | null
    foundItemId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClaimCreateManyLostItemInput = {
    id?: string
    itemId: string
    description: string
    contactPhone?: string | null
    contactEmail?: string | null
    status?: $Enums.ClaimStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    foundItemId?: string | null
  }

  export type ClaimUpdateWithoutLostItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumClaimStatusFieldUpdateOperationsInput | $Enums.ClaimStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutClaimRequestsNestedInput
    foundItem?: FoundItemUpdateOneWithoutClaimsNestedInput
  }

  export type ClaimUncheckedUpdateWithoutLostItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumClaimStatusFieldUpdateOperationsInput | $Enums.ClaimStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    foundItemId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClaimUncheckedUpdateManyWithoutLostItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumClaimStatusFieldUpdateOperationsInput | $Enums.ClaimStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    foundItemId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClaimCreateManyFoundItemInput = {
    id?: string
    itemId: string
    description: string
    contactPhone?: string | null
    contactEmail?: string | null
    status?: $Enums.ClaimStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    lostItemId?: string | null
  }

  export type ClaimUpdateWithoutFoundItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumClaimStatusFieldUpdateOperationsInput | $Enums.ClaimStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutClaimRequestsNestedInput
    lostItem?: LostItemUpdateOneWithoutClaimRequestsNestedInput
  }

  export type ClaimUncheckedUpdateWithoutFoundItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumClaimStatusFieldUpdateOperationsInput | $Enums.ClaimStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    lostItemId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClaimUncheckedUpdateManyWithoutFoundItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumClaimStatusFieldUpdateOperationsInput | $Enums.ClaimStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    lostItemId?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LostItemCountOutputTypeDefaultArgs instead
     */
    export type LostItemCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LostItemCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FoundItemCountOutputTypeDefaultArgs instead
     */
    export type FoundItemCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FoundItemCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LostItemDefaultArgs instead
     */
    export type LostItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LostItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FoundItemDefaultArgs instead
     */
    export type FoundItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FoundItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClaimDefaultArgs instead
     */
    export type ClaimArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClaimDefaultArgs<ExtArgs>

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