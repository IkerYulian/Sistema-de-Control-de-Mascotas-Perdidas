
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Zona
 * 
 */
export type Zona = $Result.DefaultSelection<Prisma.$ZonaPayload>
/**
 * Model Especie
 * 
 */
export type Especie = $Result.DefaultSelection<Prisma.$EspeciePayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Mascota
 * 
 */
export type Mascota = $Result.DefaultSelection<Prisma.$MascotaPayload>
/**
 * Model Reporte
 * 
 */
export type Reporte = $Result.DefaultSelection<Prisma.$ReportePayload>
/**
 * Model Perdida
 * 
 */
export type Perdida = $Result.DefaultSelection<Prisma.$PerdidaPayload>
/**
 * Model Avistamiento
 * 
 */
export type Avistamiento = $Result.DefaultSelection<Prisma.$AvistamientoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RolUsuario: {
  DUENO: 'DUENO',
  COLABORADOR: 'COLABORADOR'
};

export type RolUsuario = (typeof RolUsuario)[keyof typeof RolUsuario]


export const SexoMascota: {
  MACHO: 'MACHO',
  HEMBRA: 'HEMBRA',
  DESCONOCIDO: 'DESCONOCIDO'
};

export type SexoMascota = (typeof SexoMascota)[keyof typeof SexoMascota]


export const EstadoReporte: {
  ACTIVO: 'ACTIVO',
  RESUELTO: 'RESUELTO',
  CERRADO: 'CERRADO'
};

export type EstadoReporte = (typeof EstadoReporte)[keyof typeof EstadoReporte]

}

export type RolUsuario = $Enums.RolUsuario

export const RolUsuario: typeof $Enums.RolUsuario

export type SexoMascota = $Enums.SexoMascota

export const SexoMascota: typeof $Enums.SexoMascota

export type EstadoReporte = $Enums.EstadoReporte

export const EstadoReporte: typeof $Enums.EstadoReporte

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Zonas
 * const zonas = await prisma.zona.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Zonas
   * const zonas = await prisma.zona.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.zona`: Exposes CRUD operations for the **Zona** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Zonas
    * const zonas = await prisma.zona.findMany()
    * ```
    */
  get zona(): Prisma.ZonaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.especie`: Exposes CRUD operations for the **Especie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Especies
    * const especies = await prisma.especie.findMany()
    * ```
    */
  get especie(): Prisma.EspecieDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mascota`: Exposes CRUD operations for the **Mascota** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mascotas
    * const mascotas = await prisma.mascota.findMany()
    * ```
    */
  get mascota(): Prisma.MascotaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reporte`: Exposes CRUD operations for the **Reporte** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reportes
    * const reportes = await prisma.reporte.findMany()
    * ```
    */
  get reporte(): Prisma.ReporteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.perdida`: Exposes CRUD operations for the **Perdida** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Perdidas
    * const perdidas = await prisma.perdida.findMany()
    * ```
    */
  get perdida(): Prisma.PerdidaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.avistamiento`: Exposes CRUD operations for the **Avistamiento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Avistamientos
    * const avistamientos = await prisma.avistamiento.findMany()
    * ```
    */
  get avistamiento(): Prisma.AvistamientoDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.7.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Zona: 'Zona',
    Especie: 'Especie',
    Usuario: 'Usuario',
    Mascota: 'Mascota',
    Reporte: 'Reporte',
    Perdida: 'Perdida',
    Avistamiento: 'Avistamiento'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "zona" | "especie" | "usuario" | "mascota" | "reporte" | "perdida" | "avistamiento"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Zona: {
        payload: Prisma.$ZonaPayload<ExtArgs>
        fields: Prisma.ZonaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ZonaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ZonaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonaPayload>
          }
          findFirst: {
            args: Prisma.ZonaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ZonaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonaPayload>
          }
          findMany: {
            args: Prisma.ZonaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonaPayload>[]
          }
          create: {
            args: Prisma.ZonaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonaPayload>
          }
          createMany: {
            args: Prisma.ZonaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ZonaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonaPayload>[]
          }
          delete: {
            args: Prisma.ZonaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonaPayload>
          }
          update: {
            args: Prisma.ZonaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonaPayload>
          }
          deleteMany: {
            args: Prisma.ZonaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ZonaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ZonaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonaPayload>[]
          }
          upsert: {
            args: Prisma.ZonaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonaPayload>
          }
          aggregate: {
            args: Prisma.ZonaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateZona>
          }
          groupBy: {
            args: Prisma.ZonaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ZonaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ZonaCountArgs<ExtArgs>
            result: $Utils.Optional<ZonaCountAggregateOutputType> | number
          }
        }
      }
      Especie: {
        payload: Prisma.$EspeciePayload<ExtArgs>
        fields: Prisma.EspecieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EspecieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspeciePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EspecieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspeciePayload>
          }
          findFirst: {
            args: Prisma.EspecieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspeciePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EspecieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspeciePayload>
          }
          findMany: {
            args: Prisma.EspecieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspeciePayload>[]
          }
          create: {
            args: Prisma.EspecieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspeciePayload>
          }
          createMany: {
            args: Prisma.EspecieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EspecieCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspeciePayload>[]
          }
          delete: {
            args: Prisma.EspecieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspeciePayload>
          }
          update: {
            args: Prisma.EspecieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspeciePayload>
          }
          deleteMany: {
            args: Prisma.EspecieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EspecieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EspecieUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspeciePayload>[]
          }
          upsert: {
            args: Prisma.EspecieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspeciePayload>
          }
          aggregate: {
            args: Prisma.EspecieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEspecie>
          }
          groupBy: {
            args: Prisma.EspecieGroupByArgs<ExtArgs>
            result: $Utils.Optional<EspecieGroupByOutputType>[]
          }
          count: {
            args: Prisma.EspecieCountArgs<ExtArgs>
            result: $Utils.Optional<EspecieCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Mascota: {
        payload: Prisma.$MascotaPayload<ExtArgs>
        fields: Prisma.MascotaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MascotaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MascotaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MascotaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MascotaPayload>
          }
          findFirst: {
            args: Prisma.MascotaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MascotaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MascotaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MascotaPayload>
          }
          findMany: {
            args: Prisma.MascotaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MascotaPayload>[]
          }
          create: {
            args: Prisma.MascotaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MascotaPayload>
          }
          createMany: {
            args: Prisma.MascotaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MascotaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MascotaPayload>[]
          }
          delete: {
            args: Prisma.MascotaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MascotaPayload>
          }
          update: {
            args: Prisma.MascotaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MascotaPayload>
          }
          deleteMany: {
            args: Prisma.MascotaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MascotaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MascotaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MascotaPayload>[]
          }
          upsert: {
            args: Prisma.MascotaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MascotaPayload>
          }
          aggregate: {
            args: Prisma.MascotaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMascota>
          }
          groupBy: {
            args: Prisma.MascotaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MascotaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MascotaCountArgs<ExtArgs>
            result: $Utils.Optional<MascotaCountAggregateOutputType> | number
          }
        }
      }
      Reporte: {
        payload: Prisma.$ReportePayload<ExtArgs>
        fields: Prisma.ReporteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReporteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReporteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportePayload>
          }
          findFirst: {
            args: Prisma.ReporteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReporteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportePayload>
          }
          findMany: {
            args: Prisma.ReporteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportePayload>[]
          }
          create: {
            args: Prisma.ReporteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportePayload>
          }
          createMany: {
            args: Prisma.ReporteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReporteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportePayload>[]
          }
          delete: {
            args: Prisma.ReporteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportePayload>
          }
          update: {
            args: Prisma.ReporteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportePayload>
          }
          deleteMany: {
            args: Prisma.ReporteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReporteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReporteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportePayload>[]
          }
          upsert: {
            args: Prisma.ReporteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportePayload>
          }
          aggregate: {
            args: Prisma.ReporteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReporte>
          }
          groupBy: {
            args: Prisma.ReporteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReporteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReporteCountArgs<ExtArgs>
            result: $Utils.Optional<ReporteCountAggregateOutputType> | number
          }
        }
      }
      Perdida: {
        payload: Prisma.$PerdidaPayload<ExtArgs>
        fields: Prisma.PerdidaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PerdidaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerdidaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PerdidaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerdidaPayload>
          }
          findFirst: {
            args: Prisma.PerdidaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerdidaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PerdidaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerdidaPayload>
          }
          findMany: {
            args: Prisma.PerdidaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerdidaPayload>[]
          }
          create: {
            args: Prisma.PerdidaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerdidaPayload>
          }
          createMany: {
            args: Prisma.PerdidaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PerdidaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerdidaPayload>[]
          }
          delete: {
            args: Prisma.PerdidaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerdidaPayload>
          }
          update: {
            args: Prisma.PerdidaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerdidaPayload>
          }
          deleteMany: {
            args: Prisma.PerdidaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PerdidaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PerdidaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerdidaPayload>[]
          }
          upsert: {
            args: Prisma.PerdidaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerdidaPayload>
          }
          aggregate: {
            args: Prisma.PerdidaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePerdida>
          }
          groupBy: {
            args: Prisma.PerdidaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PerdidaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PerdidaCountArgs<ExtArgs>
            result: $Utils.Optional<PerdidaCountAggregateOutputType> | number
          }
        }
      }
      Avistamiento: {
        payload: Prisma.$AvistamientoPayload<ExtArgs>
        fields: Prisma.AvistamientoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvistamientoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvistamientoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvistamientoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvistamientoPayload>
          }
          findFirst: {
            args: Prisma.AvistamientoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvistamientoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvistamientoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvistamientoPayload>
          }
          findMany: {
            args: Prisma.AvistamientoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvistamientoPayload>[]
          }
          create: {
            args: Prisma.AvistamientoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvistamientoPayload>
          }
          createMany: {
            args: Prisma.AvistamientoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvistamientoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvistamientoPayload>[]
          }
          delete: {
            args: Prisma.AvistamientoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvistamientoPayload>
          }
          update: {
            args: Prisma.AvistamientoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvistamientoPayload>
          }
          deleteMany: {
            args: Prisma.AvistamientoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvistamientoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvistamientoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvistamientoPayload>[]
          }
          upsert: {
            args: Prisma.AvistamientoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvistamientoPayload>
          }
          aggregate: {
            args: Prisma.AvistamientoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvistamiento>
          }
          groupBy: {
            args: Prisma.AvistamientoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvistamientoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvistamientoCountArgs<ExtArgs>
            result: $Utils.Optional<AvistamientoCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    zona?: ZonaOmit
    especie?: EspecieOmit
    usuario?: UsuarioOmit
    mascota?: MascotaOmit
    reporte?: ReporteOmit
    perdida?: PerdidaOmit
    avistamiento?: AvistamientoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type ZonaCountOutputType
   */

  export type ZonaCountOutputType = {
    usuarios: number
    reportes: number
  }

  export type ZonaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | ZonaCountOutputTypeCountUsuariosArgs
    reportes?: boolean | ZonaCountOutputTypeCountReportesArgs
  }

  // Custom InputTypes
  /**
   * ZonaCountOutputType without action
   */
  export type ZonaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZonaCountOutputType
     */
    select?: ZonaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ZonaCountOutputType without action
   */
  export type ZonaCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }

  /**
   * ZonaCountOutputType without action
   */
  export type ZonaCountOutputTypeCountReportesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReporteWhereInput
  }


  /**
   * Count Type EspecieCountOutputType
   */

  export type EspecieCountOutputType = {
    mascotas: number
  }

  export type EspecieCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mascotas?: boolean | EspecieCountOutputTypeCountMascotasArgs
  }

  // Custom InputTypes
  /**
   * EspecieCountOutputType without action
   */
  export type EspecieCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspecieCountOutputType
     */
    select?: EspecieCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EspecieCountOutputType without action
   */
  export type EspecieCountOutputTypeCountMascotasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MascotaWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    mascotas: number
    avistamientos: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mascotas?: boolean | UsuarioCountOutputTypeCountMascotasArgs
    avistamientos?: boolean | UsuarioCountOutputTypeCountAvistamientosArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountMascotasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MascotaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountAvistamientosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvistamientoWhereInput
  }


  /**
   * Count Type MascotaCountOutputType
   */

  export type MascotaCountOutputType = {
    reportes: number
  }

  export type MascotaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reportes?: boolean | MascotaCountOutputTypeCountReportesArgs
  }

  // Custom InputTypes
  /**
   * MascotaCountOutputType without action
   */
  export type MascotaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MascotaCountOutputType
     */
    select?: MascotaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MascotaCountOutputType without action
   */
  export type MascotaCountOutputTypeCountReportesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReporteWhereInput
  }


  /**
   * Count Type ReporteCountOutputType
   */

  export type ReporteCountOutputType = {
    avistamientos: number
  }

  export type ReporteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    avistamientos?: boolean | ReporteCountOutputTypeCountAvistamientosArgs
  }

  // Custom InputTypes
  /**
   * ReporteCountOutputType without action
   */
  export type ReporteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReporteCountOutputType
     */
    select?: ReporteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReporteCountOutputType without action
   */
  export type ReporteCountOutputTypeCountAvistamientosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvistamientoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Zona
   */

  export type AggregateZona = {
    _count: ZonaCountAggregateOutputType | null
    _avg: ZonaAvgAggregateOutputType | null
    _sum: ZonaSumAggregateOutputType | null
    _min: ZonaMinAggregateOutputType | null
    _max: ZonaMaxAggregateOutputType | null
  }

  export type ZonaAvgAggregateOutputType = {
    id: number | null
  }

  export type ZonaSumAggregateOutputType = {
    id: number | null
  }

  export type ZonaMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    ciudad: string | null
    departamento: string | null
    descripcion: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ZonaMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    ciudad: string | null
    departamento: string | null
    descripcion: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ZonaCountAggregateOutputType = {
    id: number
    nombre: number
    ciudad: number
    departamento: number
    descripcion: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ZonaAvgAggregateInputType = {
    id?: true
  }

  export type ZonaSumAggregateInputType = {
    id?: true
  }

  export type ZonaMinAggregateInputType = {
    id?: true
    nombre?: true
    ciudad?: true
    departamento?: true
    descripcion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ZonaMaxAggregateInputType = {
    id?: true
    nombre?: true
    ciudad?: true
    departamento?: true
    descripcion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ZonaCountAggregateInputType = {
    id?: true
    nombre?: true
    ciudad?: true
    departamento?: true
    descripcion?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ZonaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Zona to aggregate.
     */
    where?: ZonaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zonas to fetch.
     */
    orderBy?: ZonaOrderByWithRelationInput | ZonaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ZonaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zonas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zonas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Zonas
    **/
    _count?: true | ZonaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ZonaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ZonaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ZonaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ZonaMaxAggregateInputType
  }

  export type GetZonaAggregateType<T extends ZonaAggregateArgs> = {
        [P in keyof T & keyof AggregateZona]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZona[P]>
      : GetScalarType<T[P], AggregateZona[P]>
  }




  export type ZonaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ZonaWhereInput
    orderBy?: ZonaOrderByWithAggregationInput | ZonaOrderByWithAggregationInput[]
    by: ZonaScalarFieldEnum[] | ZonaScalarFieldEnum
    having?: ZonaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ZonaCountAggregateInputType | true
    _avg?: ZonaAvgAggregateInputType
    _sum?: ZonaSumAggregateInputType
    _min?: ZonaMinAggregateInputType
    _max?: ZonaMaxAggregateInputType
  }

  export type ZonaGroupByOutputType = {
    id: number
    nombre: string
    ciudad: string
    departamento: string
    descripcion: string | null
    createdAt: Date
    updatedAt: Date
    _count: ZonaCountAggregateOutputType | null
    _avg: ZonaAvgAggregateOutputType | null
    _sum: ZonaSumAggregateOutputType | null
    _min: ZonaMinAggregateOutputType | null
    _max: ZonaMaxAggregateOutputType | null
  }

  type GetZonaGroupByPayload<T extends ZonaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ZonaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ZonaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ZonaGroupByOutputType[P]>
            : GetScalarType<T[P], ZonaGroupByOutputType[P]>
        }
      >
    >


  export type ZonaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    ciudad?: boolean
    departamento?: boolean
    descripcion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuarios?: boolean | Zona$usuariosArgs<ExtArgs>
    reportes?: boolean | Zona$reportesArgs<ExtArgs>
    _count?: boolean | ZonaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zona"]>

  export type ZonaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    ciudad?: boolean
    departamento?: boolean
    descripcion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["zona"]>

  export type ZonaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    ciudad?: boolean
    departamento?: boolean
    descripcion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["zona"]>

  export type ZonaSelectScalar = {
    id?: boolean
    nombre?: boolean
    ciudad?: boolean
    departamento?: boolean
    descripcion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ZonaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "ciudad" | "departamento" | "descripcion" | "createdAt" | "updatedAt", ExtArgs["result"]["zona"]>
  export type ZonaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | Zona$usuariosArgs<ExtArgs>
    reportes?: boolean | Zona$reportesArgs<ExtArgs>
    _count?: boolean | ZonaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ZonaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ZonaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ZonaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Zona"
    objects: {
      usuarios: Prisma.$UsuarioPayload<ExtArgs>[]
      reportes: Prisma.$ReportePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      ciudad: string
      departamento: string
      descripcion: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["zona"]>
    composites: {}
  }

  type ZonaGetPayload<S extends boolean | null | undefined | ZonaDefaultArgs> = $Result.GetResult<Prisma.$ZonaPayload, S>

  type ZonaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ZonaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ZonaCountAggregateInputType | true
    }

  export interface ZonaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Zona'], meta: { name: 'Zona' } }
    /**
     * Find zero or one Zona that matches the filter.
     * @param {ZonaFindUniqueArgs} args - Arguments to find a Zona
     * @example
     * // Get one Zona
     * const zona = await prisma.zona.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ZonaFindUniqueArgs>(args: SelectSubset<T, ZonaFindUniqueArgs<ExtArgs>>): Prisma__ZonaClient<$Result.GetResult<Prisma.$ZonaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Zona that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ZonaFindUniqueOrThrowArgs} args - Arguments to find a Zona
     * @example
     * // Get one Zona
     * const zona = await prisma.zona.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ZonaFindUniqueOrThrowArgs>(args: SelectSubset<T, ZonaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ZonaClient<$Result.GetResult<Prisma.$ZonaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Zona that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZonaFindFirstArgs} args - Arguments to find a Zona
     * @example
     * // Get one Zona
     * const zona = await prisma.zona.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ZonaFindFirstArgs>(args?: SelectSubset<T, ZonaFindFirstArgs<ExtArgs>>): Prisma__ZonaClient<$Result.GetResult<Prisma.$ZonaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Zona that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZonaFindFirstOrThrowArgs} args - Arguments to find a Zona
     * @example
     * // Get one Zona
     * const zona = await prisma.zona.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ZonaFindFirstOrThrowArgs>(args?: SelectSubset<T, ZonaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ZonaClient<$Result.GetResult<Prisma.$ZonaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Zonas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZonaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Zonas
     * const zonas = await prisma.zona.findMany()
     * 
     * // Get first 10 Zonas
     * const zonas = await prisma.zona.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const zonaWithIdOnly = await prisma.zona.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ZonaFindManyArgs>(args?: SelectSubset<T, ZonaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZonaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Zona.
     * @param {ZonaCreateArgs} args - Arguments to create a Zona.
     * @example
     * // Create one Zona
     * const Zona = await prisma.zona.create({
     *   data: {
     *     // ... data to create a Zona
     *   }
     * })
     * 
     */
    create<T extends ZonaCreateArgs>(args: SelectSubset<T, ZonaCreateArgs<ExtArgs>>): Prisma__ZonaClient<$Result.GetResult<Prisma.$ZonaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Zonas.
     * @param {ZonaCreateManyArgs} args - Arguments to create many Zonas.
     * @example
     * // Create many Zonas
     * const zona = await prisma.zona.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ZonaCreateManyArgs>(args?: SelectSubset<T, ZonaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Zonas and returns the data saved in the database.
     * @param {ZonaCreateManyAndReturnArgs} args - Arguments to create many Zonas.
     * @example
     * // Create many Zonas
     * const zona = await prisma.zona.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Zonas and only return the `id`
     * const zonaWithIdOnly = await prisma.zona.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ZonaCreateManyAndReturnArgs>(args?: SelectSubset<T, ZonaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZonaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Zona.
     * @param {ZonaDeleteArgs} args - Arguments to delete one Zona.
     * @example
     * // Delete one Zona
     * const Zona = await prisma.zona.delete({
     *   where: {
     *     // ... filter to delete one Zona
     *   }
     * })
     * 
     */
    delete<T extends ZonaDeleteArgs>(args: SelectSubset<T, ZonaDeleteArgs<ExtArgs>>): Prisma__ZonaClient<$Result.GetResult<Prisma.$ZonaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Zona.
     * @param {ZonaUpdateArgs} args - Arguments to update one Zona.
     * @example
     * // Update one Zona
     * const zona = await prisma.zona.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ZonaUpdateArgs>(args: SelectSubset<T, ZonaUpdateArgs<ExtArgs>>): Prisma__ZonaClient<$Result.GetResult<Prisma.$ZonaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Zonas.
     * @param {ZonaDeleteManyArgs} args - Arguments to filter Zonas to delete.
     * @example
     * // Delete a few Zonas
     * const { count } = await prisma.zona.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ZonaDeleteManyArgs>(args?: SelectSubset<T, ZonaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Zonas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZonaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Zonas
     * const zona = await prisma.zona.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ZonaUpdateManyArgs>(args: SelectSubset<T, ZonaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Zonas and returns the data updated in the database.
     * @param {ZonaUpdateManyAndReturnArgs} args - Arguments to update many Zonas.
     * @example
     * // Update many Zonas
     * const zona = await prisma.zona.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Zonas and only return the `id`
     * const zonaWithIdOnly = await prisma.zona.updateManyAndReturn({
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
    updateManyAndReturn<T extends ZonaUpdateManyAndReturnArgs>(args: SelectSubset<T, ZonaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZonaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Zona.
     * @param {ZonaUpsertArgs} args - Arguments to update or create a Zona.
     * @example
     * // Update or create a Zona
     * const zona = await prisma.zona.upsert({
     *   create: {
     *     // ... data to create a Zona
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Zona we want to update
     *   }
     * })
     */
    upsert<T extends ZonaUpsertArgs>(args: SelectSubset<T, ZonaUpsertArgs<ExtArgs>>): Prisma__ZonaClient<$Result.GetResult<Prisma.$ZonaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Zonas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZonaCountArgs} args - Arguments to filter Zonas to count.
     * @example
     * // Count the number of Zonas
     * const count = await prisma.zona.count({
     *   where: {
     *     // ... the filter for the Zonas we want to count
     *   }
     * })
    **/
    count<T extends ZonaCountArgs>(
      args?: Subset<T, ZonaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ZonaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Zona.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZonaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ZonaAggregateArgs>(args: Subset<T, ZonaAggregateArgs>): Prisma.PrismaPromise<GetZonaAggregateType<T>>

    /**
     * Group by Zona.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZonaGroupByArgs} args - Group by arguments.
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
      T extends ZonaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ZonaGroupByArgs['orderBy'] }
        : { orderBy?: ZonaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ZonaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZonaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Zona model
   */
  readonly fields: ZonaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Zona.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ZonaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends Zona$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, Zona$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reportes<T extends Zona$reportesArgs<ExtArgs> = {}>(args?: Subset<T, Zona$reportesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Zona model
   */
  interface ZonaFieldRefs {
    readonly id: FieldRef<"Zona", 'Int'>
    readonly nombre: FieldRef<"Zona", 'String'>
    readonly ciudad: FieldRef<"Zona", 'String'>
    readonly departamento: FieldRef<"Zona", 'String'>
    readonly descripcion: FieldRef<"Zona", 'String'>
    readonly createdAt: FieldRef<"Zona", 'DateTime'>
    readonly updatedAt: FieldRef<"Zona", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Zona findUnique
   */
  export type ZonaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zona
     */
    select?: ZonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zona
     */
    omit?: ZonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZonaInclude<ExtArgs> | null
    /**
     * Filter, which Zona to fetch.
     */
    where: ZonaWhereUniqueInput
  }

  /**
   * Zona findUniqueOrThrow
   */
  export type ZonaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zona
     */
    select?: ZonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zona
     */
    omit?: ZonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZonaInclude<ExtArgs> | null
    /**
     * Filter, which Zona to fetch.
     */
    where: ZonaWhereUniqueInput
  }

  /**
   * Zona findFirst
   */
  export type ZonaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zona
     */
    select?: ZonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zona
     */
    omit?: ZonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZonaInclude<ExtArgs> | null
    /**
     * Filter, which Zona to fetch.
     */
    where?: ZonaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zonas to fetch.
     */
    orderBy?: ZonaOrderByWithRelationInput | ZonaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Zonas.
     */
    cursor?: ZonaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zonas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zonas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Zonas.
     */
    distinct?: ZonaScalarFieldEnum | ZonaScalarFieldEnum[]
  }

  /**
   * Zona findFirstOrThrow
   */
  export type ZonaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zona
     */
    select?: ZonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zona
     */
    omit?: ZonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZonaInclude<ExtArgs> | null
    /**
     * Filter, which Zona to fetch.
     */
    where?: ZonaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zonas to fetch.
     */
    orderBy?: ZonaOrderByWithRelationInput | ZonaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Zonas.
     */
    cursor?: ZonaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zonas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zonas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Zonas.
     */
    distinct?: ZonaScalarFieldEnum | ZonaScalarFieldEnum[]
  }

  /**
   * Zona findMany
   */
  export type ZonaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zona
     */
    select?: ZonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zona
     */
    omit?: ZonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZonaInclude<ExtArgs> | null
    /**
     * Filter, which Zonas to fetch.
     */
    where?: ZonaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zonas to fetch.
     */
    orderBy?: ZonaOrderByWithRelationInput | ZonaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Zonas.
     */
    cursor?: ZonaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zonas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zonas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Zonas.
     */
    distinct?: ZonaScalarFieldEnum | ZonaScalarFieldEnum[]
  }

  /**
   * Zona create
   */
  export type ZonaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zona
     */
    select?: ZonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zona
     */
    omit?: ZonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZonaInclude<ExtArgs> | null
    /**
     * The data needed to create a Zona.
     */
    data: XOR<ZonaCreateInput, ZonaUncheckedCreateInput>
  }

  /**
   * Zona createMany
   */
  export type ZonaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Zonas.
     */
    data: ZonaCreateManyInput | ZonaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Zona createManyAndReturn
   */
  export type ZonaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zona
     */
    select?: ZonaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Zona
     */
    omit?: ZonaOmit<ExtArgs> | null
    /**
     * The data used to create many Zonas.
     */
    data: ZonaCreateManyInput | ZonaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Zona update
   */
  export type ZonaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zona
     */
    select?: ZonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zona
     */
    omit?: ZonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZonaInclude<ExtArgs> | null
    /**
     * The data needed to update a Zona.
     */
    data: XOR<ZonaUpdateInput, ZonaUncheckedUpdateInput>
    /**
     * Choose, which Zona to update.
     */
    where: ZonaWhereUniqueInput
  }

  /**
   * Zona updateMany
   */
  export type ZonaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Zonas.
     */
    data: XOR<ZonaUpdateManyMutationInput, ZonaUncheckedUpdateManyInput>
    /**
     * Filter which Zonas to update
     */
    where?: ZonaWhereInput
    /**
     * Limit how many Zonas to update.
     */
    limit?: number
  }

  /**
   * Zona updateManyAndReturn
   */
  export type ZonaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zona
     */
    select?: ZonaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Zona
     */
    omit?: ZonaOmit<ExtArgs> | null
    /**
     * The data used to update Zonas.
     */
    data: XOR<ZonaUpdateManyMutationInput, ZonaUncheckedUpdateManyInput>
    /**
     * Filter which Zonas to update
     */
    where?: ZonaWhereInput
    /**
     * Limit how many Zonas to update.
     */
    limit?: number
  }

  /**
   * Zona upsert
   */
  export type ZonaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zona
     */
    select?: ZonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zona
     */
    omit?: ZonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZonaInclude<ExtArgs> | null
    /**
     * The filter to search for the Zona to update in case it exists.
     */
    where: ZonaWhereUniqueInput
    /**
     * In case the Zona found by the `where` argument doesn't exist, create a new Zona with this data.
     */
    create: XOR<ZonaCreateInput, ZonaUncheckedCreateInput>
    /**
     * In case the Zona was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ZonaUpdateInput, ZonaUncheckedUpdateInput>
  }

  /**
   * Zona delete
   */
  export type ZonaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zona
     */
    select?: ZonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zona
     */
    omit?: ZonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZonaInclude<ExtArgs> | null
    /**
     * Filter which Zona to delete.
     */
    where: ZonaWhereUniqueInput
  }

  /**
   * Zona deleteMany
   */
  export type ZonaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Zonas to delete
     */
    where?: ZonaWhereInput
    /**
     * Limit how many Zonas to delete.
     */
    limit?: number
  }

  /**
   * Zona.usuarios
   */
  export type Zona$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Zona.reportes
   */
  export type Zona$reportesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporte
     */
    select?: ReporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reporte
     */
    omit?: ReporteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteInclude<ExtArgs> | null
    where?: ReporteWhereInput
    orderBy?: ReporteOrderByWithRelationInput | ReporteOrderByWithRelationInput[]
    cursor?: ReporteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReporteScalarFieldEnum | ReporteScalarFieldEnum[]
  }

  /**
   * Zona without action
   */
  export type ZonaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zona
     */
    select?: ZonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zona
     */
    omit?: ZonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZonaInclude<ExtArgs> | null
  }


  /**
   * Model Especie
   */

  export type AggregateEspecie = {
    _count: EspecieCountAggregateOutputType | null
    _avg: EspecieAvgAggregateOutputType | null
    _sum: EspecieSumAggregateOutputType | null
    _min: EspecieMinAggregateOutputType | null
    _max: EspecieMaxAggregateOutputType | null
  }

  export type EspecieAvgAggregateOutputType = {
    id: number | null
  }

  export type EspecieSumAggregateOutputType = {
    id: number | null
  }

  export type EspecieMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EspecieMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EspecieCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EspecieAvgAggregateInputType = {
    id?: true
  }

  export type EspecieSumAggregateInputType = {
    id?: true
  }

  export type EspecieMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EspecieMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EspecieCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EspecieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Especie to aggregate.
     */
    where?: EspecieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Especies to fetch.
     */
    orderBy?: EspecieOrderByWithRelationInput | EspecieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EspecieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Especies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Especies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Especies
    **/
    _count?: true | EspecieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EspecieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EspecieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EspecieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EspecieMaxAggregateInputType
  }

  export type GetEspecieAggregateType<T extends EspecieAggregateArgs> = {
        [P in keyof T & keyof AggregateEspecie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEspecie[P]>
      : GetScalarType<T[P], AggregateEspecie[P]>
  }




  export type EspecieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EspecieWhereInput
    orderBy?: EspecieOrderByWithAggregationInput | EspecieOrderByWithAggregationInput[]
    by: EspecieScalarFieldEnum[] | EspecieScalarFieldEnum
    having?: EspecieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EspecieCountAggregateInputType | true
    _avg?: EspecieAvgAggregateInputType
    _sum?: EspecieSumAggregateInputType
    _min?: EspecieMinAggregateInputType
    _max?: EspecieMaxAggregateInputType
  }

  export type EspecieGroupByOutputType = {
    id: number
    nombre: string
    descripcion: string | null
    createdAt: Date
    updatedAt: Date
    _count: EspecieCountAggregateOutputType | null
    _avg: EspecieAvgAggregateOutputType | null
    _sum: EspecieSumAggregateOutputType | null
    _min: EspecieMinAggregateOutputType | null
    _max: EspecieMaxAggregateOutputType | null
  }

  type GetEspecieGroupByPayload<T extends EspecieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EspecieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EspecieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EspecieGroupByOutputType[P]>
            : GetScalarType<T[P], EspecieGroupByOutputType[P]>
        }
      >
    >


  export type EspecieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mascotas?: boolean | Especie$mascotasArgs<ExtArgs>
    _count?: boolean | EspecieCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["especie"]>

  export type EspecieSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["especie"]>

  export type EspecieSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["especie"]>

  export type EspecieSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EspecieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "createdAt" | "updatedAt", ExtArgs["result"]["especie"]>
  export type EspecieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mascotas?: boolean | Especie$mascotasArgs<ExtArgs>
    _count?: boolean | EspecieCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EspecieIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EspecieIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EspeciePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Especie"
    objects: {
      mascotas: Prisma.$MascotaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      descripcion: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["especie"]>
    composites: {}
  }

  type EspecieGetPayload<S extends boolean | null | undefined | EspecieDefaultArgs> = $Result.GetResult<Prisma.$EspeciePayload, S>

  type EspecieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EspecieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EspecieCountAggregateInputType | true
    }

  export interface EspecieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Especie'], meta: { name: 'Especie' } }
    /**
     * Find zero or one Especie that matches the filter.
     * @param {EspecieFindUniqueArgs} args - Arguments to find a Especie
     * @example
     * // Get one Especie
     * const especie = await prisma.especie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EspecieFindUniqueArgs>(args: SelectSubset<T, EspecieFindUniqueArgs<ExtArgs>>): Prisma__EspecieClient<$Result.GetResult<Prisma.$EspeciePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Especie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EspecieFindUniqueOrThrowArgs} args - Arguments to find a Especie
     * @example
     * // Get one Especie
     * const especie = await prisma.especie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EspecieFindUniqueOrThrowArgs>(args: SelectSubset<T, EspecieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EspecieClient<$Result.GetResult<Prisma.$EspeciePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Especie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecieFindFirstArgs} args - Arguments to find a Especie
     * @example
     * // Get one Especie
     * const especie = await prisma.especie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EspecieFindFirstArgs>(args?: SelectSubset<T, EspecieFindFirstArgs<ExtArgs>>): Prisma__EspecieClient<$Result.GetResult<Prisma.$EspeciePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Especie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecieFindFirstOrThrowArgs} args - Arguments to find a Especie
     * @example
     * // Get one Especie
     * const especie = await prisma.especie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EspecieFindFirstOrThrowArgs>(args?: SelectSubset<T, EspecieFindFirstOrThrowArgs<ExtArgs>>): Prisma__EspecieClient<$Result.GetResult<Prisma.$EspeciePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Especies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Especies
     * const especies = await prisma.especie.findMany()
     * 
     * // Get first 10 Especies
     * const especies = await prisma.especie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const especieWithIdOnly = await prisma.especie.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EspecieFindManyArgs>(args?: SelectSubset<T, EspecieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EspeciePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Especie.
     * @param {EspecieCreateArgs} args - Arguments to create a Especie.
     * @example
     * // Create one Especie
     * const Especie = await prisma.especie.create({
     *   data: {
     *     // ... data to create a Especie
     *   }
     * })
     * 
     */
    create<T extends EspecieCreateArgs>(args: SelectSubset<T, EspecieCreateArgs<ExtArgs>>): Prisma__EspecieClient<$Result.GetResult<Prisma.$EspeciePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Especies.
     * @param {EspecieCreateManyArgs} args - Arguments to create many Especies.
     * @example
     * // Create many Especies
     * const especie = await prisma.especie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EspecieCreateManyArgs>(args?: SelectSubset<T, EspecieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Especies and returns the data saved in the database.
     * @param {EspecieCreateManyAndReturnArgs} args - Arguments to create many Especies.
     * @example
     * // Create many Especies
     * const especie = await prisma.especie.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Especies and only return the `id`
     * const especieWithIdOnly = await prisma.especie.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EspecieCreateManyAndReturnArgs>(args?: SelectSubset<T, EspecieCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EspeciePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Especie.
     * @param {EspecieDeleteArgs} args - Arguments to delete one Especie.
     * @example
     * // Delete one Especie
     * const Especie = await prisma.especie.delete({
     *   where: {
     *     // ... filter to delete one Especie
     *   }
     * })
     * 
     */
    delete<T extends EspecieDeleteArgs>(args: SelectSubset<T, EspecieDeleteArgs<ExtArgs>>): Prisma__EspecieClient<$Result.GetResult<Prisma.$EspeciePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Especie.
     * @param {EspecieUpdateArgs} args - Arguments to update one Especie.
     * @example
     * // Update one Especie
     * const especie = await prisma.especie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EspecieUpdateArgs>(args: SelectSubset<T, EspecieUpdateArgs<ExtArgs>>): Prisma__EspecieClient<$Result.GetResult<Prisma.$EspeciePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Especies.
     * @param {EspecieDeleteManyArgs} args - Arguments to filter Especies to delete.
     * @example
     * // Delete a few Especies
     * const { count } = await prisma.especie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EspecieDeleteManyArgs>(args?: SelectSubset<T, EspecieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Especies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Especies
     * const especie = await prisma.especie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EspecieUpdateManyArgs>(args: SelectSubset<T, EspecieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Especies and returns the data updated in the database.
     * @param {EspecieUpdateManyAndReturnArgs} args - Arguments to update many Especies.
     * @example
     * // Update many Especies
     * const especie = await prisma.especie.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Especies and only return the `id`
     * const especieWithIdOnly = await prisma.especie.updateManyAndReturn({
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
    updateManyAndReturn<T extends EspecieUpdateManyAndReturnArgs>(args: SelectSubset<T, EspecieUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EspeciePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Especie.
     * @param {EspecieUpsertArgs} args - Arguments to update or create a Especie.
     * @example
     * // Update or create a Especie
     * const especie = await prisma.especie.upsert({
     *   create: {
     *     // ... data to create a Especie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Especie we want to update
     *   }
     * })
     */
    upsert<T extends EspecieUpsertArgs>(args: SelectSubset<T, EspecieUpsertArgs<ExtArgs>>): Prisma__EspecieClient<$Result.GetResult<Prisma.$EspeciePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Especies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecieCountArgs} args - Arguments to filter Especies to count.
     * @example
     * // Count the number of Especies
     * const count = await prisma.especie.count({
     *   where: {
     *     // ... the filter for the Especies we want to count
     *   }
     * })
    **/
    count<T extends EspecieCountArgs>(
      args?: Subset<T, EspecieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EspecieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Especie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EspecieAggregateArgs>(args: Subset<T, EspecieAggregateArgs>): Prisma.PrismaPromise<GetEspecieAggregateType<T>>

    /**
     * Group by Especie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecieGroupByArgs} args - Group by arguments.
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
      T extends EspecieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EspecieGroupByArgs['orderBy'] }
        : { orderBy?: EspecieGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EspecieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEspecieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Especie model
   */
  readonly fields: EspecieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Especie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EspecieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mascotas<T extends Especie$mascotasArgs<ExtArgs> = {}>(args?: Subset<T, Especie$mascotasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MascotaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Especie model
   */
  interface EspecieFieldRefs {
    readonly id: FieldRef<"Especie", 'Int'>
    readonly nombre: FieldRef<"Especie", 'String'>
    readonly descripcion: FieldRef<"Especie", 'String'>
    readonly createdAt: FieldRef<"Especie", 'DateTime'>
    readonly updatedAt: FieldRef<"Especie", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Especie findUnique
   */
  export type EspecieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especie
     */
    select?: EspecieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especie
     */
    omit?: EspecieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecieInclude<ExtArgs> | null
    /**
     * Filter, which Especie to fetch.
     */
    where: EspecieWhereUniqueInput
  }

  /**
   * Especie findUniqueOrThrow
   */
  export type EspecieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especie
     */
    select?: EspecieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especie
     */
    omit?: EspecieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecieInclude<ExtArgs> | null
    /**
     * Filter, which Especie to fetch.
     */
    where: EspecieWhereUniqueInput
  }

  /**
   * Especie findFirst
   */
  export type EspecieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especie
     */
    select?: EspecieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especie
     */
    omit?: EspecieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecieInclude<ExtArgs> | null
    /**
     * Filter, which Especie to fetch.
     */
    where?: EspecieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Especies to fetch.
     */
    orderBy?: EspecieOrderByWithRelationInput | EspecieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Especies.
     */
    cursor?: EspecieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Especies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Especies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Especies.
     */
    distinct?: EspecieScalarFieldEnum | EspecieScalarFieldEnum[]
  }

  /**
   * Especie findFirstOrThrow
   */
  export type EspecieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especie
     */
    select?: EspecieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especie
     */
    omit?: EspecieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecieInclude<ExtArgs> | null
    /**
     * Filter, which Especie to fetch.
     */
    where?: EspecieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Especies to fetch.
     */
    orderBy?: EspecieOrderByWithRelationInput | EspecieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Especies.
     */
    cursor?: EspecieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Especies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Especies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Especies.
     */
    distinct?: EspecieScalarFieldEnum | EspecieScalarFieldEnum[]
  }

  /**
   * Especie findMany
   */
  export type EspecieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especie
     */
    select?: EspecieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especie
     */
    omit?: EspecieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecieInclude<ExtArgs> | null
    /**
     * Filter, which Especies to fetch.
     */
    where?: EspecieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Especies to fetch.
     */
    orderBy?: EspecieOrderByWithRelationInput | EspecieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Especies.
     */
    cursor?: EspecieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Especies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Especies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Especies.
     */
    distinct?: EspecieScalarFieldEnum | EspecieScalarFieldEnum[]
  }

  /**
   * Especie create
   */
  export type EspecieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especie
     */
    select?: EspecieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especie
     */
    omit?: EspecieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecieInclude<ExtArgs> | null
    /**
     * The data needed to create a Especie.
     */
    data: XOR<EspecieCreateInput, EspecieUncheckedCreateInput>
  }

  /**
   * Especie createMany
   */
  export type EspecieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Especies.
     */
    data: EspecieCreateManyInput | EspecieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Especie createManyAndReturn
   */
  export type EspecieCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especie
     */
    select?: EspecieSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Especie
     */
    omit?: EspecieOmit<ExtArgs> | null
    /**
     * The data used to create many Especies.
     */
    data: EspecieCreateManyInput | EspecieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Especie update
   */
  export type EspecieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especie
     */
    select?: EspecieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especie
     */
    omit?: EspecieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecieInclude<ExtArgs> | null
    /**
     * The data needed to update a Especie.
     */
    data: XOR<EspecieUpdateInput, EspecieUncheckedUpdateInput>
    /**
     * Choose, which Especie to update.
     */
    where: EspecieWhereUniqueInput
  }

  /**
   * Especie updateMany
   */
  export type EspecieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Especies.
     */
    data: XOR<EspecieUpdateManyMutationInput, EspecieUncheckedUpdateManyInput>
    /**
     * Filter which Especies to update
     */
    where?: EspecieWhereInput
    /**
     * Limit how many Especies to update.
     */
    limit?: number
  }

  /**
   * Especie updateManyAndReturn
   */
  export type EspecieUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especie
     */
    select?: EspecieSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Especie
     */
    omit?: EspecieOmit<ExtArgs> | null
    /**
     * The data used to update Especies.
     */
    data: XOR<EspecieUpdateManyMutationInput, EspecieUncheckedUpdateManyInput>
    /**
     * Filter which Especies to update
     */
    where?: EspecieWhereInput
    /**
     * Limit how many Especies to update.
     */
    limit?: number
  }

  /**
   * Especie upsert
   */
  export type EspecieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especie
     */
    select?: EspecieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especie
     */
    omit?: EspecieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecieInclude<ExtArgs> | null
    /**
     * The filter to search for the Especie to update in case it exists.
     */
    where: EspecieWhereUniqueInput
    /**
     * In case the Especie found by the `where` argument doesn't exist, create a new Especie with this data.
     */
    create: XOR<EspecieCreateInput, EspecieUncheckedCreateInput>
    /**
     * In case the Especie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EspecieUpdateInput, EspecieUncheckedUpdateInput>
  }

  /**
   * Especie delete
   */
  export type EspecieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especie
     */
    select?: EspecieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especie
     */
    omit?: EspecieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecieInclude<ExtArgs> | null
    /**
     * Filter which Especie to delete.
     */
    where: EspecieWhereUniqueInput
  }

  /**
   * Especie deleteMany
   */
  export type EspecieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Especies to delete
     */
    where?: EspecieWhereInput
    /**
     * Limit how many Especies to delete.
     */
    limit?: number
  }

  /**
   * Especie.mascotas
   */
  export type Especie$mascotasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mascota
     */
    select?: MascotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mascota
     */
    omit?: MascotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MascotaInclude<ExtArgs> | null
    where?: MascotaWhereInput
    orderBy?: MascotaOrderByWithRelationInput | MascotaOrderByWithRelationInput[]
    cursor?: MascotaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MascotaScalarFieldEnum | MascotaScalarFieldEnum[]
  }

  /**
   * Especie without action
   */
  export type EspecieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especie
     */
    select?: EspecieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especie
     */
    omit?: EspecieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecieInclude<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
    zonaId: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
    zonaId: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nombres: string | null
    apellidos: string | null
    correo: string | null
    telefono: string | null
    contrasena: string | null
    rol: $Enums.RolUsuario | null
    zonaId: number | null
    activo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nombres: string | null
    apellidos: string | null
    correo: string | null
    telefono: string | null
    contrasena: string | null
    rol: $Enums.RolUsuario | null
    zonaId: number | null
    activo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nombres: number
    apellidos: number
    correo: number
    telefono: number
    contrasena: number
    rol: number
    zonaId: number
    activo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
    zonaId?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
    zonaId?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nombres?: true
    apellidos?: true
    correo?: true
    telefono?: true
    contrasena?: true
    rol?: true
    zonaId?: true
    activo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nombres?: true
    apellidos?: true
    correo?: true
    telefono?: true
    contrasena?: true
    rol?: true
    zonaId?: true
    activo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nombres?: true
    apellidos?: true
    correo?: true
    telefono?: true
    contrasena?: true
    rol?: true
    zonaId?: true
    activo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nombres: string
    apellidos: string
    correo: string
    telefono: string
    contrasena: string
    rol: $Enums.RolUsuario
    zonaId: number
    activo: boolean
    createdAt: Date
    updatedAt: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombres?: boolean
    apellidos?: boolean
    correo?: boolean
    telefono?: boolean
    contrasena?: boolean
    rol?: boolean
    zonaId?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    zona?: boolean | ZonaDefaultArgs<ExtArgs>
    mascotas?: boolean | Usuario$mascotasArgs<ExtArgs>
    avistamientos?: boolean | Usuario$avistamientosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombres?: boolean
    apellidos?: boolean
    correo?: boolean
    telefono?: boolean
    contrasena?: boolean
    rol?: boolean
    zonaId?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    zona?: boolean | ZonaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombres?: boolean
    apellidos?: boolean
    correo?: boolean
    telefono?: boolean
    contrasena?: boolean
    rol?: boolean
    zonaId?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    zona?: boolean | ZonaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nombres?: boolean
    apellidos?: boolean
    correo?: boolean
    telefono?: boolean
    contrasena?: boolean
    rol?: boolean
    zonaId?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombres" | "apellidos" | "correo" | "telefono" | "contrasena" | "rol" | "zonaId" | "activo" | "createdAt" | "updatedAt", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zona?: boolean | ZonaDefaultArgs<ExtArgs>
    mascotas?: boolean | Usuario$mascotasArgs<ExtArgs>
    avistamientos?: boolean | Usuario$avistamientosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zona?: boolean | ZonaDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zona?: boolean | ZonaDefaultArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      zona: Prisma.$ZonaPayload<ExtArgs>
      mascotas: Prisma.$MascotaPayload<ExtArgs>[]
      avistamientos: Prisma.$AvistamientoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombres: string
      apellidos: string
      correo: string
      telefono: string
      contrasena: string
      rol: $Enums.RolUsuario
      zonaId: number
      activo: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    zona<T extends ZonaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ZonaDefaultArgs<ExtArgs>>): Prisma__ZonaClient<$Result.GetResult<Prisma.$ZonaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mascotas<T extends Usuario$mascotasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$mascotasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MascotaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    avistamientos<T extends Usuario$avistamientosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$avistamientosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvistamientoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nombres: FieldRef<"Usuario", 'String'>
    readonly apellidos: FieldRef<"Usuario", 'String'>
    readonly correo: FieldRef<"Usuario", 'String'>
    readonly telefono: FieldRef<"Usuario", 'String'>
    readonly contrasena: FieldRef<"Usuario", 'String'>
    readonly rol: FieldRef<"Usuario", 'RolUsuario'>
    readonly zonaId: FieldRef<"Usuario", 'Int'>
    readonly activo: FieldRef<"Usuario", 'Boolean'>
    readonly createdAt: FieldRef<"Usuario", 'DateTime'>
    readonly updatedAt: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.mascotas
   */
  export type Usuario$mascotasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mascota
     */
    select?: MascotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mascota
     */
    omit?: MascotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MascotaInclude<ExtArgs> | null
    where?: MascotaWhereInput
    orderBy?: MascotaOrderByWithRelationInput | MascotaOrderByWithRelationInput[]
    cursor?: MascotaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MascotaScalarFieldEnum | MascotaScalarFieldEnum[]
  }

  /**
   * Usuario.avistamientos
   */
  export type Usuario$avistamientosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avistamiento
     */
    select?: AvistamientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avistamiento
     */
    omit?: AvistamientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvistamientoInclude<ExtArgs> | null
    where?: AvistamientoWhereInput
    orderBy?: AvistamientoOrderByWithRelationInput | AvistamientoOrderByWithRelationInput[]
    cursor?: AvistamientoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvistamientoScalarFieldEnum | AvistamientoScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Mascota
   */

  export type AggregateMascota = {
    _count: MascotaCountAggregateOutputType | null
    _avg: MascotaAvgAggregateOutputType | null
    _sum: MascotaSumAggregateOutputType | null
    _min: MascotaMinAggregateOutputType | null
    _max: MascotaMaxAggregateOutputType | null
  }

  export type MascotaAvgAggregateOutputType = {
    id: number | null
    especieId: number | null
    edad: number | null
    duenioId: number | null
  }

  export type MascotaSumAggregateOutputType = {
    id: number | null
    especieId: number | null
    edad: number | null
    duenioId: number | null
  }

  export type MascotaMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    especieId: number | null
    raza: string | null
    color: string | null
    edad: number | null
    sexo: $Enums.SexoMascota | null
    descripcion: string | null
    fotoUrl: string | null
    duenioId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MascotaMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    especieId: number | null
    raza: string | null
    color: string | null
    edad: number | null
    sexo: $Enums.SexoMascota | null
    descripcion: string | null
    fotoUrl: string | null
    duenioId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MascotaCountAggregateOutputType = {
    id: number
    nombre: number
    especieId: number
    raza: number
    color: number
    edad: number
    sexo: number
    descripcion: number
    fotoUrl: number
    duenioId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MascotaAvgAggregateInputType = {
    id?: true
    especieId?: true
    edad?: true
    duenioId?: true
  }

  export type MascotaSumAggregateInputType = {
    id?: true
    especieId?: true
    edad?: true
    duenioId?: true
  }

  export type MascotaMinAggregateInputType = {
    id?: true
    nombre?: true
    especieId?: true
    raza?: true
    color?: true
    edad?: true
    sexo?: true
    descripcion?: true
    fotoUrl?: true
    duenioId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MascotaMaxAggregateInputType = {
    id?: true
    nombre?: true
    especieId?: true
    raza?: true
    color?: true
    edad?: true
    sexo?: true
    descripcion?: true
    fotoUrl?: true
    duenioId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MascotaCountAggregateInputType = {
    id?: true
    nombre?: true
    especieId?: true
    raza?: true
    color?: true
    edad?: true
    sexo?: true
    descripcion?: true
    fotoUrl?: true
    duenioId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MascotaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mascota to aggregate.
     */
    where?: MascotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mascotas to fetch.
     */
    orderBy?: MascotaOrderByWithRelationInput | MascotaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MascotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mascotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mascotas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mascotas
    **/
    _count?: true | MascotaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MascotaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MascotaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MascotaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MascotaMaxAggregateInputType
  }

  export type GetMascotaAggregateType<T extends MascotaAggregateArgs> = {
        [P in keyof T & keyof AggregateMascota]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMascota[P]>
      : GetScalarType<T[P], AggregateMascota[P]>
  }




  export type MascotaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MascotaWhereInput
    orderBy?: MascotaOrderByWithAggregationInput | MascotaOrderByWithAggregationInput[]
    by: MascotaScalarFieldEnum[] | MascotaScalarFieldEnum
    having?: MascotaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MascotaCountAggregateInputType | true
    _avg?: MascotaAvgAggregateInputType
    _sum?: MascotaSumAggregateInputType
    _min?: MascotaMinAggregateInputType
    _max?: MascotaMaxAggregateInputType
  }

  export type MascotaGroupByOutputType = {
    id: number
    nombre: string
    especieId: number
    raza: string | null
    color: string
    edad: number | null
    sexo: $Enums.SexoMascota
    descripcion: string | null
    fotoUrl: string | null
    duenioId: number
    createdAt: Date
    updatedAt: Date
    _count: MascotaCountAggregateOutputType | null
    _avg: MascotaAvgAggregateOutputType | null
    _sum: MascotaSumAggregateOutputType | null
    _min: MascotaMinAggregateOutputType | null
    _max: MascotaMaxAggregateOutputType | null
  }

  type GetMascotaGroupByPayload<T extends MascotaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MascotaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MascotaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MascotaGroupByOutputType[P]>
            : GetScalarType<T[P], MascotaGroupByOutputType[P]>
        }
      >
    >


  export type MascotaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    especieId?: boolean
    raza?: boolean
    color?: boolean
    edad?: boolean
    sexo?: boolean
    descripcion?: boolean
    fotoUrl?: boolean
    duenioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    especie?: boolean | EspecieDefaultArgs<ExtArgs>
    duenio?: boolean | UsuarioDefaultArgs<ExtArgs>
    reportes?: boolean | Mascota$reportesArgs<ExtArgs>
    _count?: boolean | MascotaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mascota"]>

  export type MascotaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    especieId?: boolean
    raza?: boolean
    color?: boolean
    edad?: boolean
    sexo?: boolean
    descripcion?: boolean
    fotoUrl?: boolean
    duenioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    especie?: boolean | EspecieDefaultArgs<ExtArgs>
    duenio?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mascota"]>

  export type MascotaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    especieId?: boolean
    raza?: boolean
    color?: boolean
    edad?: boolean
    sexo?: boolean
    descripcion?: boolean
    fotoUrl?: boolean
    duenioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    especie?: boolean | EspecieDefaultArgs<ExtArgs>
    duenio?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mascota"]>

  export type MascotaSelectScalar = {
    id?: boolean
    nombre?: boolean
    especieId?: boolean
    raza?: boolean
    color?: boolean
    edad?: boolean
    sexo?: boolean
    descripcion?: boolean
    fotoUrl?: boolean
    duenioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MascotaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "especieId" | "raza" | "color" | "edad" | "sexo" | "descripcion" | "fotoUrl" | "duenioId" | "createdAt" | "updatedAt", ExtArgs["result"]["mascota"]>
  export type MascotaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    especie?: boolean | EspecieDefaultArgs<ExtArgs>
    duenio?: boolean | UsuarioDefaultArgs<ExtArgs>
    reportes?: boolean | Mascota$reportesArgs<ExtArgs>
    _count?: boolean | MascotaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MascotaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    especie?: boolean | EspecieDefaultArgs<ExtArgs>
    duenio?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type MascotaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    especie?: boolean | EspecieDefaultArgs<ExtArgs>
    duenio?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $MascotaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mascota"
    objects: {
      especie: Prisma.$EspeciePayload<ExtArgs>
      duenio: Prisma.$UsuarioPayload<ExtArgs>
      reportes: Prisma.$ReportePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      especieId: number
      raza: string | null
      color: string
      edad: number | null
      sexo: $Enums.SexoMascota
      descripcion: string | null
      fotoUrl: string | null
      duenioId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mascota"]>
    composites: {}
  }

  type MascotaGetPayload<S extends boolean | null | undefined | MascotaDefaultArgs> = $Result.GetResult<Prisma.$MascotaPayload, S>

  type MascotaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MascotaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MascotaCountAggregateInputType | true
    }

  export interface MascotaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mascota'], meta: { name: 'Mascota' } }
    /**
     * Find zero or one Mascota that matches the filter.
     * @param {MascotaFindUniqueArgs} args - Arguments to find a Mascota
     * @example
     * // Get one Mascota
     * const mascota = await prisma.mascota.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MascotaFindUniqueArgs>(args: SelectSubset<T, MascotaFindUniqueArgs<ExtArgs>>): Prisma__MascotaClient<$Result.GetResult<Prisma.$MascotaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mascota that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MascotaFindUniqueOrThrowArgs} args - Arguments to find a Mascota
     * @example
     * // Get one Mascota
     * const mascota = await prisma.mascota.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MascotaFindUniqueOrThrowArgs>(args: SelectSubset<T, MascotaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MascotaClient<$Result.GetResult<Prisma.$MascotaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mascota that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MascotaFindFirstArgs} args - Arguments to find a Mascota
     * @example
     * // Get one Mascota
     * const mascota = await prisma.mascota.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MascotaFindFirstArgs>(args?: SelectSubset<T, MascotaFindFirstArgs<ExtArgs>>): Prisma__MascotaClient<$Result.GetResult<Prisma.$MascotaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mascota that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MascotaFindFirstOrThrowArgs} args - Arguments to find a Mascota
     * @example
     * // Get one Mascota
     * const mascota = await prisma.mascota.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MascotaFindFirstOrThrowArgs>(args?: SelectSubset<T, MascotaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MascotaClient<$Result.GetResult<Prisma.$MascotaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mascotas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MascotaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mascotas
     * const mascotas = await prisma.mascota.findMany()
     * 
     * // Get first 10 Mascotas
     * const mascotas = await prisma.mascota.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mascotaWithIdOnly = await prisma.mascota.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MascotaFindManyArgs>(args?: SelectSubset<T, MascotaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MascotaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mascota.
     * @param {MascotaCreateArgs} args - Arguments to create a Mascota.
     * @example
     * // Create one Mascota
     * const Mascota = await prisma.mascota.create({
     *   data: {
     *     // ... data to create a Mascota
     *   }
     * })
     * 
     */
    create<T extends MascotaCreateArgs>(args: SelectSubset<T, MascotaCreateArgs<ExtArgs>>): Prisma__MascotaClient<$Result.GetResult<Prisma.$MascotaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mascotas.
     * @param {MascotaCreateManyArgs} args - Arguments to create many Mascotas.
     * @example
     * // Create many Mascotas
     * const mascota = await prisma.mascota.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MascotaCreateManyArgs>(args?: SelectSubset<T, MascotaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mascotas and returns the data saved in the database.
     * @param {MascotaCreateManyAndReturnArgs} args - Arguments to create many Mascotas.
     * @example
     * // Create many Mascotas
     * const mascota = await prisma.mascota.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mascotas and only return the `id`
     * const mascotaWithIdOnly = await prisma.mascota.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MascotaCreateManyAndReturnArgs>(args?: SelectSubset<T, MascotaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MascotaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mascota.
     * @param {MascotaDeleteArgs} args - Arguments to delete one Mascota.
     * @example
     * // Delete one Mascota
     * const Mascota = await prisma.mascota.delete({
     *   where: {
     *     // ... filter to delete one Mascota
     *   }
     * })
     * 
     */
    delete<T extends MascotaDeleteArgs>(args: SelectSubset<T, MascotaDeleteArgs<ExtArgs>>): Prisma__MascotaClient<$Result.GetResult<Prisma.$MascotaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mascota.
     * @param {MascotaUpdateArgs} args - Arguments to update one Mascota.
     * @example
     * // Update one Mascota
     * const mascota = await prisma.mascota.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MascotaUpdateArgs>(args: SelectSubset<T, MascotaUpdateArgs<ExtArgs>>): Prisma__MascotaClient<$Result.GetResult<Prisma.$MascotaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mascotas.
     * @param {MascotaDeleteManyArgs} args - Arguments to filter Mascotas to delete.
     * @example
     * // Delete a few Mascotas
     * const { count } = await prisma.mascota.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MascotaDeleteManyArgs>(args?: SelectSubset<T, MascotaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mascotas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MascotaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mascotas
     * const mascota = await prisma.mascota.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MascotaUpdateManyArgs>(args: SelectSubset<T, MascotaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mascotas and returns the data updated in the database.
     * @param {MascotaUpdateManyAndReturnArgs} args - Arguments to update many Mascotas.
     * @example
     * // Update many Mascotas
     * const mascota = await prisma.mascota.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mascotas and only return the `id`
     * const mascotaWithIdOnly = await prisma.mascota.updateManyAndReturn({
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
    updateManyAndReturn<T extends MascotaUpdateManyAndReturnArgs>(args: SelectSubset<T, MascotaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MascotaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mascota.
     * @param {MascotaUpsertArgs} args - Arguments to update or create a Mascota.
     * @example
     * // Update or create a Mascota
     * const mascota = await prisma.mascota.upsert({
     *   create: {
     *     // ... data to create a Mascota
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mascota we want to update
     *   }
     * })
     */
    upsert<T extends MascotaUpsertArgs>(args: SelectSubset<T, MascotaUpsertArgs<ExtArgs>>): Prisma__MascotaClient<$Result.GetResult<Prisma.$MascotaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mascotas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MascotaCountArgs} args - Arguments to filter Mascotas to count.
     * @example
     * // Count the number of Mascotas
     * const count = await prisma.mascota.count({
     *   where: {
     *     // ... the filter for the Mascotas we want to count
     *   }
     * })
    **/
    count<T extends MascotaCountArgs>(
      args?: Subset<T, MascotaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MascotaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mascota.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MascotaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MascotaAggregateArgs>(args: Subset<T, MascotaAggregateArgs>): Prisma.PrismaPromise<GetMascotaAggregateType<T>>

    /**
     * Group by Mascota.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MascotaGroupByArgs} args - Group by arguments.
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
      T extends MascotaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MascotaGroupByArgs['orderBy'] }
        : { orderBy?: MascotaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MascotaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMascotaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mascota model
   */
  readonly fields: MascotaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mascota.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MascotaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    especie<T extends EspecieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EspecieDefaultArgs<ExtArgs>>): Prisma__EspecieClient<$Result.GetResult<Prisma.$EspeciePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    duenio<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reportes<T extends Mascota$reportesArgs<ExtArgs> = {}>(args?: Subset<T, Mascota$reportesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Mascota model
   */
  interface MascotaFieldRefs {
    readonly id: FieldRef<"Mascota", 'Int'>
    readonly nombre: FieldRef<"Mascota", 'String'>
    readonly especieId: FieldRef<"Mascota", 'Int'>
    readonly raza: FieldRef<"Mascota", 'String'>
    readonly color: FieldRef<"Mascota", 'String'>
    readonly edad: FieldRef<"Mascota", 'Int'>
    readonly sexo: FieldRef<"Mascota", 'SexoMascota'>
    readonly descripcion: FieldRef<"Mascota", 'String'>
    readonly fotoUrl: FieldRef<"Mascota", 'String'>
    readonly duenioId: FieldRef<"Mascota", 'Int'>
    readonly createdAt: FieldRef<"Mascota", 'DateTime'>
    readonly updatedAt: FieldRef<"Mascota", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Mascota findUnique
   */
  export type MascotaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mascota
     */
    select?: MascotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mascota
     */
    omit?: MascotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MascotaInclude<ExtArgs> | null
    /**
     * Filter, which Mascota to fetch.
     */
    where: MascotaWhereUniqueInput
  }

  /**
   * Mascota findUniqueOrThrow
   */
  export type MascotaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mascota
     */
    select?: MascotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mascota
     */
    omit?: MascotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MascotaInclude<ExtArgs> | null
    /**
     * Filter, which Mascota to fetch.
     */
    where: MascotaWhereUniqueInput
  }

  /**
   * Mascota findFirst
   */
  export type MascotaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mascota
     */
    select?: MascotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mascota
     */
    omit?: MascotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MascotaInclude<ExtArgs> | null
    /**
     * Filter, which Mascota to fetch.
     */
    where?: MascotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mascotas to fetch.
     */
    orderBy?: MascotaOrderByWithRelationInput | MascotaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mascotas.
     */
    cursor?: MascotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mascotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mascotas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mascotas.
     */
    distinct?: MascotaScalarFieldEnum | MascotaScalarFieldEnum[]
  }

  /**
   * Mascota findFirstOrThrow
   */
  export type MascotaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mascota
     */
    select?: MascotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mascota
     */
    omit?: MascotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MascotaInclude<ExtArgs> | null
    /**
     * Filter, which Mascota to fetch.
     */
    where?: MascotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mascotas to fetch.
     */
    orderBy?: MascotaOrderByWithRelationInput | MascotaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mascotas.
     */
    cursor?: MascotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mascotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mascotas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mascotas.
     */
    distinct?: MascotaScalarFieldEnum | MascotaScalarFieldEnum[]
  }

  /**
   * Mascota findMany
   */
  export type MascotaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mascota
     */
    select?: MascotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mascota
     */
    omit?: MascotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MascotaInclude<ExtArgs> | null
    /**
     * Filter, which Mascotas to fetch.
     */
    where?: MascotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mascotas to fetch.
     */
    orderBy?: MascotaOrderByWithRelationInput | MascotaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mascotas.
     */
    cursor?: MascotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mascotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mascotas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mascotas.
     */
    distinct?: MascotaScalarFieldEnum | MascotaScalarFieldEnum[]
  }

  /**
   * Mascota create
   */
  export type MascotaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mascota
     */
    select?: MascotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mascota
     */
    omit?: MascotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MascotaInclude<ExtArgs> | null
    /**
     * The data needed to create a Mascota.
     */
    data: XOR<MascotaCreateInput, MascotaUncheckedCreateInput>
  }

  /**
   * Mascota createMany
   */
  export type MascotaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mascotas.
     */
    data: MascotaCreateManyInput | MascotaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mascota createManyAndReturn
   */
  export type MascotaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mascota
     */
    select?: MascotaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mascota
     */
    omit?: MascotaOmit<ExtArgs> | null
    /**
     * The data used to create many Mascotas.
     */
    data: MascotaCreateManyInput | MascotaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MascotaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mascota update
   */
  export type MascotaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mascota
     */
    select?: MascotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mascota
     */
    omit?: MascotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MascotaInclude<ExtArgs> | null
    /**
     * The data needed to update a Mascota.
     */
    data: XOR<MascotaUpdateInput, MascotaUncheckedUpdateInput>
    /**
     * Choose, which Mascota to update.
     */
    where: MascotaWhereUniqueInput
  }

  /**
   * Mascota updateMany
   */
  export type MascotaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mascotas.
     */
    data: XOR<MascotaUpdateManyMutationInput, MascotaUncheckedUpdateManyInput>
    /**
     * Filter which Mascotas to update
     */
    where?: MascotaWhereInput
    /**
     * Limit how many Mascotas to update.
     */
    limit?: number
  }

  /**
   * Mascota updateManyAndReturn
   */
  export type MascotaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mascota
     */
    select?: MascotaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mascota
     */
    omit?: MascotaOmit<ExtArgs> | null
    /**
     * The data used to update Mascotas.
     */
    data: XOR<MascotaUpdateManyMutationInput, MascotaUncheckedUpdateManyInput>
    /**
     * Filter which Mascotas to update
     */
    where?: MascotaWhereInput
    /**
     * Limit how many Mascotas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MascotaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mascota upsert
   */
  export type MascotaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mascota
     */
    select?: MascotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mascota
     */
    omit?: MascotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MascotaInclude<ExtArgs> | null
    /**
     * The filter to search for the Mascota to update in case it exists.
     */
    where: MascotaWhereUniqueInput
    /**
     * In case the Mascota found by the `where` argument doesn't exist, create a new Mascota with this data.
     */
    create: XOR<MascotaCreateInput, MascotaUncheckedCreateInput>
    /**
     * In case the Mascota was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MascotaUpdateInput, MascotaUncheckedUpdateInput>
  }

  /**
   * Mascota delete
   */
  export type MascotaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mascota
     */
    select?: MascotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mascota
     */
    omit?: MascotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MascotaInclude<ExtArgs> | null
    /**
     * Filter which Mascota to delete.
     */
    where: MascotaWhereUniqueInput
  }

  /**
   * Mascota deleteMany
   */
  export type MascotaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mascotas to delete
     */
    where?: MascotaWhereInput
    /**
     * Limit how many Mascotas to delete.
     */
    limit?: number
  }

  /**
   * Mascota.reportes
   */
  export type Mascota$reportesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporte
     */
    select?: ReporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reporte
     */
    omit?: ReporteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteInclude<ExtArgs> | null
    where?: ReporteWhereInput
    orderBy?: ReporteOrderByWithRelationInput | ReporteOrderByWithRelationInput[]
    cursor?: ReporteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReporteScalarFieldEnum | ReporteScalarFieldEnum[]
  }

  /**
   * Mascota without action
   */
  export type MascotaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mascota
     */
    select?: MascotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mascota
     */
    omit?: MascotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MascotaInclude<ExtArgs> | null
  }


  /**
   * Model Reporte
   */

  export type AggregateReporte = {
    _count: ReporteCountAggregateOutputType | null
    _avg: ReporteAvgAggregateOutputType | null
    _sum: ReporteSumAggregateOutputType | null
    _min: ReporteMinAggregateOutputType | null
    _max: ReporteMaxAggregateOutputType | null
  }

  export type ReporteAvgAggregateOutputType = {
    id: number | null
    mascotaId: number | null
    zonaId: number | null
    latitud: number | null
    longitud: number | null
  }

  export type ReporteSumAggregateOutputType = {
    id: number | null
    mascotaId: number | null
    zonaId: number | null
    latitud: number | null
    longitud: number | null
  }

  export type ReporteMinAggregateOutputType = {
    id: number | null
    mascotaId: number | null
    zonaId: number | null
    descripcion: string | null
    fechaExtravio: Date | null
    latitud: number | null
    longitud: number | null
    direccionTexto: string | null
    estado: $Enums.EstadoReporte | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReporteMaxAggregateOutputType = {
    id: number | null
    mascotaId: number | null
    zonaId: number | null
    descripcion: string | null
    fechaExtravio: Date | null
    latitud: number | null
    longitud: number | null
    direccionTexto: string | null
    estado: $Enums.EstadoReporte | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReporteCountAggregateOutputType = {
    id: number
    mascotaId: number
    zonaId: number
    descripcion: number
    fechaExtravio: number
    latitud: number
    longitud: number
    direccionTexto: number
    estado: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReporteAvgAggregateInputType = {
    id?: true
    mascotaId?: true
    zonaId?: true
    latitud?: true
    longitud?: true
  }

  export type ReporteSumAggregateInputType = {
    id?: true
    mascotaId?: true
    zonaId?: true
    latitud?: true
    longitud?: true
  }

  export type ReporteMinAggregateInputType = {
    id?: true
    mascotaId?: true
    zonaId?: true
    descripcion?: true
    fechaExtravio?: true
    latitud?: true
    longitud?: true
    direccionTexto?: true
    estado?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReporteMaxAggregateInputType = {
    id?: true
    mascotaId?: true
    zonaId?: true
    descripcion?: true
    fechaExtravio?: true
    latitud?: true
    longitud?: true
    direccionTexto?: true
    estado?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReporteCountAggregateInputType = {
    id?: true
    mascotaId?: true
    zonaId?: true
    descripcion?: true
    fechaExtravio?: true
    latitud?: true
    longitud?: true
    direccionTexto?: true
    estado?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReporteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reporte to aggregate.
     */
    where?: ReporteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reportes to fetch.
     */
    orderBy?: ReporteOrderByWithRelationInput | ReporteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReporteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reportes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reportes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reportes
    **/
    _count?: true | ReporteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReporteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReporteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReporteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReporteMaxAggregateInputType
  }

  export type GetReporteAggregateType<T extends ReporteAggregateArgs> = {
        [P in keyof T & keyof AggregateReporte]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReporte[P]>
      : GetScalarType<T[P], AggregateReporte[P]>
  }




  export type ReporteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReporteWhereInput
    orderBy?: ReporteOrderByWithAggregationInput | ReporteOrderByWithAggregationInput[]
    by: ReporteScalarFieldEnum[] | ReporteScalarFieldEnum
    having?: ReporteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReporteCountAggregateInputType | true
    _avg?: ReporteAvgAggregateInputType
    _sum?: ReporteSumAggregateInputType
    _min?: ReporteMinAggregateInputType
    _max?: ReporteMaxAggregateInputType
  }

  export type ReporteGroupByOutputType = {
    id: number
    mascotaId: number
    zonaId: number
    descripcion: string
    fechaExtravio: Date
    latitud: number | null
    longitud: number | null
    direccionTexto: string | null
    estado: $Enums.EstadoReporte
    createdAt: Date
    updatedAt: Date
    _count: ReporteCountAggregateOutputType | null
    _avg: ReporteAvgAggregateOutputType | null
    _sum: ReporteSumAggregateOutputType | null
    _min: ReporteMinAggregateOutputType | null
    _max: ReporteMaxAggregateOutputType | null
  }

  type GetReporteGroupByPayload<T extends ReporteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReporteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReporteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReporteGroupByOutputType[P]>
            : GetScalarType<T[P], ReporteGroupByOutputType[P]>
        }
      >
    >


  export type ReporteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mascotaId?: boolean
    zonaId?: boolean
    descripcion?: boolean
    fechaExtravio?: boolean
    latitud?: boolean
    longitud?: boolean
    direccionTexto?: boolean
    estado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mascota?: boolean | MascotaDefaultArgs<ExtArgs>
    zona?: boolean | ZonaDefaultArgs<ExtArgs>
    perdida?: boolean | Reporte$perdidaArgs<ExtArgs>
    avistamientos?: boolean | Reporte$avistamientosArgs<ExtArgs>
    _count?: boolean | ReporteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reporte"]>

  export type ReporteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mascotaId?: boolean
    zonaId?: boolean
    descripcion?: boolean
    fechaExtravio?: boolean
    latitud?: boolean
    longitud?: boolean
    direccionTexto?: boolean
    estado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mascota?: boolean | MascotaDefaultArgs<ExtArgs>
    zona?: boolean | ZonaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reporte"]>

  export type ReporteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mascotaId?: boolean
    zonaId?: boolean
    descripcion?: boolean
    fechaExtravio?: boolean
    latitud?: boolean
    longitud?: boolean
    direccionTexto?: boolean
    estado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mascota?: boolean | MascotaDefaultArgs<ExtArgs>
    zona?: boolean | ZonaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reporte"]>

  export type ReporteSelectScalar = {
    id?: boolean
    mascotaId?: boolean
    zonaId?: boolean
    descripcion?: boolean
    fechaExtravio?: boolean
    latitud?: boolean
    longitud?: boolean
    direccionTexto?: boolean
    estado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReporteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mascotaId" | "zonaId" | "descripcion" | "fechaExtravio" | "latitud" | "longitud" | "direccionTexto" | "estado" | "createdAt" | "updatedAt", ExtArgs["result"]["reporte"]>
  export type ReporteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mascota?: boolean | MascotaDefaultArgs<ExtArgs>
    zona?: boolean | ZonaDefaultArgs<ExtArgs>
    perdida?: boolean | Reporte$perdidaArgs<ExtArgs>
    avistamientos?: boolean | Reporte$avistamientosArgs<ExtArgs>
    _count?: boolean | ReporteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReporteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mascota?: boolean | MascotaDefaultArgs<ExtArgs>
    zona?: boolean | ZonaDefaultArgs<ExtArgs>
  }
  export type ReporteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mascota?: boolean | MascotaDefaultArgs<ExtArgs>
    zona?: boolean | ZonaDefaultArgs<ExtArgs>
  }

  export type $ReportePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reporte"
    objects: {
      mascota: Prisma.$MascotaPayload<ExtArgs>
      zona: Prisma.$ZonaPayload<ExtArgs>
      perdida: Prisma.$PerdidaPayload<ExtArgs> | null
      avistamientos: Prisma.$AvistamientoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      mascotaId: number
      zonaId: number
      descripcion: string
      fechaExtravio: Date
      latitud: number | null
      longitud: number | null
      direccionTexto: string | null
      estado: $Enums.EstadoReporte
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reporte"]>
    composites: {}
  }

  type ReporteGetPayload<S extends boolean | null | undefined | ReporteDefaultArgs> = $Result.GetResult<Prisma.$ReportePayload, S>

  type ReporteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReporteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReporteCountAggregateInputType | true
    }

  export interface ReporteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reporte'], meta: { name: 'Reporte' } }
    /**
     * Find zero or one Reporte that matches the filter.
     * @param {ReporteFindUniqueArgs} args - Arguments to find a Reporte
     * @example
     * // Get one Reporte
     * const reporte = await prisma.reporte.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReporteFindUniqueArgs>(args: SelectSubset<T, ReporteFindUniqueArgs<ExtArgs>>): Prisma__ReporteClient<$Result.GetResult<Prisma.$ReportePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reporte that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReporteFindUniqueOrThrowArgs} args - Arguments to find a Reporte
     * @example
     * // Get one Reporte
     * const reporte = await prisma.reporte.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReporteFindUniqueOrThrowArgs>(args: SelectSubset<T, ReporteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReporteClient<$Result.GetResult<Prisma.$ReportePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reporte that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReporteFindFirstArgs} args - Arguments to find a Reporte
     * @example
     * // Get one Reporte
     * const reporte = await prisma.reporte.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReporteFindFirstArgs>(args?: SelectSubset<T, ReporteFindFirstArgs<ExtArgs>>): Prisma__ReporteClient<$Result.GetResult<Prisma.$ReportePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reporte that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReporteFindFirstOrThrowArgs} args - Arguments to find a Reporte
     * @example
     * // Get one Reporte
     * const reporte = await prisma.reporte.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReporteFindFirstOrThrowArgs>(args?: SelectSubset<T, ReporteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReporteClient<$Result.GetResult<Prisma.$ReportePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reportes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReporteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reportes
     * const reportes = await prisma.reporte.findMany()
     * 
     * // Get first 10 Reportes
     * const reportes = await prisma.reporte.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reporteWithIdOnly = await prisma.reporte.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReporteFindManyArgs>(args?: SelectSubset<T, ReporteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reporte.
     * @param {ReporteCreateArgs} args - Arguments to create a Reporte.
     * @example
     * // Create one Reporte
     * const Reporte = await prisma.reporte.create({
     *   data: {
     *     // ... data to create a Reporte
     *   }
     * })
     * 
     */
    create<T extends ReporteCreateArgs>(args: SelectSubset<T, ReporteCreateArgs<ExtArgs>>): Prisma__ReporteClient<$Result.GetResult<Prisma.$ReportePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reportes.
     * @param {ReporteCreateManyArgs} args - Arguments to create many Reportes.
     * @example
     * // Create many Reportes
     * const reporte = await prisma.reporte.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReporteCreateManyArgs>(args?: SelectSubset<T, ReporteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reportes and returns the data saved in the database.
     * @param {ReporteCreateManyAndReturnArgs} args - Arguments to create many Reportes.
     * @example
     * // Create many Reportes
     * const reporte = await prisma.reporte.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reportes and only return the `id`
     * const reporteWithIdOnly = await prisma.reporte.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReporteCreateManyAndReturnArgs>(args?: SelectSubset<T, ReporteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reporte.
     * @param {ReporteDeleteArgs} args - Arguments to delete one Reporte.
     * @example
     * // Delete one Reporte
     * const Reporte = await prisma.reporte.delete({
     *   where: {
     *     // ... filter to delete one Reporte
     *   }
     * })
     * 
     */
    delete<T extends ReporteDeleteArgs>(args: SelectSubset<T, ReporteDeleteArgs<ExtArgs>>): Prisma__ReporteClient<$Result.GetResult<Prisma.$ReportePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reporte.
     * @param {ReporteUpdateArgs} args - Arguments to update one Reporte.
     * @example
     * // Update one Reporte
     * const reporte = await prisma.reporte.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReporteUpdateArgs>(args: SelectSubset<T, ReporteUpdateArgs<ExtArgs>>): Prisma__ReporteClient<$Result.GetResult<Prisma.$ReportePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reportes.
     * @param {ReporteDeleteManyArgs} args - Arguments to filter Reportes to delete.
     * @example
     * // Delete a few Reportes
     * const { count } = await prisma.reporte.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReporteDeleteManyArgs>(args?: SelectSubset<T, ReporteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reportes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReporteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reportes
     * const reporte = await prisma.reporte.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReporteUpdateManyArgs>(args: SelectSubset<T, ReporteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reportes and returns the data updated in the database.
     * @param {ReporteUpdateManyAndReturnArgs} args - Arguments to update many Reportes.
     * @example
     * // Update many Reportes
     * const reporte = await prisma.reporte.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reportes and only return the `id`
     * const reporteWithIdOnly = await prisma.reporte.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReporteUpdateManyAndReturnArgs>(args: SelectSubset<T, ReporteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reporte.
     * @param {ReporteUpsertArgs} args - Arguments to update or create a Reporte.
     * @example
     * // Update or create a Reporte
     * const reporte = await prisma.reporte.upsert({
     *   create: {
     *     // ... data to create a Reporte
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reporte we want to update
     *   }
     * })
     */
    upsert<T extends ReporteUpsertArgs>(args: SelectSubset<T, ReporteUpsertArgs<ExtArgs>>): Prisma__ReporteClient<$Result.GetResult<Prisma.$ReportePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reportes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReporteCountArgs} args - Arguments to filter Reportes to count.
     * @example
     * // Count the number of Reportes
     * const count = await prisma.reporte.count({
     *   where: {
     *     // ... the filter for the Reportes we want to count
     *   }
     * })
    **/
    count<T extends ReporteCountArgs>(
      args?: Subset<T, ReporteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReporteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reporte.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReporteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReporteAggregateArgs>(args: Subset<T, ReporteAggregateArgs>): Prisma.PrismaPromise<GetReporteAggregateType<T>>

    /**
     * Group by Reporte.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReporteGroupByArgs} args - Group by arguments.
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
      T extends ReporteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReporteGroupByArgs['orderBy'] }
        : { orderBy?: ReporteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReporteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReporteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reporte model
   */
  readonly fields: ReporteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reporte.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReporteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mascota<T extends MascotaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MascotaDefaultArgs<ExtArgs>>): Prisma__MascotaClient<$Result.GetResult<Prisma.$MascotaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    zona<T extends ZonaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ZonaDefaultArgs<ExtArgs>>): Prisma__ZonaClient<$Result.GetResult<Prisma.$ZonaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    perdida<T extends Reporte$perdidaArgs<ExtArgs> = {}>(args?: Subset<T, Reporte$perdidaArgs<ExtArgs>>): Prisma__PerdidaClient<$Result.GetResult<Prisma.$PerdidaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    avistamientos<T extends Reporte$avistamientosArgs<ExtArgs> = {}>(args?: Subset<T, Reporte$avistamientosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvistamientoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Reporte model
   */
  interface ReporteFieldRefs {
    readonly id: FieldRef<"Reporte", 'Int'>
    readonly mascotaId: FieldRef<"Reporte", 'Int'>
    readonly zonaId: FieldRef<"Reporte", 'Int'>
    readonly descripcion: FieldRef<"Reporte", 'String'>
    readonly fechaExtravio: FieldRef<"Reporte", 'DateTime'>
    readonly latitud: FieldRef<"Reporte", 'Float'>
    readonly longitud: FieldRef<"Reporte", 'Float'>
    readonly direccionTexto: FieldRef<"Reporte", 'String'>
    readonly estado: FieldRef<"Reporte", 'EstadoReporte'>
    readonly createdAt: FieldRef<"Reporte", 'DateTime'>
    readonly updatedAt: FieldRef<"Reporte", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reporte findUnique
   */
  export type ReporteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporte
     */
    select?: ReporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reporte
     */
    omit?: ReporteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteInclude<ExtArgs> | null
    /**
     * Filter, which Reporte to fetch.
     */
    where: ReporteWhereUniqueInput
  }

  /**
   * Reporte findUniqueOrThrow
   */
  export type ReporteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporte
     */
    select?: ReporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reporte
     */
    omit?: ReporteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteInclude<ExtArgs> | null
    /**
     * Filter, which Reporte to fetch.
     */
    where: ReporteWhereUniqueInput
  }

  /**
   * Reporte findFirst
   */
  export type ReporteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporte
     */
    select?: ReporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reporte
     */
    omit?: ReporteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteInclude<ExtArgs> | null
    /**
     * Filter, which Reporte to fetch.
     */
    where?: ReporteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reportes to fetch.
     */
    orderBy?: ReporteOrderByWithRelationInput | ReporteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reportes.
     */
    cursor?: ReporteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reportes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reportes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reportes.
     */
    distinct?: ReporteScalarFieldEnum | ReporteScalarFieldEnum[]
  }

  /**
   * Reporte findFirstOrThrow
   */
  export type ReporteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporte
     */
    select?: ReporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reporte
     */
    omit?: ReporteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteInclude<ExtArgs> | null
    /**
     * Filter, which Reporte to fetch.
     */
    where?: ReporteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reportes to fetch.
     */
    orderBy?: ReporteOrderByWithRelationInput | ReporteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reportes.
     */
    cursor?: ReporteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reportes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reportes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reportes.
     */
    distinct?: ReporteScalarFieldEnum | ReporteScalarFieldEnum[]
  }

  /**
   * Reporte findMany
   */
  export type ReporteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporte
     */
    select?: ReporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reporte
     */
    omit?: ReporteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteInclude<ExtArgs> | null
    /**
     * Filter, which Reportes to fetch.
     */
    where?: ReporteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reportes to fetch.
     */
    orderBy?: ReporteOrderByWithRelationInput | ReporteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reportes.
     */
    cursor?: ReporteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reportes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reportes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reportes.
     */
    distinct?: ReporteScalarFieldEnum | ReporteScalarFieldEnum[]
  }

  /**
   * Reporte create
   */
  export type ReporteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporte
     */
    select?: ReporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reporte
     */
    omit?: ReporteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteInclude<ExtArgs> | null
    /**
     * The data needed to create a Reporte.
     */
    data: XOR<ReporteCreateInput, ReporteUncheckedCreateInput>
  }

  /**
   * Reporte createMany
   */
  export type ReporteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reportes.
     */
    data: ReporteCreateManyInput | ReporteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reporte createManyAndReturn
   */
  export type ReporteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporte
     */
    select?: ReporteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reporte
     */
    omit?: ReporteOmit<ExtArgs> | null
    /**
     * The data used to create many Reportes.
     */
    data: ReporteCreateManyInput | ReporteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reporte update
   */
  export type ReporteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporte
     */
    select?: ReporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reporte
     */
    omit?: ReporteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteInclude<ExtArgs> | null
    /**
     * The data needed to update a Reporte.
     */
    data: XOR<ReporteUpdateInput, ReporteUncheckedUpdateInput>
    /**
     * Choose, which Reporte to update.
     */
    where: ReporteWhereUniqueInput
  }

  /**
   * Reporte updateMany
   */
  export type ReporteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reportes.
     */
    data: XOR<ReporteUpdateManyMutationInput, ReporteUncheckedUpdateManyInput>
    /**
     * Filter which Reportes to update
     */
    where?: ReporteWhereInput
    /**
     * Limit how many Reportes to update.
     */
    limit?: number
  }

  /**
   * Reporte updateManyAndReturn
   */
  export type ReporteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporte
     */
    select?: ReporteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reporte
     */
    omit?: ReporteOmit<ExtArgs> | null
    /**
     * The data used to update Reportes.
     */
    data: XOR<ReporteUpdateManyMutationInput, ReporteUncheckedUpdateManyInput>
    /**
     * Filter which Reportes to update
     */
    where?: ReporteWhereInput
    /**
     * Limit how many Reportes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reporte upsert
   */
  export type ReporteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporte
     */
    select?: ReporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reporte
     */
    omit?: ReporteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteInclude<ExtArgs> | null
    /**
     * The filter to search for the Reporte to update in case it exists.
     */
    where: ReporteWhereUniqueInput
    /**
     * In case the Reporte found by the `where` argument doesn't exist, create a new Reporte with this data.
     */
    create: XOR<ReporteCreateInput, ReporteUncheckedCreateInput>
    /**
     * In case the Reporte was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReporteUpdateInput, ReporteUncheckedUpdateInput>
  }

  /**
   * Reporte delete
   */
  export type ReporteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporte
     */
    select?: ReporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reporte
     */
    omit?: ReporteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteInclude<ExtArgs> | null
    /**
     * Filter which Reporte to delete.
     */
    where: ReporteWhereUniqueInput
  }

  /**
   * Reporte deleteMany
   */
  export type ReporteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reportes to delete
     */
    where?: ReporteWhereInput
    /**
     * Limit how many Reportes to delete.
     */
    limit?: number
  }

  /**
   * Reporte.perdida
   */
  export type Reporte$perdidaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perdida
     */
    select?: PerdidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perdida
     */
    omit?: PerdidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerdidaInclude<ExtArgs> | null
    where?: PerdidaWhereInput
  }

  /**
   * Reporte.avistamientos
   */
  export type Reporte$avistamientosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avistamiento
     */
    select?: AvistamientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avistamiento
     */
    omit?: AvistamientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvistamientoInclude<ExtArgs> | null
    where?: AvistamientoWhereInput
    orderBy?: AvistamientoOrderByWithRelationInput | AvistamientoOrderByWithRelationInput[]
    cursor?: AvistamientoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvistamientoScalarFieldEnum | AvistamientoScalarFieldEnum[]
  }

  /**
   * Reporte without action
   */
  export type ReporteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reporte
     */
    select?: ReporteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reporte
     */
    omit?: ReporteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReporteInclude<ExtArgs> | null
  }


  /**
   * Model Perdida
   */

  export type AggregatePerdida = {
    _count: PerdidaCountAggregateOutputType | null
    _avg: PerdidaAvgAggregateOutputType | null
    _sum: PerdidaSumAggregateOutputType | null
    _min: PerdidaMinAggregateOutputType | null
    _max: PerdidaMaxAggregateOutputType | null
  }

  export type PerdidaAvgAggregateOutputType = {
    id: number | null
    reporteId: number | null
    recompensa: number | null
  }

  export type PerdidaSumAggregateOutputType = {
    id: number | null
    reporteId: number | null
    recompensa: number | null
  }

  export type PerdidaMinAggregateOutputType = {
    id: number | null
    reporteId: number | null
    fotoUrl: string | null
    circunstancias: string | null
    recompensa: number | null
    contactoUrgente: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PerdidaMaxAggregateOutputType = {
    id: number | null
    reporteId: number | null
    fotoUrl: string | null
    circunstancias: string | null
    recompensa: number | null
    contactoUrgente: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PerdidaCountAggregateOutputType = {
    id: number
    reporteId: number
    fotoUrl: number
    circunstancias: number
    recompensa: number
    contactoUrgente: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PerdidaAvgAggregateInputType = {
    id?: true
    reporteId?: true
    recompensa?: true
  }

  export type PerdidaSumAggregateInputType = {
    id?: true
    reporteId?: true
    recompensa?: true
  }

  export type PerdidaMinAggregateInputType = {
    id?: true
    reporteId?: true
    fotoUrl?: true
    circunstancias?: true
    recompensa?: true
    contactoUrgente?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PerdidaMaxAggregateInputType = {
    id?: true
    reporteId?: true
    fotoUrl?: true
    circunstancias?: true
    recompensa?: true
    contactoUrgente?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PerdidaCountAggregateInputType = {
    id?: true
    reporteId?: true
    fotoUrl?: true
    circunstancias?: true
    recompensa?: true
    contactoUrgente?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PerdidaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Perdida to aggregate.
     */
    where?: PerdidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perdidas to fetch.
     */
    orderBy?: PerdidaOrderByWithRelationInput | PerdidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PerdidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perdidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perdidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Perdidas
    **/
    _count?: true | PerdidaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PerdidaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PerdidaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PerdidaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PerdidaMaxAggregateInputType
  }

  export type GetPerdidaAggregateType<T extends PerdidaAggregateArgs> = {
        [P in keyof T & keyof AggregatePerdida]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerdida[P]>
      : GetScalarType<T[P], AggregatePerdida[P]>
  }




  export type PerdidaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PerdidaWhereInput
    orderBy?: PerdidaOrderByWithAggregationInput | PerdidaOrderByWithAggregationInput[]
    by: PerdidaScalarFieldEnum[] | PerdidaScalarFieldEnum
    having?: PerdidaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PerdidaCountAggregateInputType | true
    _avg?: PerdidaAvgAggregateInputType
    _sum?: PerdidaSumAggregateInputType
    _min?: PerdidaMinAggregateInputType
    _max?: PerdidaMaxAggregateInputType
  }

  export type PerdidaGroupByOutputType = {
    id: number
    reporteId: number
    fotoUrl: string | null
    circunstancias: string | null
    recompensa: number | null
    contactoUrgente: string | null
    createdAt: Date
    updatedAt: Date
    _count: PerdidaCountAggregateOutputType | null
    _avg: PerdidaAvgAggregateOutputType | null
    _sum: PerdidaSumAggregateOutputType | null
    _min: PerdidaMinAggregateOutputType | null
    _max: PerdidaMaxAggregateOutputType | null
  }

  type GetPerdidaGroupByPayload<T extends PerdidaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PerdidaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PerdidaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PerdidaGroupByOutputType[P]>
            : GetScalarType<T[P], PerdidaGroupByOutputType[P]>
        }
      >
    >


  export type PerdidaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reporteId?: boolean
    fotoUrl?: boolean
    circunstancias?: boolean
    recompensa?: boolean
    contactoUrgente?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reporte?: boolean | ReporteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["perdida"]>

  export type PerdidaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reporteId?: boolean
    fotoUrl?: boolean
    circunstancias?: boolean
    recompensa?: boolean
    contactoUrgente?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reporte?: boolean | ReporteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["perdida"]>

  export type PerdidaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reporteId?: boolean
    fotoUrl?: boolean
    circunstancias?: boolean
    recompensa?: boolean
    contactoUrgente?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reporte?: boolean | ReporteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["perdida"]>

  export type PerdidaSelectScalar = {
    id?: boolean
    reporteId?: boolean
    fotoUrl?: boolean
    circunstancias?: boolean
    recompensa?: boolean
    contactoUrgente?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PerdidaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reporteId" | "fotoUrl" | "circunstancias" | "recompensa" | "contactoUrgente" | "createdAt" | "updatedAt", ExtArgs["result"]["perdida"]>
  export type PerdidaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reporte?: boolean | ReporteDefaultArgs<ExtArgs>
  }
  export type PerdidaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reporte?: boolean | ReporteDefaultArgs<ExtArgs>
  }
  export type PerdidaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reporte?: boolean | ReporteDefaultArgs<ExtArgs>
  }

  export type $PerdidaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Perdida"
    objects: {
      reporte: Prisma.$ReportePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      reporteId: number
      fotoUrl: string | null
      circunstancias: string | null
      recompensa: number | null
      contactoUrgente: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["perdida"]>
    composites: {}
  }

  type PerdidaGetPayload<S extends boolean | null | undefined | PerdidaDefaultArgs> = $Result.GetResult<Prisma.$PerdidaPayload, S>

  type PerdidaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PerdidaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PerdidaCountAggregateInputType | true
    }

  export interface PerdidaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Perdida'], meta: { name: 'Perdida' } }
    /**
     * Find zero or one Perdida that matches the filter.
     * @param {PerdidaFindUniqueArgs} args - Arguments to find a Perdida
     * @example
     * // Get one Perdida
     * const perdida = await prisma.perdida.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PerdidaFindUniqueArgs>(args: SelectSubset<T, PerdidaFindUniqueArgs<ExtArgs>>): Prisma__PerdidaClient<$Result.GetResult<Prisma.$PerdidaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Perdida that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PerdidaFindUniqueOrThrowArgs} args - Arguments to find a Perdida
     * @example
     * // Get one Perdida
     * const perdida = await prisma.perdida.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PerdidaFindUniqueOrThrowArgs>(args: SelectSubset<T, PerdidaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PerdidaClient<$Result.GetResult<Prisma.$PerdidaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Perdida that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerdidaFindFirstArgs} args - Arguments to find a Perdida
     * @example
     * // Get one Perdida
     * const perdida = await prisma.perdida.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PerdidaFindFirstArgs>(args?: SelectSubset<T, PerdidaFindFirstArgs<ExtArgs>>): Prisma__PerdidaClient<$Result.GetResult<Prisma.$PerdidaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Perdida that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerdidaFindFirstOrThrowArgs} args - Arguments to find a Perdida
     * @example
     * // Get one Perdida
     * const perdida = await prisma.perdida.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PerdidaFindFirstOrThrowArgs>(args?: SelectSubset<T, PerdidaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PerdidaClient<$Result.GetResult<Prisma.$PerdidaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Perdidas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerdidaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Perdidas
     * const perdidas = await prisma.perdida.findMany()
     * 
     * // Get first 10 Perdidas
     * const perdidas = await prisma.perdida.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const perdidaWithIdOnly = await prisma.perdida.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PerdidaFindManyArgs>(args?: SelectSubset<T, PerdidaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerdidaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Perdida.
     * @param {PerdidaCreateArgs} args - Arguments to create a Perdida.
     * @example
     * // Create one Perdida
     * const Perdida = await prisma.perdida.create({
     *   data: {
     *     // ... data to create a Perdida
     *   }
     * })
     * 
     */
    create<T extends PerdidaCreateArgs>(args: SelectSubset<T, PerdidaCreateArgs<ExtArgs>>): Prisma__PerdidaClient<$Result.GetResult<Prisma.$PerdidaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Perdidas.
     * @param {PerdidaCreateManyArgs} args - Arguments to create many Perdidas.
     * @example
     * // Create many Perdidas
     * const perdida = await prisma.perdida.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PerdidaCreateManyArgs>(args?: SelectSubset<T, PerdidaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Perdidas and returns the data saved in the database.
     * @param {PerdidaCreateManyAndReturnArgs} args - Arguments to create many Perdidas.
     * @example
     * // Create many Perdidas
     * const perdida = await prisma.perdida.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Perdidas and only return the `id`
     * const perdidaWithIdOnly = await prisma.perdida.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PerdidaCreateManyAndReturnArgs>(args?: SelectSubset<T, PerdidaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerdidaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Perdida.
     * @param {PerdidaDeleteArgs} args - Arguments to delete one Perdida.
     * @example
     * // Delete one Perdida
     * const Perdida = await prisma.perdida.delete({
     *   where: {
     *     // ... filter to delete one Perdida
     *   }
     * })
     * 
     */
    delete<T extends PerdidaDeleteArgs>(args: SelectSubset<T, PerdidaDeleteArgs<ExtArgs>>): Prisma__PerdidaClient<$Result.GetResult<Prisma.$PerdidaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Perdida.
     * @param {PerdidaUpdateArgs} args - Arguments to update one Perdida.
     * @example
     * // Update one Perdida
     * const perdida = await prisma.perdida.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PerdidaUpdateArgs>(args: SelectSubset<T, PerdidaUpdateArgs<ExtArgs>>): Prisma__PerdidaClient<$Result.GetResult<Prisma.$PerdidaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Perdidas.
     * @param {PerdidaDeleteManyArgs} args - Arguments to filter Perdidas to delete.
     * @example
     * // Delete a few Perdidas
     * const { count } = await prisma.perdida.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PerdidaDeleteManyArgs>(args?: SelectSubset<T, PerdidaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Perdidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerdidaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Perdidas
     * const perdida = await prisma.perdida.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PerdidaUpdateManyArgs>(args: SelectSubset<T, PerdidaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Perdidas and returns the data updated in the database.
     * @param {PerdidaUpdateManyAndReturnArgs} args - Arguments to update many Perdidas.
     * @example
     * // Update many Perdidas
     * const perdida = await prisma.perdida.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Perdidas and only return the `id`
     * const perdidaWithIdOnly = await prisma.perdida.updateManyAndReturn({
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
    updateManyAndReturn<T extends PerdidaUpdateManyAndReturnArgs>(args: SelectSubset<T, PerdidaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerdidaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Perdida.
     * @param {PerdidaUpsertArgs} args - Arguments to update or create a Perdida.
     * @example
     * // Update or create a Perdida
     * const perdida = await prisma.perdida.upsert({
     *   create: {
     *     // ... data to create a Perdida
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Perdida we want to update
     *   }
     * })
     */
    upsert<T extends PerdidaUpsertArgs>(args: SelectSubset<T, PerdidaUpsertArgs<ExtArgs>>): Prisma__PerdidaClient<$Result.GetResult<Prisma.$PerdidaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Perdidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerdidaCountArgs} args - Arguments to filter Perdidas to count.
     * @example
     * // Count the number of Perdidas
     * const count = await prisma.perdida.count({
     *   where: {
     *     // ... the filter for the Perdidas we want to count
     *   }
     * })
    **/
    count<T extends PerdidaCountArgs>(
      args?: Subset<T, PerdidaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PerdidaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Perdida.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerdidaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PerdidaAggregateArgs>(args: Subset<T, PerdidaAggregateArgs>): Prisma.PrismaPromise<GetPerdidaAggregateType<T>>

    /**
     * Group by Perdida.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerdidaGroupByArgs} args - Group by arguments.
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
      T extends PerdidaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PerdidaGroupByArgs['orderBy'] }
        : { orderBy?: PerdidaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PerdidaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPerdidaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Perdida model
   */
  readonly fields: PerdidaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Perdida.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PerdidaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reporte<T extends ReporteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReporteDefaultArgs<ExtArgs>>): Prisma__ReporteClient<$Result.GetResult<Prisma.$ReportePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Perdida model
   */
  interface PerdidaFieldRefs {
    readonly id: FieldRef<"Perdida", 'Int'>
    readonly reporteId: FieldRef<"Perdida", 'Int'>
    readonly fotoUrl: FieldRef<"Perdida", 'String'>
    readonly circunstancias: FieldRef<"Perdida", 'String'>
    readonly recompensa: FieldRef<"Perdida", 'Float'>
    readonly contactoUrgente: FieldRef<"Perdida", 'String'>
    readonly createdAt: FieldRef<"Perdida", 'DateTime'>
    readonly updatedAt: FieldRef<"Perdida", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Perdida findUnique
   */
  export type PerdidaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perdida
     */
    select?: PerdidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perdida
     */
    omit?: PerdidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerdidaInclude<ExtArgs> | null
    /**
     * Filter, which Perdida to fetch.
     */
    where: PerdidaWhereUniqueInput
  }

  /**
   * Perdida findUniqueOrThrow
   */
  export type PerdidaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perdida
     */
    select?: PerdidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perdida
     */
    omit?: PerdidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerdidaInclude<ExtArgs> | null
    /**
     * Filter, which Perdida to fetch.
     */
    where: PerdidaWhereUniqueInput
  }

  /**
   * Perdida findFirst
   */
  export type PerdidaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perdida
     */
    select?: PerdidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perdida
     */
    omit?: PerdidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerdidaInclude<ExtArgs> | null
    /**
     * Filter, which Perdida to fetch.
     */
    where?: PerdidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perdidas to fetch.
     */
    orderBy?: PerdidaOrderByWithRelationInput | PerdidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Perdidas.
     */
    cursor?: PerdidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perdidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perdidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Perdidas.
     */
    distinct?: PerdidaScalarFieldEnum | PerdidaScalarFieldEnum[]
  }

  /**
   * Perdida findFirstOrThrow
   */
  export type PerdidaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perdida
     */
    select?: PerdidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perdida
     */
    omit?: PerdidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerdidaInclude<ExtArgs> | null
    /**
     * Filter, which Perdida to fetch.
     */
    where?: PerdidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perdidas to fetch.
     */
    orderBy?: PerdidaOrderByWithRelationInput | PerdidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Perdidas.
     */
    cursor?: PerdidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perdidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perdidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Perdidas.
     */
    distinct?: PerdidaScalarFieldEnum | PerdidaScalarFieldEnum[]
  }

  /**
   * Perdida findMany
   */
  export type PerdidaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perdida
     */
    select?: PerdidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perdida
     */
    omit?: PerdidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerdidaInclude<ExtArgs> | null
    /**
     * Filter, which Perdidas to fetch.
     */
    where?: PerdidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perdidas to fetch.
     */
    orderBy?: PerdidaOrderByWithRelationInput | PerdidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Perdidas.
     */
    cursor?: PerdidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perdidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perdidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Perdidas.
     */
    distinct?: PerdidaScalarFieldEnum | PerdidaScalarFieldEnum[]
  }

  /**
   * Perdida create
   */
  export type PerdidaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perdida
     */
    select?: PerdidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perdida
     */
    omit?: PerdidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerdidaInclude<ExtArgs> | null
    /**
     * The data needed to create a Perdida.
     */
    data: XOR<PerdidaCreateInput, PerdidaUncheckedCreateInput>
  }

  /**
   * Perdida createMany
   */
  export type PerdidaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Perdidas.
     */
    data: PerdidaCreateManyInput | PerdidaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Perdida createManyAndReturn
   */
  export type PerdidaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perdida
     */
    select?: PerdidaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Perdida
     */
    omit?: PerdidaOmit<ExtArgs> | null
    /**
     * The data used to create many Perdidas.
     */
    data: PerdidaCreateManyInput | PerdidaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerdidaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Perdida update
   */
  export type PerdidaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perdida
     */
    select?: PerdidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perdida
     */
    omit?: PerdidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerdidaInclude<ExtArgs> | null
    /**
     * The data needed to update a Perdida.
     */
    data: XOR<PerdidaUpdateInput, PerdidaUncheckedUpdateInput>
    /**
     * Choose, which Perdida to update.
     */
    where: PerdidaWhereUniqueInput
  }

  /**
   * Perdida updateMany
   */
  export type PerdidaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Perdidas.
     */
    data: XOR<PerdidaUpdateManyMutationInput, PerdidaUncheckedUpdateManyInput>
    /**
     * Filter which Perdidas to update
     */
    where?: PerdidaWhereInput
    /**
     * Limit how many Perdidas to update.
     */
    limit?: number
  }

  /**
   * Perdida updateManyAndReturn
   */
  export type PerdidaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perdida
     */
    select?: PerdidaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Perdida
     */
    omit?: PerdidaOmit<ExtArgs> | null
    /**
     * The data used to update Perdidas.
     */
    data: XOR<PerdidaUpdateManyMutationInput, PerdidaUncheckedUpdateManyInput>
    /**
     * Filter which Perdidas to update
     */
    where?: PerdidaWhereInput
    /**
     * Limit how many Perdidas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerdidaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Perdida upsert
   */
  export type PerdidaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perdida
     */
    select?: PerdidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perdida
     */
    omit?: PerdidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerdidaInclude<ExtArgs> | null
    /**
     * The filter to search for the Perdida to update in case it exists.
     */
    where: PerdidaWhereUniqueInput
    /**
     * In case the Perdida found by the `where` argument doesn't exist, create a new Perdida with this data.
     */
    create: XOR<PerdidaCreateInput, PerdidaUncheckedCreateInput>
    /**
     * In case the Perdida was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PerdidaUpdateInput, PerdidaUncheckedUpdateInput>
  }

  /**
   * Perdida delete
   */
  export type PerdidaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perdida
     */
    select?: PerdidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perdida
     */
    omit?: PerdidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerdidaInclude<ExtArgs> | null
    /**
     * Filter which Perdida to delete.
     */
    where: PerdidaWhereUniqueInput
  }

  /**
   * Perdida deleteMany
   */
  export type PerdidaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Perdidas to delete
     */
    where?: PerdidaWhereInput
    /**
     * Limit how many Perdidas to delete.
     */
    limit?: number
  }

  /**
   * Perdida without action
   */
  export type PerdidaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perdida
     */
    select?: PerdidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perdida
     */
    omit?: PerdidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerdidaInclude<ExtArgs> | null
  }


  /**
   * Model Avistamiento
   */

  export type AggregateAvistamiento = {
    _count: AvistamientoCountAggregateOutputType | null
    _avg: AvistamientoAvgAggregateOutputType | null
    _sum: AvistamientoSumAggregateOutputType | null
    _min: AvistamientoMinAggregateOutputType | null
    _max: AvistamientoMaxAggregateOutputType | null
  }

  export type AvistamientoAvgAggregateOutputType = {
    id: number | null
    reporteId: number | null
    colaboradorId: number | null
    latitud: number | null
    longitud: number | null
  }

  export type AvistamientoSumAggregateOutputType = {
    id: number | null
    reporteId: number | null
    colaboradorId: number | null
    latitud: number | null
    longitud: number | null
  }

  export type AvistamientoMinAggregateOutputType = {
    id: number | null
    reporteId: number | null
    colaboradorId: number | null
    fechaAvistamiento: Date | null
    latitud: number | null
    longitud: number | null
    direccionTexto: string | null
    observaciones: string | null
    fotoUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AvistamientoMaxAggregateOutputType = {
    id: number | null
    reporteId: number | null
    colaboradorId: number | null
    fechaAvistamiento: Date | null
    latitud: number | null
    longitud: number | null
    direccionTexto: string | null
    observaciones: string | null
    fotoUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AvistamientoCountAggregateOutputType = {
    id: number
    reporteId: number
    colaboradorId: number
    fechaAvistamiento: number
    latitud: number
    longitud: number
    direccionTexto: number
    observaciones: number
    fotoUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AvistamientoAvgAggregateInputType = {
    id?: true
    reporteId?: true
    colaboradorId?: true
    latitud?: true
    longitud?: true
  }

  export type AvistamientoSumAggregateInputType = {
    id?: true
    reporteId?: true
    colaboradorId?: true
    latitud?: true
    longitud?: true
  }

  export type AvistamientoMinAggregateInputType = {
    id?: true
    reporteId?: true
    colaboradorId?: true
    fechaAvistamiento?: true
    latitud?: true
    longitud?: true
    direccionTexto?: true
    observaciones?: true
    fotoUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AvistamientoMaxAggregateInputType = {
    id?: true
    reporteId?: true
    colaboradorId?: true
    fechaAvistamiento?: true
    latitud?: true
    longitud?: true
    direccionTexto?: true
    observaciones?: true
    fotoUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AvistamientoCountAggregateInputType = {
    id?: true
    reporteId?: true
    colaboradorId?: true
    fechaAvistamiento?: true
    latitud?: true
    longitud?: true
    direccionTexto?: true
    observaciones?: true
    fotoUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AvistamientoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avistamiento to aggregate.
     */
    where?: AvistamientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avistamientos to fetch.
     */
    orderBy?: AvistamientoOrderByWithRelationInput | AvistamientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvistamientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avistamientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avistamientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Avistamientos
    **/
    _count?: true | AvistamientoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvistamientoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvistamientoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvistamientoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvistamientoMaxAggregateInputType
  }

  export type GetAvistamientoAggregateType<T extends AvistamientoAggregateArgs> = {
        [P in keyof T & keyof AggregateAvistamiento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvistamiento[P]>
      : GetScalarType<T[P], AggregateAvistamiento[P]>
  }




  export type AvistamientoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvistamientoWhereInput
    orderBy?: AvistamientoOrderByWithAggregationInput | AvistamientoOrderByWithAggregationInput[]
    by: AvistamientoScalarFieldEnum[] | AvistamientoScalarFieldEnum
    having?: AvistamientoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvistamientoCountAggregateInputType | true
    _avg?: AvistamientoAvgAggregateInputType
    _sum?: AvistamientoSumAggregateInputType
    _min?: AvistamientoMinAggregateInputType
    _max?: AvistamientoMaxAggregateInputType
  }

  export type AvistamientoGroupByOutputType = {
    id: number
    reporteId: number
    colaboradorId: number
    fechaAvistamiento: Date
    latitud: number | null
    longitud: number | null
    direccionTexto: string | null
    observaciones: string
    fotoUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: AvistamientoCountAggregateOutputType | null
    _avg: AvistamientoAvgAggregateOutputType | null
    _sum: AvistamientoSumAggregateOutputType | null
    _min: AvistamientoMinAggregateOutputType | null
    _max: AvistamientoMaxAggregateOutputType | null
  }

  type GetAvistamientoGroupByPayload<T extends AvistamientoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvistamientoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvistamientoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvistamientoGroupByOutputType[P]>
            : GetScalarType<T[P], AvistamientoGroupByOutputType[P]>
        }
      >
    >


  export type AvistamientoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reporteId?: boolean
    colaboradorId?: boolean
    fechaAvistamiento?: boolean
    latitud?: boolean
    longitud?: boolean
    direccionTexto?: boolean
    observaciones?: boolean
    fotoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reporte?: boolean | ReporteDefaultArgs<ExtArgs>
    colaborador?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avistamiento"]>

  export type AvistamientoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reporteId?: boolean
    colaboradorId?: boolean
    fechaAvistamiento?: boolean
    latitud?: boolean
    longitud?: boolean
    direccionTexto?: boolean
    observaciones?: boolean
    fotoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reporte?: boolean | ReporteDefaultArgs<ExtArgs>
    colaborador?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avistamiento"]>

  export type AvistamientoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reporteId?: boolean
    colaboradorId?: boolean
    fechaAvistamiento?: boolean
    latitud?: boolean
    longitud?: boolean
    direccionTexto?: boolean
    observaciones?: boolean
    fotoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reporte?: boolean | ReporteDefaultArgs<ExtArgs>
    colaborador?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avistamiento"]>

  export type AvistamientoSelectScalar = {
    id?: boolean
    reporteId?: boolean
    colaboradorId?: boolean
    fechaAvistamiento?: boolean
    latitud?: boolean
    longitud?: boolean
    direccionTexto?: boolean
    observaciones?: boolean
    fotoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AvistamientoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reporteId" | "colaboradorId" | "fechaAvistamiento" | "latitud" | "longitud" | "direccionTexto" | "observaciones" | "fotoUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["avistamiento"]>
  export type AvistamientoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reporte?: boolean | ReporteDefaultArgs<ExtArgs>
    colaborador?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type AvistamientoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reporte?: boolean | ReporteDefaultArgs<ExtArgs>
    colaborador?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type AvistamientoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reporte?: boolean | ReporteDefaultArgs<ExtArgs>
    colaborador?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $AvistamientoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Avistamiento"
    objects: {
      reporte: Prisma.$ReportePayload<ExtArgs>
      colaborador: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      reporteId: number
      colaboradorId: number
      fechaAvistamiento: Date
      latitud: number | null
      longitud: number | null
      direccionTexto: string | null
      observaciones: string
      fotoUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["avistamiento"]>
    composites: {}
  }

  type AvistamientoGetPayload<S extends boolean | null | undefined | AvistamientoDefaultArgs> = $Result.GetResult<Prisma.$AvistamientoPayload, S>

  type AvistamientoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvistamientoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvistamientoCountAggregateInputType | true
    }

  export interface AvistamientoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Avistamiento'], meta: { name: 'Avistamiento' } }
    /**
     * Find zero or one Avistamiento that matches the filter.
     * @param {AvistamientoFindUniqueArgs} args - Arguments to find a Avistamiento
     * @example
     * // Get one Avistamiento
     * const avistamiento = await prisma.avistamiento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvistamientoFindUniqueArgs>(args: SelectSubset<T, AvistamientoFindUniqueArgs<ExtArgs>>): Prisma__AvistamientoClient<$Result.GetResult<Prisma.$AvistamientoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Avistamiento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvistamientoFindUniqueOrThrowArgs} args - Arguments to find a Avistamiento
     * @example
     * // Get one Avistamiento
     * const avistamiento = await prisma.avistamiento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvistamientoFindUniqueOrThrowArgs>(args: SelectSubset<T, AvistamientoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvistamientoClient<$Result.GetResult<Prisma.$AvistamientoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avistamiento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvistamientoFindFirstArgs} args - Arguments to find a Avistamiento
     * @example
     * // Get one Avistamiento
     * const avistamiento = await prisma.avistamiento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvistamientoFindFirstArgs>(args?: SelectSubset<T, AvistamientoFindFirstArgs<ExtArgs>>): Prisma__AvistamientoClient<$Result.GetResult<Prisma.$AvistamientoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avistamiento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvistamientoFindFirstOrThrowArgs} args - Arguments to find a Avistamiento
     * @example
     * // Get one Avistamiento
     * const avistamiento = await prisma.avistamiento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvistamientoFindFirstOrThrowArgs>(args?: SelectSubset<T, AvistamientoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvistamientoClient<$Result.GetResult<Prisma.$AvistamientoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Avistamientos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvistamientoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Avistamientos
     * const avistamientos = await prisma.avistamiento.findMany()
     * 
     * // Get first 10 Avistamientos
     * const avistamientos = await prisma.avistamiento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const avistamientoWithIdOnly = await prisma.avistamiento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvistamientoFindManyArgs>(args?: SelectSubset<T, AvistamientoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvistamientoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Avistamiento.
     * @param {AvistamientoCreateArgs} args - Arguments to create a Avistamiento.
     * @example
     * // Create one Avistamiento
     * const Avistamiento = await prisma.avistamiento.create({
     *   data: {
     *     // ... data to create a Avistamiento
     *   }
     * })
     * 
     */
    create<T extends AvistamientoCreateArgs>(args: SelectSubset<T, AvistamientoCreateArgs<ExtArgs>>): Prisma__AvistamientoClient<$Result.GetResult<Prisma.$AvistamientoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Avistamientos.
     * @param {AvistamientoCreateManyArgs} args - Arguments to create many Avistamientos.
     * @example
     * // Create many Avistamientos
     * const avistamiento = await prisma.avistamiento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvistamientoCreateManyArgs>(args?: SelectSubset<T, AvistamientoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Avistamientos and returns the data saved in the database.
     * @param {AvistamientoCreateManyAndReturnArgs} args - Arguments to create many Avistamientos.
     * @example
     * // Create many Avistamientos
     * const avistamiento = await prisma.avistamiento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Avistamientos and only return the `id`
     * const avistamientoWithIdOnly = await prisma.avistamiento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvistamientoCreateManyAndReturnArgs>(args?: SelectSubset<T, AvistamientoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvistamientoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Avistamiento.
     * @param {AvistamientoDeleteArgs} args - Arguments to delete one Avistamiento.
     * @example
     * // Delete one Avistamiento
     * const Avistamiento = await prisma.avistamiento.delete({
     *   where: {
     *     // ... filter to delete one Avistamiento
     *   }
     * })
     * 
     */
    delete<T extends AvistamientoDeleteArgs>(args: SelectSubset<T, AvistamientoDeleteArgs<ExtArgs>>): Prisma__AvistamientoClient<$Result.GetResult<Prisma.$AvistamientoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Avistamiento.
     * @param {AvistamientoUpdateArgs} args - Arguments to update one Avistamiento.
     * @example
     * // Update one Avistamiento
     * const avistamiento = await prisma.avistamiento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvistamientoUpdateArgs>(args: SelectSubset<T, AvistamientoUpdateArgs<ExtArgs>>): Prisma__AvistamientoClient<$Result.GetResult<Prisma.$AvistamientoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Avistamientos.
     * @param {AvistamientoDeleteManyArgs} args - Arguments to filter Avistamientos to delete.
     * @example
     * // Delete a few Avistamientos
     * const { count } = await prisma.avistamiento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvistamientoDeleteManyArgs>(args?: SelectSubset<T, AvistamientoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avistamientos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvistamientoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Avistamientos
     * const avistamiento = await prisma.avistamiento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvistamientoUpdateManyArgs>(args: SelectSubset<T, AvistamientoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avistamientos and returns the data updated in the database.
     * @param {AvistamientoUpdateManyAndReturnArgs} args - Arguments to update many Avistamientos.
     * @example
     * // Update many Avistamientos
     * const avistamiento = await prisma.avistamiento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Avistamientos and only return the `id`
     * const avistamientoWithIdOnly = await prisma.avistamiento.updateManyAndReturn({
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
    updateManyAndReturn<T extends AvistamientoUpdateManyAndReturnArgs>(args: SelectSubset<T, AvistamientoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvistamientoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Avistamiento.
     * @param {AvistamientoUpsertArgs} args - Arguments to update or create a Avistamiento.
     * @example
     * // Update or create a Avistamiento
     * const avistamiento = await prisma.avistamiento.upsert({
     *   create: {
     *     // ... data to create a Avistamiento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Avistamiento we want to update
     *   }
     * })
     */
    upsert<T extends AvistamientoUpsertArgs>(args: SelectSubset<T, AvistamientoUpsertArgs<ExtArgs>>): Prisma__AvistamientoClient<$Result.GetResult<Prisma.$AvistamientoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Avistamientos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvistamientoCountArgs} args - Arguments to filter Avistamientos to count.
     * @example
     * // Count the number of Avistamientos
     * const count = await prisma.avistamiento.count({
     *   where: {
     *     // ... the filter for the Avistamientos we want to count
     *   }
     * })
    **/
    count<T extends AvistamientoCountArgs>(
      args?: Subset<T, AvistamientoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvistamientoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Avistamiento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvistamientoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvistamientoAggregateArgs>(args: Subset<T, AvistamientoAggregateArgs>): Prisma.PrismaPromise<GetAvistamientoAggregateType<T>>

    /**
     * Group by Avistamiento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvistamientoGroupByArgs} args - Group by arguments.
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
      T extends AvistamientoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvistamientoGroupByArgs['orderBy'] }
        : { orderBy?: AvistamientoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AvistamientoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvistamientoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Avistamiento model
   */
  readonly fields: AvistamientoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Avistamiento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvistamientoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reporte<T extends ReporteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReporteDefaultArgs<ExtArgs>>): Prisma__ReporteClient<$Result.GetResult<Prisma.$ReportePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    colaborador<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Avistamiento model
   */
  interface AvistamientoFieldRefs {
    readonly id: FieldRef<"Avistamiento", 'Int'>
    readonly reporteId: FieldRef<"Avistamiento", 'Int'>
    readonly colaboradorId: FieldRef<"Avistamiento", 'Int'>
    readonly fechaAvistamiento: FieldRef<"Avistamiento", 'DateTime'>
    readonly latitud: FieldRef<"Avistamiento", 'Float'>
    readonly longitud: FieldRef<"Avistamiento", 'Float'>
    readonly direccionTexto: FieldRef<"Avistamiento", 'String'>
    readonly observaciones: FieldRef<"Avistamiento", 'String'>
    readonly fotoUrl: FieldRef<"Avistamiento", 'String'>
    readonly createdAt: FieldRef<"Avistamiento", 'DateTime'>
    readonly updatedAt: FieldRef<"Avistamiento", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Avistamiento findUnique
   */
  export type AvistamientoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avistamiento
     */
    select?: AvistamientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avistamiento
     */
    omit?: AvistamientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvistamientoInclude<ExtArgs> | null
    /**
     * Filter, which Avistamiento to fetch.
     */
    where: AvistamientoWhereUniqueInput
  }

  /**
   * Avistamiento findUniqueOrThrow
   */
  export type AvistamientoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avistamiento
     */
    select?: AvistamientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avistamiento
     */
    omit?: AvistamientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvistamientoInclude<ExtArgs> | null
    /**
     * Filter, which Avistamiento to fetch.
     */
    where: AvistamientoWhereUniqueInput
  }

  /**
   * Avistamiento findFirst
   */
  export type AvistamientoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avistamiento
     */
    select?: AvistamientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avistamiento
     */
    omit?: AvistamientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvistamientoInclude<ExtArgs> | null
    /**
     * Filter, which Avistamiento to fetch.
     */
    where?: AvistamientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avistamientos to fetch.
     */
    orderBy?: AvistamientoOrderByWithRelationInput | AvistamientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avistamientos.
     */
    cursor?: AvistamientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avistamientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avistamientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avistamientos.
     */
    distinct?: AvistamientoScalarFieldEnum | AvistamientoScalarFieldEnum[]
  }

  /**
   * Avistamiento findFirstOrThrow
   */
  export type AvistamientoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avistamiento
     */
    select?: AvistamientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avistamiento
     */
    omit?: AvistamientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvistamientoInclude<ExtArgs> | null
    /**
     * Filter, which Avistamiento to fetch.
     */
    where?: AvistamientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avistamientos to fetch.
     */
    orderBy?: AvistamientoOrderByWithRelationInput | AvistamientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avistamientos.
     */
    cursor?: AvistamientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avistamientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avistamientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avistamientos.
     */
    distinct?: AvistamientoScalarFieldEnum | AvistamientoScalarFieldEnum[]
  }

  /**
   * Avistamiento findMany
   */
  export type AvistamientoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avistamiento
     */
    select?: AvistamientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avistamiento
     */
    omit?: AvistamientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvistamientoInclude<ExtArgs> | null
    /**
     * Filter, which Avistamientos to fetch.
     */
    where?: AvistamientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avistamientos to fetch.
     */
    orderBy?: AvistamientoOrderByWithRelationInput | AvistamientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Avistamientos.
     */
    cursor?: AvistamientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avistamientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avistamientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avistamientos.
     */
    distinct?: AvistamientoScalarFieldEnum | AvistamientoScalarFieldEnum[]
  }

  /**
   * Avistamiento create
   */
  export type AvistamientoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avistamiento
     */
    select?: AvistamientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avistamiento
     */
    omit?: AvistamientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvistamientoInclude<ExtArgs> | null
    /**
     * The data needed to create a Avistamiento.
     */
    data: XOR<AvistamientoCreateInput, AvistamientoUncheckedCreateInput>
  }

  /**
   * Avistamiento createMany
   */
  export type AvistamientoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Avistamientos.
     */
    data: AvistamientoCreateManyInput | AvistamientoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Avistamiento createManyAndReturn
   */
  export type AvistamientoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avistamiento
     */
    select?: AvistamientoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Avistamiento
     */
    omit?: AvistamientoOmit<ExtArgs> | null
    /**
     * The data used to create many Avistamientos.
     */
    data: AvistamientoCreateManyInput | AvistamientoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvistamientoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Avistamiento update
   */
  export type AvistamientoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avistamiento
     */
    select?: AvistamientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avistamiento
     */
    omit?: AvistamientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvistamientoInclude<ExtArgs> | null
    /**
     * The data needed to update a Avistamiento.
     */
    data: XOR<AvistamientoUpdateInput, AvistamientoUncheckedUpdateInput>
    /**
     * Choose, which Avistamiento to update.
     */
    where: AvistamientoWhereUniqueInput
  }

  /**
   * Avistamiento updateMany
   */
  export type AvistamientoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Avistamientos.
     */
    data: XOR<AvistamientoUpdateManyMutationInput, AvistamientoUncheckedUpdateManyInput>
    /**
     * Filter which Avistamientos to update
     */
    where?: AvistamientoWhereInput
    /**
     * Limit how many Avistamientos to update.
     */
    limit?: number
  }

  /**
   * Avistamiento updateManyAndReturn
   */
  export type AvistamientoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avistamiento
     */
    select?: AvistamientoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Avistamiento
     */
    omit?: AvistamientoOmit<ExtArgs> | null
    /**
     * The data used to update Avistamientos.
     */
    data: XOR<AvistamientoUpdateManyMutationInput, AvistamientoUncheckedUpdateManyInput>
    /**
     * Filter which Avistamientos to update
     */
    where?: AvistamientoWhereInput
    /**
     * Limit how many Avistamientos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvistamientoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Avistamiento upsert
   */
  export type AvistamientoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avistamiento
     */
    select?: AvistamientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avistamiento
     */
    omit?: AvistamientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvistamientoInclude<ExtArgs> | null
    /**
     * The filter to search for the Avistamiento to update in case it exists.
     */
    where: AvistamientoWhereUniqueInput
    /**
     * In case the Avistamiento found by the `where` argument doesn't exist, create a new Avistamiento with this data.
     */
    create: XOR<AvistamientoCreateInput, AvistamientoUncheckedCreateInput>
    /**
     * In case the Avistamiento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvistamientoUpdateInput, AvistamientoUncheckedUpdateInput>
  }

  /**
   * Avistamiento delete
   */
  export type AvistamientoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avistamiento
     */
    select?: AvistamientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avistamiento
     */
    omit?: AvistamientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvistamientoInclude<ExtArgs> | null
    /**
     * Filter which Avistamiento to delete.
     */
    where: AvistamientoWhereUniqueInput
  }

  /**
   * Avistamiento deleteMany
   */
  export type AvistamientoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avistamientos to delete
     */
    where?: AvistamientoWhereInput
    /**
     * Limit how many Avistamientos to delete.
     */
    limit?: number
  }

  /**
   * Avistamiento without action
   */
  export type AvistamientoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avistamiento
     */
    select?: AvistamientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avistamiento
     */
    omit?: AvistamientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvistamientoInclude<ExtArgs> | null
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


  export const ZonaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    ciudad: 'ciudad',
    departamento: 'departamento',
    descripcion: 'descripcion',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ZonaScalarFieldEnum = (typeof ZonaScalarFieldEnum)[keyof typeof ZonaScalarFieldEnum]


  export const EspecieScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EspecieScalarFieldEnum = (typeof EspecieScalarFieldEnum)[keyof typeof EspecieScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nombres: 'nombres',
    apellidos: 'apellidos',
    correo: 'correo',
    telefono: 'telefono',
    contrasena: 'contrasena',
    rol: 'rol',
    zonaId: 'zonaId',
    activo: 'activo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const MascotaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    especieId: 'especieId',
    raza: 'raza',
    color: 'color',
    edad: 'edad',
    sexo: 'sexo',
    descripcion: 'descripcion',
    fotoUrl: 'fotoUrl',
    duenioId: 'duenioId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MascotaScalarFieldEnum = (typeof MascotaScalarFieldEnum)[keyof typeof MascotaScalarFieldEnum]


  export const ReporteScalarFieldEnum: {
    id: 'id',
    mascotaId: 'mascotaId',
    zonaId: 'zonaId',
    descripcion: 'descripcion',
    fechaExtravio: 'fechaExtravio',
    latitud: 'latitud',
    longitud: 'longitud',
    direccionTexto: 'direccionTexto',
    estado: 'estado',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReporteScalarFieldEnum = (typeof ReporteScalarFieldEnum)[keyof typeof ReporteScalarFieldEnum]


  export const PerdidaScalarFieldEnum: {
    id: 'id',
    reporteId: 'reporteId',
    fotoUrl: 'fotoUrl',
    circunstancias: 'circunstancias',
    recompensa: 'recompensa',
    contactoUrgente: 'contactoUrgente',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PerdidaScalarFieldEnum = (typeof PerdidaScalarFieldEnum)[keyof typeof PerdidaScalarFieldEnum]


  export const AvistamientoScalarFieldEnum: {
    id: 'id',
    reporteId: 'reporteId',
    colaboradorId: 'colaboradorId',
    fechaAvistamiento: 'fechaAvistamiento',
    latitud: 'latitud',
    longitud: 'longitud',
    direccionTexto: 'direccionTexto',
    observaciones: 'observaciones',
    fotoUrl: 'fotoUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AvistamientoScalarFieldEnum = (typeof AvistamientoScalarFieldEnum)[keyof typeof AvistamientoScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'RolUsuario'
   */
  export type EnumRolUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RolUsuario'>
    


  /**
   * Reference to a field of type 'RolUsuario[]'
   */
  export type ListEnumRolUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RolUsuario[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'SexoMascota'
   */
  export type EnumSexoMascotaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SexoMascota'>
    


  /**
   * Reference to a field of type 'SexoMascota[]'
   */
  export type ListEnumSexoMascotaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SexoMascota[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'EstadoReporte'
   */
  export type EnumEstadoReporteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoReporte'>
    


  /**
   * Reference to a field of type 'EstadoReporte[]'
   */
  export type ListEnumEstadoReporteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoReporte[]'>
    
  /**
   * Deep Input Types
   */


  export type ZonaWhereInput = {
    AND?: ZonaWhereInput | ZonaWhereInput[]
    OR?: ZonaWhereInput[]
    NOT?: ZonaWhereInput | ZonaWhereInput[]
    id?: IntFilter<"Zona"> | number
    nombre?: StringFilter<"Zona"> | string
    ciudad?: StringFilter<"Zona"> | string
    departamento?: StringFilter<"Zona"> | string
    descripcion?: StringNullableFilter<"Zona"> | string | null
    createdAt?: DateTimeFilter<"Zona"> | Date | string
    updatedAt?: DateTimeFilter<"Zona"> | Date | string
    usuarios?: UsuarioListRelationFilter
    reportes?: ReporteListRelationFilter
  }

  export type ZonaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    ciudad?: SortOrder
    departamento?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuarios?: UsuarioOrderByRelationAggregateInput
    reportes?: ReporteOrderByRelationAggregateInput
  }

  export type ZonaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: ZonaWhereInput | ZonaWhereInput[]
    OR?: ZonaWhereInput[]
    NOT?: ZonaWhereInput | ZonaWhereInput[]
    ciudad?: StringFilter<"Zona"> | string
    departamento?: StringFilter<"Zona"> | string
    descripcion?: StringNullableFilter<"Zona"> | string | null
    createdAt?: DateTimeFilter<"Zona"> | Date | string
    updatedAt?: DateTimeFilter<"Zona"> | Date | string
    usuarios?: UsuarioListRelationFilter
    reportes?: ReporteListRelationFilter
  }, "id" | "nombre">

  export type ZonaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    ciudad?: SortOrder
    departamento?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ZonaCountOrderByAggregateInput
    _avg?: ZonaAvgOrderByAggregateInput
    _max?: ZonaMaxOrderByAggregateInput
    _min?: ZonaMinOrderByAggregateInput
    _sum?: ZonaSumOrderByAggregateInput
  }

  export type ZonaScalarWhereWithAggregatesInput = {
    AND?: ZonaScalarWhereWithAggregatesInput | ZonaScalarWhereWithAggregatesInput[]
    OR?: ZonaScalarWhereWithAggregatesInput[]
    NOT?: ZonaScalarWhereWithAggregatesInput | ZonaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Zona"> | number
    nombre?: StringWithAggregatesFilter<"Zona"> | string
    ciudad?: StringWithAggregatesFilter<"Zona"> | string
    departamento?: StringWithAggregatesFilter<"Zona"> | string
    descripcion?: StringNullableWithAggregatesFilter<"Zona"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Zona"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Zona"> | Date | string
  }

  export type EspecieWhereInput = {
    AND?: EspecieWhereInput | EspecieWhereInput[]
    OR?: EspecieWhereInput[]
    NOT?: EspecieWhereInput | EspecieWhereInput[]
    id?: IntFilter<"Especie"> | number
    nombre?: StringFilter<"Especie"> | string
    descripcion?: StringNullableFilter<"Especie"> | string | null
    createdAt?: DateTimeFilter<"Especie"> | Date | string
    updatedAt?: DateTimeFilter<"Especie"> | Date | string
    mascotas?: MascotaListRelationFilter
  }

  export type EspecieOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mascotas?: MascotaOrderByRelationAggregateInput
  }

  export type EspecieWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: EspecieWhereInput | EspecieWhereInput[]
    OR?: EspecieWhereInput[]
    NOT?: EspecieWhereInput | EspecieWhereInput[]
    descripcion?: StringNullableFilter<"Especie"> | string | null
    createdAt?: DateTimeFilter<"Especie"> | Date | string
    updatedAt?: DateTimeFilter<"Especie"> | Date | string
    mascotas?: MascotaListRelationFilter
  }, "id" | "nombre">

  export type EspecieOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EspecieCountOrderByAggregateInput
    _avg?: EspecieAvgOrderByAggregateInput
    _max?: EspecieMaxOrderByAggregateInput
    _min?: EspecieMinOrderByAggregateInput
    _sum?: EspecieSumOrderByAggregateInput
  }

  export type EspecieScalarWhereWithAggregatesInput = {
    AND?: EspecieScalarWhereWithAggregatesInput | EspecieScalarWhereWithAggregatesInput[]
    OR?: EspecieScalarWhereWithAggregatesInput[]
    NOT?: EspecieScalarWhereWithAggregatesInput | EspecieScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Especie"> | number
    nombre?: StringWithAggregatesFilter<"Especie"> | string
    descripcion?: StringNullableWithAggregatesFilter<"Especie"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Especie"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Especie"> | Date | string
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nombres?: StringFilter<"Usuario"> | string
    apellidos?: StringFilter<"Usuario"> | string
    correo?: StringFilter<"Usuario"> | string
    telefono?: StringFilter<"Usuario"> | string
    contrasena?: StringFilter<"Usuario"> | string
    rol?: EnumRolUsuarioFilter<"Usuario"> | $Enums.RolUsuario
    zonaId?: IntFilter<"Usuario"> | number
    activo?: BoolFilter<"Usuario"> | boolean
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    zona?: XOR<ZonaScalarRelationFilter, ZonaWhereInput>
    mascotas?: MascotaListRelationFilter
    avistamientos?: AvistamientoListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
    contrasena?: SortOrder
    rol?: SortOrder
    zonaId?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    zona?: ZonaOrderByWithRelationInput
    mascotas?: MascotaOrderByRelationAggregateInput
    avistamientos?: AvistamientoOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    correo?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nombres?: StringFilter<"Usuario"> | string
    apellidos?: StringFilter<"Usuario"> | string
    telefono?: StringFilter<"Usuario"> | string
    contrasena?: StringFilter<"Usuario"> | string
    rol?: EnumRolUsuarioFilter<"Usuario"> | $Enums.RolUsuario
    zonaId?: IntFilter<"Usuario"> | number
    activo?: BoolFilter<"Usuario"> | boolean
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    zona?: XOR<ZonaScalarRelationFilter, ZonaWhereInput>
    mascotas?: MascotaListRelationFilter
    avistamientos?: AvistamientoListRelationFilter
  }, "id" | "correo">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
    contrasena?: SortOrder
    rol?: SortOrder
    zonaId?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nombres?: StringWithAggregatesFilter<"Usuario"> | string
    apellidos?: StringWithAggregatesFilter<"Usuario"> | string
    correo?: StringWithAggregatesFilter<"Usuario"> | string
    telefono?: StringWithAggregatesFilter<"Usuario"> | string
    contrasena?: StringWithAggregatesFilter<"Usuario"> | string
    rol?: EnumRolUsuarioWithAggregatesFilter<"Usuario"> | $Enums.RolUsuario
    zonaId?: IntWithAggregatesFilter<"Usuario"> | number
    activo?: BoolWithAggregatesFilter<"Usuario"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type MascotaWhereInput = {
    AND?: MascotaWhereInput | MascotaWhereInput[]
    OR?: MascotaWhereInput[]
    NOT?: MascotaWhereInput | MascotaWhereInput[]
    id?: IntFilter<"Mascota"> | number
    nombre?: StringFilter<"Mascota"> | string
    especieId?: IntFilter<"Mascota"> | number
    raza?: StringNullableFilter<"Mascota"> | string | null
    color?: StringFilter<"Mascota"> | string
    edad?: IntNullableFilter<"Mascota"> | number | null
    sexo?: EnumSexoMascotaFilter<"Mascota"> | $Enums.SexoMascota
    descripcion?: StringNullableFilter<"Mascota"> | string | null
    fotoUrl?: StringNullableFilter<"Mascota"> | string | null
    duenioId?: IntFilter<"Mascota"> | number
    createdAt?: DateTimeFilter<"Mascota"> | Date | string
    updatedAt?: DateTimeFilter<"Mascota"> | Date | string
    especie?: XOR<EspecieScalarRelationFilter, EspecieWhereInput>
    duenio?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    reportes?: ReporteListRelationFilter
  }

  export type MascotaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    especieId?: SortOrder
    raza?: SortOrderInput | SortOrder
    color?: SortOrder
    edad?: SortOrderInput | SortOrder
    sexo?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    fotoUrl?: SortOrderInput | SortOrder
    duenioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    especie?: EspecieOrderByWithRelationInput
    duenio?: UsuarioOrderByWithRelationInput
    reportes?: ReporteOrderByRelationAggregateInput
  }

  export type MascotaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MascotaWhereInput | MascotaWhereInput[]
    OR?: MascotaWhereInput[]
    NOT?: MascotaWhereInput | MascotaWhereInput[]
    nombre?: StringFilter<"Mascota"> | string
    especieId?: IntFilter<"Mascota"> | number
    raza?: StringNullableFilter<"Mascota"> | string | null
    color?: StringFilter<"Mascota"> | string
    edad?: IntNullableFilter<"Mascota"> | number | null
    sexo?: EnumSexoMascotaFilter<"Mascota"> | $Enums.SexoMascota
    descripcion?: StringNullableFilter<"Mascota"> | string | null
    fotoUrl?: StringNullableFilter<"Mascota"> | string | null
    duenioId?: IntFilter<"Mascota"> | number
    createdAt?: DateTimeFilter<"Mascota"> | Date | string
    updatedAt?: DateTimeFilter<"Mascota"> | Date | string
    especie?: XOR<EspecieScalarRelationFilter, EspecieWhereInput>
    duenio?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    reportes?: ReporteListRelationFilter
  }, "id">

  export type MascotaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    especieId?: SortOrder
    raza?: SortOrderInput | SortOrder
    color?: SortOrder
    edad?: SortOrderInput | SortOrder
    sexo?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    fotoUrl?: SortOrderInput | SortOrder
    duenioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MascotaCountOrderByAggregateInput
    _avg?: MascotaAvgOrderByAggregateInput
    _max?: MascotaMaxOrderByAggregateInput
    _min?: MascotaMinOrderByAggregateInput
    _sum?: MascotaSumOrderByAggregateInput
  }

  export type MascotaScalarWhereWithAggregatesInput = {
    AND?: MascotaScalarWhereWithAggregatesInput | MascotaScalarWhereWithAggregatesInput[]
    OR?: MascotaScalarWhereWithAggregatesInput[]
    NOT?: MascotaScalarWhereWithAggregatesInput | MascotaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Mascota"> | number
    nombre?: StringWithAggregatesFilter<"Mascota"> | string
    especieId?: IntWithAggregatesFilter<"Mascota"> | number
    raza?: StringNullableWithAggregatesFilter<"Mascota"> | string | null
    color?: StringWithAggregatesFilter<"Mascota"> | string
    edad?: IntNullableWithAggregatesFilter<"Mascota"> | number | null
    sexo?: EnumSexoMascotaWithAggregatesFilter<"Mascota"> | $Enums.SexoMascota
    descripcion?: StringNullableWithAggregatesFilter<"Mascota"> | string | null
    fotoUrl?: StringNullableWithAggregatesFilter<"Mascota"> | string | null
    duenioId?: IntWithAggregatesFilter<"Mascota"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Mascota"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Mascota"> | Date | string
  }

  export type ReporteWhereInput = {
    AND?: ReporteWhereInput | ReporteWhereInput[]
    OR?: ReporteWhereInput[]
    NOT?: ReporteWhereInput | ReporteWhereInput[]
    id?: IntFilter<"Reporte"> | number
    mascotaId?: IntFilter<"Reporte"> | number
    zonaId?: IntFilter<"Reporte"> | number
    descripcion?: StringFilter<"Reporte"> | string
    fechaExtravio?: DateTimeFilter<"Reporte"> | Date | string
    latitud?: FloatNullableFilter<"Reporte"> | number | null
    longitud?: FloatNullableFilter<"Reporte"> | number | null
    direccionTexto?: StringNullableFilter<"Reporte"> | string | null
    estado?: EnumEstadoReporteFilter<"Reporte"> | $Enums.EstadoReporte
    createdAt?: DateTimeFilter<"Reporte"> | Date | string
    updatedAt?: DateTimeFilter<"Reporte"> | Date | string
    mascota?: XOR<MascotaScalarRelationFilter, MascotaWhereInput>
    zona?: XOR<ZonaScalarRelationFilter, ZonaWhereInput>
    perdida?: XOR<PerdidaNullableScalarRelationFilter, PerdidaWhereInput> | null
    avistamientos?: AvistamientoListRelationFilter
  }

  export type ReporteOrderByWithRelationInput = {
    id?: SortOrder
    mascotaId?: SortOrder
    zonaId?: SortOrder
    descripcion?: SortOrder
    fechaExtravio?: SortOrder
    latitud?: SortOrderInput | SortOrder
    longitud?: SortOrderInput | SortOrder
    direccionTexto?: SortOrderInput | SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mascota?: MascotaOrderByWithRelationInput
    zona?: ZonaOrderByWithRelationInput
    perdida?: PerdidaOrderByWithRelationInput
    avistamientos?: AvistamientoOrderByRelationAggregateInput
  }

  export type ReporteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReporteWhereInput | ReporteWhereInput[]
    OR?: ReporteWhereInput[]
    NOT?: ReporteWhereInput | ReporteWhereInput[]
    mascotaId?: IntFilter<"Reporte"> | number
    zonaId?: IntFilter<"Reporte"> | number
    descripcion?: StringFilter<"Reporte"> | string
    fechaExtravio?: DateTimeFilter<"Reporte"> | Date | string
    latitud?: FloatNullableFilter<"Reporte"> | number | null
    longitud?: FloatNullableFilter<"Reporte"> | number | null
    direccionTexto?: StringNullableFilter<"Reporte"> | string | null
    estado?: EnumEstadoReporteFilter<"Reporte"> | $Enums.EstadoReporte
    createdAt?: DateTimeFilter<"Reporte"> | Date | string
    updatedAt?: DateTimeFilter<"Reporte"> | Date | string
    mascota?: XOR<MascotaScalarRelationFilter, MascotaWhereInput>
    zona?: XOR<ZonaScalarRelationFilter, ZonaWhereInput>
    perdida?: XOR<PerdidaNullableScalarRelationFilter, PerdidaWhereInput> | null
    avistamientos?: AvistamientoListRelationFilter
  }, "id">

  export type ReporteOrderByWithAggregationInput = {
    id?: SortOrder
    mascotaId?: SortOrder
    zonaId?: SortOrder
    descripcion?: SortOrder
    fechaExtravio?: SortOrder
    latitud?: SortOrderInput | SortOrder
    longitud?: SortOrderInput | SortOrder
    direccionTexto?: SortOrderInput | SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReporteCountOrderByAggregateInput
    _avg?: ReporteAvgOrderByAggregateInput
    _max?: ReporteMaxOrderByAggregateInput
    _min?: ReporteMinOrderByAggregateInput
    _sum?: ReporteSumOrderByAggregateInput
  }

  export type ReporteScalarWhereWithAggregatesInput = {
    AND?: ReporteScalarWhereWithAggregatesInput | ReporteScalarWhereWithAggregatesInput[]
    OR?: ReporteScalarWhereWithAggregatesInput[]
    NOT?: ReporteScalarWhereWithAggregatesInput | ReporteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Reporte"> | number
    mascotaId?: IntWithAggregatesFilter<"Reporte"> | number
    zonaId?: IntWithAggregatesFilter<"Reporte"> | number
    descripcion?: StringWithAggregatesFilter<"Reporte"> | string
    fechaExtravio?: DateTimeWithAggregatesFilter<"Reporte"> | Date | string
    latitud?: FloatNullableWithAggregatesFilter<"Reporte"> | number | null
    longitud?: FloatNullableWithAggregatesFilter<"Reporte"> | number | null
    direccionTexto?: StringNullableWithAggregatesFilter<"Reporte"> | string | null
    estado?: EnumEstadoReporteWithAggregatesFilter<"Reporte"> | $Enums.EstadoReporte
    createdAt?: DateTimeWithAggregatesFilter<"Reporte"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Reporte"> | Date | string
  }

  export type PerdidaWhereInput = {
    AND?: PerdidaWhereInput | PerdidaWhereInput[]
    OR?: PerdidaWhereInput[]
    NOT?: PerdidaWhereInput | PerdidaWhereInput[]
    id?: IntFilter<"Perdida"> | number
    reporteId?: IntFilter<"Perdida"> | number
    fotoUrl?: StringNullableFilter<"Perdida"> | string | null
    circunstancias?: StringNullableFilter<"Perdida"> | string | null
    recompensa?: FloatNullableFilter<"Perdida"> | number | null
    contactoUrgente?: StringNullableFilter<"Perdida"> | string | null
    createdAt?: DateTimeFilter<"Perdida"> | Date | string
    updatedAt?: DateTimeFilter<"Perdida"> | Date | string
    reporte?: XOR<ReporteScalarRelationFilter, ReporteWhereInput>
  }

  export type PerdidaOrderByWithRelationInput = {
    id?: SortOrder
    reporteId?: SortOrder
    fotoUrl?: SortOrderInput | SortOrder
    circunstancias?: SortOrderInput | SortOrder
    recompensa?: SortOrderInput | SortOrder
    contactoUrgente?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reporte?: ReporteOrderByWithRelationInput
  }

  export type PerdidaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    reporteId?: number
    AND?: PerdidaWhereInput | PerdidaWhereInput[]
    OR?: PerdidaWhereInput[]
    NOT?: PerdidaWhereInput | PerdidaWhereInput[]
    fotoUrl?: StringNullableFilter<"Perdida"> | string | null
    circunstancias?: StringNullableFilter<"Perdida"> | string | null
    recompensa?: FloatNullableFilter<"Perdida"> | number | null
    contactoUrgente?: StringNullableFilter<"Perdida"> | string | null
    createdAt?: DateTimeFilter<"Perdida"> | Date | string
    updatedAt?: DateTimeFilter<"Perdida"> | Date | string
    reporte?: XOR<ReporteScalarRelationFilter, ReporteWhereInput>
  }, "id" | "reporteId">

  export type PerdidaOrderByWithAggregationInput = {
    id?: SortOrder
    reporteId?: SortOrder
    fotoUrl?: SortOrderInput | SortOrder
    circunstancias?: SortOrderInput | SortOrder
    recompensa?: SortOrderInput | SortOrder
    contactoUrgente?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PerdidaCountOrderByAggregateInput
    _avg?: PerdidaAvgOrderByAggregateInput
    _max?: PerdidaMaxOrderByAggregateInput
    _min?: PerdidaMinOrderByAggregateInput
    _sum?: PerdidaSumOrderByAggregateInput
  }

  export type PerdidaScalarWhereWithAggregatesInput = {
    AND?: PerdidaScalarWhereWithAggregatesInput | PerdidaScalarWhereWithAggregatesInput[]
    OR?: PerdidaScalarWhereWithAggregatesInput[]
    NOT?: PerdidaScalarWhereWithAggregatesInput | PerdidaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Perdida"> | number
    reporteId?: IntWithAggregatesFilter<"Perdida"> | number
    fotoUrl?: StringNullableWithAggregatesFilter<"Perdida"> | string | null
    circunstancias?: StringNullableWithAggregatesFilter<"Perdida"> | string | null
    recompensa?: FloatNullableWithAggregatesFilter<"Perdida"> | number | null
    contactoUrgente?: StringNullableWithAggregatesFilter<"Perdida"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Perdida"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Perdida"> | Date | string
  }

  export type AvistamientoWhereInput = {
    AND?: AvistamientoWhereInput | AvistamientoWhereInput[]
    OR?: AvistamientoWhereInput[]
    NOT?: AvistamientoWhereInput | AvistamientoWhereInput[]
    id?: IntFilter<"Avistamiento"> | number
    reporteId?: IntFilter<"Avistamiento"> | number
    colaboradorId?: IntFilter<"Avistamiento"> | number
    fechaAvistamiento?: DateTimeFilter<"Avistamiento"> | Date | string
    latitud?: FloatNullableFilter<"Avistamiento"> | number | null
    longitud?: FloatNullableFilter<"Avistamiento"> | number | null
    direccionTexto?: StringNullableFilter<"Avistamiento"> | string | null
    observaciones?: StringFilter<"Avistamiento"> | string
    fotoUrl?: StringNullableFilter<"Avistamiento"> | string | null
    createdAt?: DateTimeFilter<"Avistamiento"> | Date | string
    updatedAt?: DateTimeFilter<"Avistamiento"> | Date | string
    reporte?: XOR<ReporteScalarRelationFilter, ReporteWhereInput>
    colaborador?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type AvistamientoOrderByWithRelationInput = {
    id?: SortOrder
    reporteId?: SortOrder
    colaboradorId?: SortOrder
    fechaAvistamiento?: SortOrder
    latitud?: SortOrderInput | SortOrder
    longitud?: SortOrderInput | SortOrder
    direccionTexto?: SortOrderInput | SortOrder
    observaciones?: SortOrder
    fotoUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reporte?: ReporteOrderByWithRelationInput
    colaborador?: UsuarioOrderByWithRelationInput
  }

  export type AvistamientoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AvistamientoWhereInput | AvistamientoWhereInput[]
    OR?: AvistamientoWhereInput[]
    NOT?: AvistamientoWhereInput | AvistamientoWhereInput[]
    reporteId?: IntFilter<"Avistamiento"> | number
    colaboradorId?: IntFilter<"Avistamiento"> | number
    fechaAvistamiento?: DateTimeFilter<"Avistamiento"> | Date | string
    latitud?: FloatNullableFilter<"Avistamiento"> | number | null
    longitud?: FloatNullableFilter<"Avistamiento"> | number | null
    direccionTexto?: StringNullableFilter<"Avistamiento"> | string | null
    observaciones?: StringFilter<"Avistamiento"> | string
    fotoUrl?: StringNullableFilter<"Avistamiento"> | string | null
    createdAt?: DateTimeFilter<"Avistamiento"> | Date | string
    updatedAt?: DateTimeFilter<"Avistamiento"> | Date | string
    reporte?: XOR<ReporteScalarRelationFilter, ReporteWhereInput>
    colaborador?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type AvistamientoOrderByWithAggregationInput = {
    id?: SortOrder
    reporteId?: SortOrder
    colaboradorId?: SortOrder
    fechaAvistamiento?: SortOrder
    latitud?: SortOrderInput | SortOrder
    longitud?: SortOrderInput | SortOrder
    direccionTexto?: SortOrderInput | SortOrder
    observaciones?: SortOrder
    fotoUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AvistamientoCountOrderByAggregateInput
    _avg?: AvistamientoAvgOrderByAggregateInput
    _max?: AvistamientoMaxOrderByAggregateInput
    _min?: AvistamientoMinOrderByAggregateInput
    _sum?: AvistamientoSumOrderByAggregateInput
  }

  export type AvistamientoScalarWhereWithAggregatesInput = {
    AND?: AvistamientoScalarWhereWithAggregatesInput | AvistamientoScalarWhereWithAggregatesInput[]
    OR?: AvistamientoScalarWhereWithAggregatesInput[]
    NOT?: AvistamientoScalarWhereWithAggregatesInput | AvistamientoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Avistamiento"> | number
    reporteId?: IntWithAggregatesFilter<"Avistamiento"> | number
    colaboradorId?: IntWithAggregatesFilter<"Avistamiento"> | number
    fechaAvistamiento?: DateTimeWithAggregatesFilter<"Avistamiento"> | Date | string
    latitud?: FloatNullableWithAggregatesFilter<"Avistamiento"> | number | null
    longitud?: FloatNullableWithAggregatesFilter<"Avistamiento"> | number | null
    direccionTexto?: StringNullableWithAggregatesFilter<"Avistamiento"> | string | null
    observaciones?: StringWithAggregatesFilter<"Avistamiento"> | string
    fotoUrl?: StringNullableWithAggregatesFilter<"Avistamiento"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Avistamiento"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Avistamiento"> | Date | string
  }

  export type ZonaCreateInput = {
    nombre: string
    ciudad: string
    departamento: string
    descripcion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarios?: UsuarioCreateNestedManyWithoutZonaInput
    reportes?: ReporteCreateNestedManyWithoutZonaInput
  }

  export type ZonaUncheckedCreateInput = {
    id?: number
    nombre: string
    ciudad: string
    departamento: string
    descripcion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutZonaInput
    reportes?: ReporteUncheckedCreateNestedManyWithoutZonaInput
  }

  export type ZonaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    departamento?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UsuarioUpdateManyWithoutZonaNestedInput
    reportes?: ReporteUpdateManyWithoutZonaNestedInput
  }

  export type ZonaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    departamento?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UsuarioUncheckedUpdateManyWithoutZonaNestedInput
    reportes?: ReporteUncheckedUpdateManyWithoutZonaNestedInput
  }

  export type ZonaCreateManyInput = {
    id?: number
    nombre: string
    ciudad: string
    departamento: string
    descripcion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ZonaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    departamento?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ZonaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    departamento?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EspecieCreateInput = {
    nombre: string
    descripcion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mascotas?: MascotaCreateNestedManyWithoutEspecieInput
  }

  export type EspecieUncheckedCreateInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mascotas?: MascotaUncheckedCreateNestedManyWithoutEspecieInput
  }

  export type EspecieUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mascotas?: MascotaUpdateManyWithoutEspecieNestedInput
  }

  export type EspecieUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mascotas?: MascotaUncheckedUpdateManyWithoutEspecieNestedInput
  }

  export type EspecieCreateManyInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EspecieUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EspecieUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioCreateInput = {
    nombres: string
    apellidos: string
    correo: string
    telefono: string
    contrasena: string
    rol?: $Enums.RolUsuario
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    zona: ZonaCreateNestedOneWithoutUsuariosInput
    mascotas?: MascotaCreateNestedManyWithoutDuenioInput
    avistamientos?: AvistamientoCreateNestedManyWithoutColaboradorInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nombres: string
    apellidos: string
    correo: string
    telefono: string
    contrasena: string
    rol?: $Enums.RolUsuario
    zonaId: number
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    mascotas?: MascotaUncheckedCreateNestedManyWithoutDuenioInput
    avistamientos?: AvistamientoUncheckedCreateNestedManyWithoutColaboradorInput
  }

  export type UsuarioUpdateInput = {
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zona?: ZonaUpdateOneRequiredWithoutUsuariosNestedInput
    mascotas?: MascotaUpdateManyWithoutDuenioNestedInput
    avistamientos?: AvistamientoUpdateManyWithoutColaboradorNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario
    zonaId?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mascotas?: MascotaUncheckedUpdateManyWithoutDuenioNestedInput
    avistamientos?: AvistamientoUncheckedUpdateManyWithoutColaboradorNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nombres: string
    apellidos: string
    correo: string
    telefono: string
    contrasena: string
    rol?: $Enums.RolUsuario
    zonaId: number
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario
    zonaId?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MascotaCreateInput = {
    nombre: string
    raza?: string | null
    color: string
    edad?: number | null
    sexo: $Enums.SexoMascota
    descripcion?: string | null
    fotoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    especie: EspecieCreateNestedOneWithoutMascotasInput
    duenio: UsuarioCreateNestedOneWithoutMascotasInput
    reportes?: ReporteCreateNestedManyWithoutMascotaInput
  }

  export type MascotaUncheckedCreateInput = {
    id?: number
    nombre: string
    especieId: number
    raza?: string | null
    color: string
    edad?: number | null
    sexo: $Enums.SexoMascota
    descripcion?: string | null
    fotoUrl?: string | null
    duenioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reportes?: ReporteUncheckedCreateNestedManyWithoutMascotaInput
  }

  export type MascotaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    raza?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    edad?: NullableIntFieldUpdateOperationsInput | number | null
    sexo?: EnumSexoMascotaFieldUpdateOperationsInput | $Enums.SexoMascota
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    especie?: EspecieUpdateOneRequiredWithoutMascotasNestedInput
    duenio?: UsuarioUpdateOneRequiredWithoutMascotasNestedInput
    reportes?: ReporteUpdateManyWithoutMascotaNestedInput
  }

  export type MascotaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    especieId?: IntFieldUpdateOperationsInput | number
    raza?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    edad?: NullableIntFieldUpdateOperationsInput | number | null
    sexo?: EnumSexoMascotaFieldUpdateOperationsInput | $Enums.SexoMascota
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duenioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reportes?: ReporteUncheckedUpdateManyWithoutMascotaNestedInput
  }

  export type MascotaCreateManyInput = {
    id?: number
    nombre: string
    especieId: number
    raza?: string | null
    color: string
    edad?: number | null
    sexo: $Enums.SexoMascota
    descripcion?: string | null
    fotoUrl?: string | null
    duenioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MascotaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    raza?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    edad?: NullableIntFieldUpdateOperationsInput | number | null
    sexo?: EnumSexoMascotaFieldUpdateOperationsInput | $Enums.SexoMascota
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MascotaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    especieId?: IntFieldUpdateOperationsInput | number
    raza?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    edad?: NullableIntFieldUpdateOperationsInput | number | null
    sexo?: EnumSexoMascotaFieldUpdateOperationsInput | $Enums.SexoMascota
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duenioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReporteCreateInput = {
    descripcion: string
    fechaExtravio: Date | string
    latitud?: number | null
    longitud?: number | null
    direccionTexto?: string | null
    estado?: $Enums.EstadoReporte
    createdAt?: Date | string
    updatedAt?: Date | string
    mascota: MascotaCreateNestedOneWithoutReportesInput
    zona: ZonaCreateNestedOneWithoutReportesInput
    perdida?: PerdidaCreateNestedOneWithoutReporteInput
    avistamientos?: AvistamientoCreateNestedManyWithoutReporteInput
  }

  export type ReporteUncheckedCreateInput = {
    id?: number
    mascotaId: number
    zonaId: number
    descripcion: string
    fechaExtravio: Date | string
    latitud?: number | null
    longitud?: number | null
    direccionTexto?: string | null
    estado?: $Enums.EstadoReporte
    createdAt?: Date | string
    updatedAt?: Date | string
    perdida?: PerdidaUncheckedCreateNestedOneWithoutReporteInput
    avistamientos?: AvistamientoUncheckedCreateNestedManyWithoutReporteInput
  }

  export type ReporteUpdateInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
    fechaExtravio?: DateTimeFieldUpdateOperationsInput | Date | string
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    direccionTexto?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoReporteFieldUpdateOperationsInput | $Enums.EstadoReporte
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mascota?: MascotaUpdateOneRequiredWithoutReportesNestedInput
    zona?: ZonaUpdateOneRequiredWithoutReportesNestedInput
    perdida?: PerdidaUpdateOneWithoutReporteNestedInput
    avistamientos?: AvistamientoUpdateManyWithoutReporteNestedInput
  }

  export type ReporteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mascotaId?: IntFieldUpdateOperationsInput | number
    zonaId?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    fechaExtravio?: DateTimeFieldUpdateOperationsInput | Date | string
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    direccionTexto?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoReporteFieldUpdateOperationsInput | $Enums.EstadoReporte
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    perdida?: PerdidaUncheckedUpdateOneWithoutReporteNestedInput
    avistamientos?: AvistamientoUncheckedUpdateManyWithoutReporteNestedInput
  }

  export type ReporteCreateManyInput = {
    id?: number
    mascotaId: number
    zonaId: number
    descripcion: string
    fechaExtravio: Date | string
    latitud?: number | null
    longitud?: number | null
    direccionTexto?: string | null
    estado?: $Enums.EstadoReporte
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReporteUpdateManyMutationInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
    fechaExtravio?: DateTimeFieldUpdateOperationsInput | Date | string
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    direccionTexto?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoReporteFieldUpdateOperationsInput | $Enums.EstadoReporte
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReporteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mascotaId?: IntFieldUpdateOperationsInput | number
    zonaId?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    fechaExtravio?: DateTimeFieldUpdateOperationsInput | Date | string
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    direccionTexto?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoReporteFieldUpdateOperationsInput | $Enums.EstadoReporte
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerdidaCreateInput = {
    fotoUrl?: string | null
    circunstancias?: string | null
    recompensa?: number | null
    contactoUrgente?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reporte: ReporteCreateNestedOneWithoutPerdidaInput
  }

  export type PerdidaUncheckedCreateInput = {
    id?: number
    reporteId: number
    fotoUrl?: string | null
    circunstancias?: string | null
    recompensa?: number | null
    contactoUrgente?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PerdidaUpdateInput = {
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    circunstancias?: NullableStringFieldUpdateOperationsInput | string | null
    recompensa?: NullableFloatFieldUpdateOperationsInput | number | null
    contactoUrgente?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reporte?: ReporteUpdateOneRequiredWithoutPerdidaNestedInput
  }

  export type PerdidaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    reporteId?: IntFieldUpdateOperationsInput | number
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    circunstancias?: NullableStringFieldUpdateOperationsInput | string | null
    recompensa?: NullableFloatFieldUpdateOperationsInput | number | null
    contactoUrgente?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerdidaCreateManyInput = {
    id?: number
    reporteId: number
    fotoUrl?: string | null
    circunstancias?: string | null
    recompensa?: number | null
    contactoUrgente?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PerdidaUpdateManyMutationInput = {
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    circunstancias?: NullableStringFieldUpdateOperationsInput | string | null
    recompensa?: NullableFloatFieldUpdateOperationsInput | number | null
    contactoUrgente?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerdidaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    reporteId?: IntFieldUpdateOperationsInput | number
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    circunstancias?: NullableStringFieldUpdateOperationsInput | string | null
    recompensa?: NullableFloatFieldUpdateOperationsInput | number | null
    contactoUrgente?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvistamientoCreateInput = {
    fechaAvistamiento: Date | string
    latitud?: number | null
    longitud?: number | null
    direccionTexto?: string | null
    observaciones: string
    fotoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reporte: ReporteCreateNestedOneWithoutAvistamientosInput
    colaborador: UsuarioCreateNestedOneWithoutAvistamientosInput
  }

  export type AvistamientoUncheckedCreateInput = {
    id?: number
    reporteId: number
    colaboradorId: number
    fechaAvistamiento: Date | string
    latitud?: number | null
    longitud?: number | null
    direccionTexto?: string | null
    observaciones: string
    fotoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvistamientoUpdateInput = {
    fechaAvistamiento?: DateTimeFieldUpdateOperationsInput | Date | string
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    direccionTexto?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: StringFieldUpdateOperationsInput | string
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reporte?: ReporteUpdateOneRequiredWithoutAvistamientosNestedInput
    colaborador?: UsuarioUpdateOneRequiredWithoutAvistamientosNestedInput
  }

  export type AvistamientoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    reporteId?: IntFieldUpdateOperationsInput | number
    colaboradorId?: IntFieldUpdateOperationsInput | number
    fechaAvistamiento?: DateTimeFieldUpdateOperationsInput | Date | string
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    direccionTexto?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: StringFieldUpdateOperationsInput | string
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvistamientoCreateManyInput = {
    id?: number
    reporteId: number
    colaboradorId: number
    fechaAvistamiento: Date | string
    latitud?: number | null
    longitud?: number | null
    direccionTexto?: string | null
    observaciones: string
    fotoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvistamientoUpdateManyMutationInput = {
    fechaAvistamiento?: DateTimeFieldUpdateOperationsInput | Date | string
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    direccionTexto?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: StringFieldUpdateOperationsInput | string
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvistamientoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    reporteId?: IntFieldUpdateOperationsInput | number
    colaboradorId?: IntFieldUpdateOperationsInput | number
    fechaAvistamiento?: DateTimeFieldUpdateOperationsInput | Date | string
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    direccionTexto?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: StringFieldUpdateOperationsInput | string
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type UsuarioListRelationFilter = {
    every?: UsuarioWhereInput
    some?: UsuarioWhereInput
    none?: UsuarioWhereInput
  }

  export type ReporteListRelationFilter = {
    every?: ReporteWhereInput
    some?: ReporteWhereInput
    none?: ReporteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReporteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ZonaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    ciudad?: SortOrder
    departamento?: SortOrder
    descripcion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ZonaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ZonaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    ciudad?: SortOrder
    departamento?: SortOrder
    descripcion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ZonaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    ciudad?: SortOrder
    departamento?: SortOrder
    descripcion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ZonaSumOrderByAggregateInput = {
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

  export type MascotaListRelationFilter = {
    every?: MascotaWhereInput
    some?: MascotaWhereInput
    none?: MascotaWhereInput
  }

  export type MascotaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EspecieCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EspecieAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EspecieMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EspecieMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EspecieSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumRolUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.RolUsuario | EnumRolUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.RolUsuario[] | ListEnumRolUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.RolUsuario[] | ListEnumRolUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumRolUsuarioFilter<$PrismaModel> | $Enums.RolUsuario
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ZonaScalarRelationFilter = {
    is?: ZonaWhereInput
    isNot?: ZonaWhereInput
  }

  export type AvistamientoListRelationFilter = {
    every?: AvistamientoWhereInput
    some?: AvistamientoWhereInput
    none?: AvistamientoWhereInput
  }

  export type AvistamientoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
    contrasena?: SortOrder
    rol?: SortOrder
    zonaId?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
    zonaId?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
    contrasena?: SortOrder
    rol?: SortOrder
    zonaId?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
    contrasena?: SortOrder
    rol?: SortOrder
    zonaId?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
    zonaId?: SortOrder
  }

  export type EnumRolUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RolUsuario | EnumRolUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.RolUsuario[] | ListEnumRolUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.RolUsuario[] | ListEnumRolUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumRolUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.RolUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolUsuarioFilter<$PrismaModel>
    _max?: NestedEnumRolUsuarioFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumSexoMascotaFilter<$PrismaModel = never> = {
    equals?: $Enums.SexoMascota | EnumSexoMascotaFieldRefInput<$PrismaModel>
    in?: $Enums.SexoMascota[] | ListEnumSexoMascotaFieldRefInput<$PrismaModel>
    notIn?: $Enums.SexoMascota[] | ListEnumSexoMascotaFieldRefInput<$PrismaModel>
    not?: NestedEnumSexoMascotaFilter<$PrismaModel> | $Enums.SexoMascota
  }

  export type EspecieScalarRelationFilter = {
    is?: EspecieWhereInput
    isNot?: EspecieWhereInput
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type MascotaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    especieId?: SortOrder
    raza?: SortOrder
    color?: SortOrder
    edad?: SortOrder
    sexo?: SortOrder
    descripcion?: SortOrder
    fotoUrl?: SortOrder
    duenioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MascotaAvgOrderByAggregateInput = {
    id?: SortOrder
    especieId?: SortOrder
    edad?: SortOrder
    duenioId?: SortOrder
  }

  export type MascotaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    especieId?: SortOrder
    raza?: SortOrder
    color?: SortOrder
    edad?: SortOrder
    sexo?: SortOrder
    descripcion?: SortOrder
    fotoUrl?: SortOrder
    duenioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MascotaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    especieId?: SortOrder
    raza?: SortOrder
    color?: SortOrder
    edad?: SortOrder
    sexo?: SortOrder
    descripcion?: SortOrder
    fotoUrl?: SortOrder
    duenioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MascotaSumOrderByAggregateInput = {
    id?: SortOrder
    especieId?: SortOrder
    edad?: SortOrder
    duenioId?: SortOrder
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

  export type EnumSexoMascotaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SexoMascota | EnumSexoMascotaFieldRefInput<$PrismaModel>
    in?: $Enums.SexoMascota[] | ListEnumSexoMascotaFieldRefInput<$PrismaModel>
    notIn?: $Enums.SexoMascota[] | ListEnumSexoMascotaFieldRefInput<$PrismaModel>
    not?: NestedEnumSexoMascotaWithAggregatesFilter<$PrismaModel> | $Enums.SexoMascota
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSexoMascotaFilter<$PrismaModel>
    _max?: NestedEnumSexoMascotaFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EnumEstadoReporteFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoReporte | EnumEstadoReporteFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoReporte[] | ListEnumEstadoReporteFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoReporte[] | ListEnumEstadoReporteFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoReporteFilter<$PrismaModel> | $Enums.EstadoReporte
  }

  export type MascotaScalarRelationFilter = {
    is?: MascotaWhereInput
    isNot?: MascotaWhereInput
  }

  export type PerdidaNullableScalarRelationFilter = {
    is?: PerdidaWhereInput | null
    isNot?: PerdidaWhereInput | null
  }

  export type ReporteCountOrderByAggregateInput = {
    id?: SortOrder
    mascotaId?: SortOrder
    zonaId?: SortOrder
    descripcion?: SortOrder
    fechaExtravio?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    direccionTexto?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReporteAvgOrderByAggregateInput = {
    id?: SortOrder
    mascotaId?: SortOrder
    zonaId?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
  }

  export type ReporteMaxOrderByAggregateInput = {
    id?: SortOrder
    mascotaId?: SortOrder
    zonaId?: SortOrder
    descripcion?: SortOrder
    fechaExtravio?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    direccionTexto?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReporteMinOrderByAggregateInput = {
    id?: SortOrder
    mascotaId?: SortOrder
    zonaId?: SortOrder
    descripcion?: SortOrder
    fechaExtravio?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    direccionTexto?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReporteSumOrderByAggregateInput = {
    id?: SortOrder
    mascotaId?: SortOrder
    zonaId?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumEstadoReporteWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoReporte | EnumEstadoReporteFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoReporte[] | ListEnumEstadoReporteFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoReporte[] | ListEnumEstadoReporteFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoReporteWithAggregatesFilter<$PrismaModel> | $Enums.EstadoReporte
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoReporteFilter<$PrismaModel>
    _max?: NestedEnumEstadoReporteFilter<$PrismaModel>
  }

  export type ReporteScalarRelationFilter = {
    is?: ReporteWhereInput
    isNot?: ReporteWhereInput
  }

  export type PerdidaCountOrderByAggregateInput = {
    id?: SortOrder
    reporteId?: SortOrder
    fotoUrl?: SortOrder
    circunstancias?: SortOrder
    recompensa?: SortOrder
    contactoUrgente?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PerdidaAvgOrderByAggregateInput = {
    id?: SortOrder
    reporteId?: SortOrder
    recompensa?: SortOrder
  }

  export type PerdidaMaxOrderByAggregateInput = {
    id?: SortOrder
    reporteId?: SortOrder
    fotoUrl?: SortOrder
    circunstancias?: SortOrder
    recompensa?: SortOrder
    contactoUrgente?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PerdidaMinOrderByAggregateInput = {
    id?: SortOrder
    reporteId?: SortOrder
    fotoUrl?: SortOrder
    circunstancias?: SortOrder
    recompensa?: SortOrder
    contactoUrgente?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PerdidaSumOrderByAggregateInput = {
    id?: SortOrder
    reporteId?: SortOrder
    recompensa?: SortOrder
  }

  export type AvistamientoCountOrderByAggregateInput = {
    id?: SortOrder
    reporteId?: SortOrder
    colaboradorId?: SortOrder
    fechaAvistamiento?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    direccionTexto?: SortOrder
    observaciones?: SortOrder
    fotoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AvistamientoAvgOrderByAggregateInput = {
    id?: SortOrder
    reporteId?: SortOrder
    colaboradorId?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
  }

  export type AvistamientoMaxOrderByAggregateInput = {
    id?: SortOrder
    reporteId?: SortOrder
    colaboradorId?: SortOrder
    fechaAvistamiento?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    direccionTexto?: SortOrder
    observaciones?: SortOrder
    fotoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AvistamientoMinOrderByAggregateInput = {
    id?: SortOrder
    reporteId?: SortOrder
    colaboradorId?: SortOrder
    fechaAvistamiento?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    direccionTexto?: SortOrder
    observaciones?: SortOrder
    fotoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AvistamientoSumOrderByAggregateInput = {
    id?: SortOrder
    reporteId?: SortOrder
    colaboradorId?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
  }

  export type UsuarioCreateNestedManyWithoutZonaInput = {
    create?: XOR<UsuarioCreateWithoutZonaInput, UsuarioUncheckedCreateWithoutZonaInput> | UsuarioCreateWithoutZonaInput[] | UsuarioUncheckedCreateWithoutZonaInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutZonaInput | UsuarioCreateOrConnectWithoutZonaInput[]
    createMany?: UsuarioCreateManyZonaInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type ReporteCreateNestedManyWithoutZonaInput = {
    create?: XOR<ReporteCreateWithoutZonaInput, ReporteUncheckedCreateWithoutZonaInput> | ReporteCreateWithoutZonaInput[] | ReporteUncheckedCreateWithoutZonaInput[]
    connectOrCreate?: ReporteCreateOrConnectWithoutZonaInput | ReporteCreateOrConnectWithoutZonaInput[]
    createMany?: ReporteCreateManyZonaInputEnvelope
    connect?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
  }

  export type UsuarioUncheckedCreateNestedManyWithoutZonaInput = {
    create?: XOR<UsuarioCreateWithoutZonaInput, UsuarioUncheckedCreateWithoutZonaInput> | UsuarioCreateWithoutZonaInput[] | UsuarioUncheckedCreateWithoutZonaInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutZonaInput | UsuarioCreateOrConnectWithoutZonaInput[]
    createMany?: UsuarioCreateManyZonaInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type ReporteUncheckedCreateNestedManyWithoutZonaInput = {
    create?: XOR<ReporteCreateWithoutZonaInput, ReporteUncheckedCreateWithoutZonaInput> | ReporteCreateWithoutZonaInput[] | ReporteUncheckedCreateWithoutZonaInput[]
    connectOrCreate?: ReporteCreateOrConnectWithoutZonaInput | ReporteCreateOrConnectWithoutZonaInput[]
    createMany?: ReporteCreateManyZonaInputEnvelope
    connect?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UsuarioUpdateManyWithoutZonaNestedInput = {
    create?: XOR<UsuarioCreateWithoutZonaInput, UsuarioUncheckedCreateWithoutZonaInput> | UsuarioCreateWithoutZonaInput[] | UsuarioUncheckedCreateWithoutZonaInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutZonaInput | UsuarioCreateOrConnectWithoutZonaInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutZonaInput | UsuarioUpsertWithWhereUniqueWithoutZonaInput[]
    createMany?: UsuarioCreateManyZonaInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutZonaInput | UsuarioUpdateWithWhereUniqueWithoutZonaInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutZonaInput | UsuarioUpdateManyWithWhereWithoutZonaInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type ReporteUpdateManyWithoutZonaNestedInput = {
    create?: XOR<ReporteCreateWithoutZonaInput, ReporteUncheckedCreateWithoutZonaInput> | ReporteCreateWithoutZonaInput[] | ReporteUncheckedCreateWithoutZonaInput[]
    connectOrCreate?: ReporteCreateOrConnectWithoutZonaInput | ReporteCreateOrConnectWithoutZonaInput[]
    upsert?: ReporteUpsertWithWhereUniqueWithoutZonaInput | ReporteUpsertWithWhereUniqueWithoutZonaInput[]
    createMany?: ReporteCreateManyZonaInputEnvelope
    set?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
    disconnect?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
    delete?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
    connect?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
    update?: ReporteUpdateWithWhereUniqueWithoutZonaInput | ReporteUpdateWithWhereUniqueWithoutZonaInput[]
    updateMany?: ReporteUpdateManyWithWhereWithoutZonaInput | ReporteUpdateManyWithWhereWithoutZonaInput[]
    deleteMany?: ReporteScalarWhereInput | ReporteScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsuarioUncheckedUpdateManyWithoutZonaNestedInput = {
    create?: XOR<UsuarioCreateWithoutZonaInput, UsuarioUncheckedCreateWithoutZonaInput> | UsuarioCreateWithoutZonaInput[] | UsuarioUncheckedCreateWithoutZonaInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutZonaInput | UsuarioCreateOrConnectWithoutZonaInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutZonaInput | UsuarioUpsertWithWhereUniqueWithoutZonaInput[]
    createMany?: UsuarioCreateManyZonaInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutZonaInput | UsuarioUpdateWithWhereUniqueWithoutZonaInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutZonaInput | UsuarioUpdateManyWithWhereWithoutZonaInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type ReporteUncheckedUpdateManyWithoutZonaNestedInput = {
    create?: XOR<ReporteCreateWithoutZonaInput, ReporteUncheckedCreateWithoutZonaInput> | ReporteCreateWithoutZonaInput[] | ReporteUncheckedCreateWithoutZonaInput[]
    connectOrCreate?: ReporteCreateOrConnectWithoutZonaInput | ReporteCreateOrConnectWithoutZonaInput[]
    upsert?: ReporteUpsertWithWhereUniqueWithoutZonaInput | ReporteUpsertWithWhereUniqueWithoutZonaInput[]
    createMany?: ReporteCreateManyZonaInputEnvelope
    set?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
    disconnect?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
    delete?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
    connect?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
    update?: ReporteUpdateWithWhereUniqueWithoutZonaInput | ReporteUpdateWithWhereUniqueWithoutZonaInput[]
    updateMany?: ReporteUpdateManyWithWhereWithoutZonaInput | ReporteUpdateManyWithWhereWithoutZonaInput[]
    deleteMany?: ReporteScalarWhereInput | ReporteScalarWhereInput[]
  }

  export type MascotaCreateNestedManyWithoutEspecieInput = {
    create?: XOR<MascotaCreateWithoutEspecieInput, MascotaUncheckedCreateWithoutEspecieInput> | MascotaCreateWithoutEspecieInput[] | MascotaUncheckedCreateWithoutEspecieInput[]
    connectOrCreate?: MascotaCreateOrConnectWithoutEspecieInput | MascotaCreateOrConnectWithoutEspecieInput[]
    createMany?: MascotaCreateManyEspecieInputEnvelope
    connect?: MascotaWhereUniqueInput | MascotaWhereUniqueInput[]
  }

  export type MascotaUncheckedCreateNestedManyWithoutEspecieInput = {
    create?: XOR<MascotaCreateWithoutEspecieInput, MascotaUncheckedCreateWithoutEspecieInput> | MascotaCreateWithoutEspecieInput[] | MascotaUncheckedCreateWithoutEspecieInput[]
    connectOrCreate?: MascotaCreateOrConnectWithoutEspecieInput | MascotaCreateOrConnectWithoutEspecieInput[]
    createMany?: MascotaCreateManyEspecieInputEnvelope
    connect?: MascotaWhereUniqueInput | MascotaWhereUniqueInput[]
  }

  export type MascotaUpdateManyWithoutEspecieNestedInput = {
    create?: XOR<MascotaCreateWithoutEspecieInput, MascotaUncheckedCreateWithoutEspecieInput> | MascotaCreateWithoutEspecieInput[] | MascotaUncheckedCreateWithoutEspecieInput[]
    connectOrCreate?: MascotaCreateOrConnectWithoutEspecieInput | MascotaCreateOrConnectWithoutEspecieInput[]
    upsert?: MascotaUpsertWithWhereUniqueWithoutEspecieInput | MascotaUpsertWithWhereUniqueWithoutEspecieInput[]
    createMany?: MascotaCreateManyEspecieInputEnvelope
    set?: MascotaWhereUniqueInput | MascotaWhereUniqueInput[]
    disconnect?: MascotaWhereUniqueInput | MascotaWhereUniqueInput[]
    delete?: MascotaWhereUniqueInput | MascotaWhereUniqueInput[]
    connect?: MascotaWhereUniqueInput | MascotaWhereUniqueInput[]
    update?: MascotaUpdateWithWhereUniqueWithoutEspecieInput | MascotaUpdateWithWhereUniqueWithoutEspecieInput[]
    updateMany?: MascotaUpdateManyWithWhereWithoutEspecieInput | MascotaUpdateManyWithWhereWithoutEspecieInput[]
    deleteMany?: MascotaScalarWhereInput | MascotaScalarWhereInput[]
  }

  export type MascotaUncheckedUpdateManyWithoutEspecieNestedInput = {
    create?: XOR<MascotaCreateWithoutEspecieInput, MascotaUncheckedCreateWithoutEspecieInput> | MascotaCreateWithoutEspecieInput[] | MascotaUncheckedCreateWithoutEspecieInput[]
    connectOrCreate?: MascotaCreateOrConnectWithoutEspecieInput | MascotaCreateOrConnectWithoutEspecieInput[]
    upsert?: MascotaUpsertWithWhereUniqueWithoutEspecieInput | MascotaUpsertWithWhereUniqueWithoutEspecieInput[]
    createMany?: MascotaCreateManyEspecieInputEnvelope
    set?: MascotaWhereUniqueInput | MascotaWhereUniqueInput[]
    disconnect?: MascotaWhereUniqueInput | MascotaWhereUniqueInput[]
    delete?: MascotaWhereUniqueInput | MascotaWhereUniqueInput[]
    connect?: MascotaWhereUniqueInput | MascotaWhereUniqueInput[]
    update?: MascotaUpdateWithWhereUniqueWithoutEspecieInput | MascotaUpdateWithWhereUniqueWithoutEspecieInput[]
    updateMany?: MascotaUpdateManyWithWhereWithoutEspecieInput | MascotaUpdateManyWithWhereWithoutEspecieInput[]
    deleteMany?: MascotaScalarWhereInput | MascotaScalarWhereInput[]
  }

  export type ZonaCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<ZonaCreateWithoutUsuariosInput, ZonaUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: ZonaCreateOrConnectWithoutUsuariosInput
    connect?: ZonaWhereUniqueInput
  }

  export type MascotaCreateNestedManyWithoutDuenioInput = {
    create?: XOR<MascotaCreateWithoutDuenioInput, MascotaUncheckedCreateWithoutDuenioInput> | MascotaCreateWithoutDuenioInput[] | MascotaUncheckedCreateWithoutDuenioInput[]
    connectOrCreate?: MascotaCreateOrConnectWithoutDuenioInput | MascotaCreateOrConnectWithoutDuenioInput[]
    createMany?: MascotaCreateManyDuenioInputEnvelope
    connect?: MascotaWhereUniqueInput | MascotaWhereUniqueInput[]
  }

  export type AvistamientoCreateNestedManyWithoutColaboradorInput = {
    create?: XOR<AvistamientoCreateWithoutColaboradorInput, AvistamientoUncheckedCreateWithoutColaboradorInput> | AvistamientoCreateWithoutColaboradorInput[] | AvistamientoUncheckedCreateWithoutColaboradorInput[]
    connectOrCreate?: AvistamientoCreateOrConnectWithoutColaboradorInput | AvistamientoCreateOrConnectWithoutColaboradorInput[]
    createMany?: AvistamientoCreateManyColaboradorInputEnvelope
    connect?: AvistamientoWhereUniqueInput | AvistamientoWhereUniqueInput[]
  }

  export type MascotaUncheckedCreateNestedManyWithoutDuenioInput = {
    create?: XOR<MascotaCreateWithoutDuenioInput, MascotaUncheckedCreateWithoutDuenioInput> | MascotaCreateWithoutDuenioInput[] | MascotaUncheckedCreateWithoutDuenioInput[]
    connectOrCreate?: MascotaCreateOrConnectWithoutDuenioInput | MascotaCreateOrConnectWithoutDuenioInput[]
    createMany?: MascotaCreateManyDuenioInputEnvelope
    connect?: MascotaWhereUniqueInput | MascotaWhereUniqueInput[]
  }

  export type AvistamientoUncheckedCreateNestedManyWithoutColaboradorInput = {
    create?: XOR<AvistamientoCreateWithoutColaboradorInput, AvistamientoUncheckedCreateWithoutColaboradorInput> | AvistamientoCreateWithoutColaboradorInput[] | AvistamientoUncheckedCreateWithoutColaboradorInput[]
    connectOrCreate?: AvistamientoCreateOrConnectWithoutColaboradorInput | AvistamientoCreateOrConnectWithoutColaboradorInput[]
    createMany?: AvistamientoCreateManyColaboradorInputEnvelope
    connect?: AvistamientoWhereUniqueInput | AvistamientoWhereUniqueInput[]
  }

  export type EnumRolUsuarioFieldUpdateOperationsInput = {
    set?: $Enums.RolUsuario
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ZonaUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: XOR<ZonaCreateWithoutUsuariosInput, ZonaUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: ZonaCreateOrConnectWithoutUsuariosInput
    upsert?: ZonaUpsertWithoutUsuariosInput
    connect?: ZonaWhereUniqueInput
    update?: XOR<XOR<ZonaUpdateToOneWithWhereWithoutUsuariosInput, ZonaUpdateWithoutUsuariosInput>, ZonaUncheckedUpdateWithoutUsuariosInput>
  }

  export type MascotaUpdateManyWithoutDuenioNestedInput = {
    create?: XOR<MascotaCreateWithoutDuenioInput, MascotaUncheckedCreateWithoutDuenioInput> | MascotaCreateWithoutDuenioInput[] | MascotaUncheckedCreateWithoutDuenioInput[]
    connectOrCreate?: MascotaCreateOrConnectWithoutDuenioInput | MascotaCreateOrConnectWithoutDuenioInput[]
    upsert?: MascotaUpsertWithWhereUniqueWithoutDuenioInput | MascotaUpsertWithWhereUniqueWithoutDuenioInput[]
    createMany?: MascotaCreateManyDuenioInputEnvelope
    set?: MascotaWhereUniqueInput | MascotaWhereUniqueInput[]
    disconnect?: MascotaWhereUniqueInput | MascotaWhereUniqueInput[]
    delete?: MascotaWhereUniqueInput | MascotaWhereUniqueInput[]
    connect?: MascotaWhereUniqueInput | MascotaWhereUniqueInput[]
    update?: MascotaUpdateWithWhereUniqueWithoutDuenioInput | MascotaUpdateWithWhereUniqueWithoutDuenioInput[]
    updateMany?: MascotaUpdateManyWithWhereWithoutDuenioInput | MascotaUpdateManyWithWhereWithoutDuenioInput[]
    deleteMany?: MascotaScalarWhereInput | MascotaScalarWhereInput[]
  }

  export type AvistamientoUpdateManyWithoutColaboradorNestedInput = {
    create?: XOR<AvistamientoCreateWithoutColaboradorInput, AvistamientoUncheckedCreateWithoutColaboradorInput> | AvistamientoCreateWithoutColaboradorInput[] | AvistamientoUncheckedCreateWithoutColaboradorInput[]
    connectOrCreate?: AvistamientoCreateOrConnectWithoutColaboradorInput | AvistamientoCreateOrConnectWithoutColaboradorInput[]
    upsert?: AvistamientoUpsertWithWhereUniqueWithoutColaboradorInput | AvistamientoUpsertWithWhereUniqueWithoutColaboradorInput[]
    createMany?: AvistamientoCreateManyColaboradorInputEnvelope
    set?: AvistamientoWhereUniqueInput | AvistamientoWhereUniqueInput[]
    disconnect?: AvistamientoWhereUniqueInput | AvistamientoWhereUniqueInput[]
    delete?: AvistamientoWhereUniqueInput | AvistamientoWhereUniqueInput[]
    connect?: AvistamientoWhereUniqueInput | AvistamientoWhereUniqueInput[]
    update?: AvistamientoUpdateWithWhereUniqueWithoutColaboradorInput | AvistamientoUpdateWithWhereUniqueWithoutColaboradorInput[]
    updateMany?: AvistamientoUpdateManyWithWhereWithoutColaboradorInput | AvistamientoUpdateManyWithWhereWithoutColaboradorInput[]
    deleteMany?: AvistamientoScalarWhereInput | AvistamientoScalarWhereInput[]
  }

  export type MascotaUncheckedUpdateManyWithoutDuenioNestedInput = {
    create?: XOR<MascotaCreateWithoutDuenioInput, MascotaUncheckedCreateWithoutDuenioInput> | MascotaCreateWithoutDuenioInput[] | MascotaUncheckedCreateWithoutDuenioInput[]
    connectOrCreate?: MascotaCreateOrConnectWithoutDuenioInput | MascotaCreateOrConnectWithoutDuenioInput[]
    upsert?: MascotaUpsertWithWhereUniqueWithoutDuenioInput | MascotaUpsertWithWhereUniqueWithoutDuenioInput[]
    createMany?: MascotaCreateManyDuenioInputEnvelope
    set?: MascotaWhereUniqueInput | MascotaWhereUniqueInput[]
    disconnect?: MascotaWhereUniqueInput | MascotaWhereUniqueInput[]
    delete?: MascotaWhereUniqueInput | MascotaWhereUniqueInput[]
    connect?: MascotaWhereUniqueInput | MascotaWhereUniqueInput[]
    update?: MascotaUpdateWithWhereUniqueWithoutDuenioInput | MascotaUpdateWithWhereUniqueWithoutDuenioInput[]
    updateMany?: MascotaUpdateManyWithWhereWithoutDuenioInput | MascotaUpdateManyWithWhereWithoutDuenioInput[]
    deleteMany?: MascotaScalarWhereInput | MascotaScalarWhereInput[]
  }

  export type AvistamientoUncheckedUpdateManyWithoutColaboradorNestedInput = {
    create?: XOR<AvistamientoCreateWithoutColaboradorInput, AvistamientoUncheckedCreateWithoutColaboradorInput> | AvistamientoCreateWithoutColaboradorInput[] | AvistamientoUncheckedCreateWithoutColaboradorInput[]
    connectOrCreate?: AvistamientoCreateOrConnectWithoutColaboradorInput | AvistamientoCreateOrConnectWithoutColaboradorInput[]
    upsert?: AvistamientoUpsertWithWhereUniqueWithoutColaboradorInput | AvistamientoUpsertWithWhereUniqueWithoutColaboradorInput[]
    createMany?: AvistamientoCreateManyColaboradorInputEnvelope
    set?: AvistamientoWhereUniqueInput | AvistamientoWhereUniqueInput[]
    disconnect?: AvistamientoWhereUniqueInput | AvistamientoWhereUniqueInput[]
    delete?: AvistamientoWhereUniqueInput | AvistamientoWhereUniqueInput[]
    connect?: AvistamientoWhereUniqueInput | AvistamientoWhereUniqueInput[]
    update?: AvistamientoUpdateWithWhereUniqueWithoutColaboradorInput | AvistamientoUpdateWithWhereUniqueWithoutColaboradorInput[]
    updateMany?: AvistamientoUpdateManyWithWhereWithoutColaboradorInput | AvistamientoUpdateManyWithWhereWithoutColaboradorInput[]
    deleteMany?: AvistamientoScalarWhereInput | AvistamientoScalarWhereInput[]
  }

  export type EspecieCreateNestedOneWithoutMascotasInput = {
    create?: XOR<EspecieCreateWithoutMascotasInput, EspecieUncheckedCreateWithoutMascotasInput>
    connectOrCreate?: EspecieCreateOrConnectWithoutMascotasInput
    connect?: EspecieWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutMascotasInput = {
    create?: XOR<UsuarioCreateWithoutMascotasInput, UsuarioUncheckedCreateWithoutMascotasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutMascotasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ReporteCreateNestedManyWithoutMascotaInput = {
    create?: XOR<ReporteCreateWithoutMascotaInput, ReporteUncheckedCreateWithoutMascotaInput> | ReporteCreateWithoutMascotaInput[] | ReporteUncheckedCreateWithoutMascotaInput[]
    connectOrCreate?: ReporteCreateOrConnectWithoutMascotaInput | ReporteCreateOrConnectWithoutMascotaInput[]
    createMany?: ReporteCreateManyMascotaInputEnvelope
    connect?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
  }

  export type ReporteUncheckedCreateNestedManyWithoutMascotaInput = {
    create?: XOR<ReporteCreateWithoutMascotaInput, ReporteUncheckedCreateWithoutMascotaInput> | ReporteCreateWithoutMascotaInput[] | ReporteUncheckedCreateWithoutMascotaInput[]
    connectOrCreate?: ReporteCreateOrConnectWithoutMascotaInput | ReporteCreateOrConnectWithoutMascotaInput[]
    createMany?: ReporteCreateManyMascotaInputEnvelope
    connect?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumSexoMascotaFieldUpdateOperationsInput = {
    set?: $Enums.SexoMascota
  }

  export type EspecieUpdateOneRequiredWithoutMascotasNestedInput = {
    create?: XOR<EspecieCreateWithoutMascotasInput, EspecieUncheckedCreateWithoutMascotasInput>
    connectOrCreate?: EspecieCreateOrConnectWithoutMascotasInput
    upsert?: EspecieUpsertWithoutMascotasInput
    connect?: EspecieWhereUniqueInput
    update?: XOR<XOR<EspecieUpdateToOneWithWhereWithoutMascotasInput, EspecieUpdateWithoutMascotasInput>, EspecieUncheckedUpdateWithoutMascotasInput>
  }

  export type UsuarioUpdateOneRequiredWithoutMascotasNestedInput = {
    create?: XOR<UsuarioCreateWithoutMascotasInput, UsuarioUncheckedCreateWithoutMascotasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutMascotasInput
    upsert?: UsuarioUpsertWithoutMascotasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutMascotasInput, UsuarioUpdateWithoutMascotasInput>, UsuarioUncheckedUpdateWithoutMascotasInput>
  }

  export type ReporteUpdateManyWithoutMascotaNestedInput = {
    create?: XOR<ReporteCreateWithoutMascotaInput, ReporteUncheckedCreateWithoutMascotaInput> | ReporteCreateWithoutMascotaInput[] | ReporteUncheckedCreateWithoutMascotaInput[]
    connectOrCreate?: ReporteCreateOrConnectWithoutMascotaInput | ReporteCreateOrConnectWithoutMascotaInput[]
    upsert?: ReporteUpsertWithWhereUniqueWithoutMascotaInput | ReporteUpsertWithWhereUniqueWithoutMascotaInput[]
    createMany?: ReporteCreateManyMascotaInputEnvelope
    set?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
    disconnect?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
    delete?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
    connect?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
    update?: ReporteUpdateWithWhereUniqueWithoutMascotaInput | ReporteUpdateWithWhereUniqueWithoutMascotaInput[]
    updateMany?: ReporteUpdateManyWithWhereWithoutMascotaInput | ReporteUpdateManyWithWhereWithoutMascotaInput[]
    deleteMany?: ReporteScalarWhereInput | ReporteScalarWhereInput[]
  }

  export type ReporteUncheckedUpdateManyWithoutMascotaNestedInput = {
    create?: XOR<ReporteCreateWithoutMascotaInput, ReporteUncheckedCreateWithoutMascotaInput> | ReporteCreateWithoutMascotaInput[] | ReporteUncheckedCreateWithoutMascotaInput[]
    connectOrCreate?: ReporteCreateOrConnectWithoutMascotaInput | ReporteCreateOrConnectWithoutMascotaInput[]
    upsert?: ReporteUpsertWithWhereUniqueWithoutMascotaInput | ReporteUpsertWithWhereUniqueWithoutMascotaInput[]
    createMany?: ReporteCreateManyMascotaInputEnvelope
    set?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
    disconnect?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
    delete?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
    connect?: ReporteWhereUniqueInput | ReporteWhereUniqueInput[]
    update?: ReporteUpdateWithWhereUniqueWithoutMascotaInput | ReporteUpdateWithWhereUniqueWithoutMascotaInput[]
    updateMany?: ReporteUpdateManyWithWhereWithoutMascotaInput | ReporteUpdateManyWithWhereWithoutMascotaInput[]
    deleteMany?: ReporteScalarWhereInput | ReporteScalarWhereInput[]
  }

  export type MascotaCreateNestedOneWithoutReportesInput = {
    create?: XOR<MascotaCreateWithoutReportesInput, MascotaUncheckedCreateWithoutReportesInput>
    connectOrCreate?: MascotaCreateOrConnectWithoutReportesInput
    connect?: MascotaWhereUniqueInput
  }

  export type ZonaCreateNestedOneWithoutReportesInput = {
    create?: XOR<ZonaCreateWithoutReportesInput, ZonaUncheckedCreateWithoutReportesInput>
    connectOrCreate?: ZonaCreateOrConnectWithoutReportesInput
    connect?: ZonaWhereUniqueInput
  }

  export type PerdidaCreateNestedOneWithoutReporteInput = {
    create?: XOR<PerdidaCreateWithoutReporteInput, PerdidaUncheckedCreateWithoutReporteInput>
    connectOrCreate?: PerdidaCreateOrConnectWithoutReporteInput
    connect?: PerdidaWhereUniqueInput
  }

  export type AvistamientoCreateNestedManyWithoutReporteInput = {
    create?: XOR<AvistamientoCreateWithoutReporteInput, AvistamientoUncheckedCreateWithoutReporteInput> | AvistamientoCreateWithoutReporteInput[] | AvistamientoUncheckedCreateWithoutReporteInput[]
    connectOrCreate?: AvistamientoCreateOrConnectWithoutReporteInput | AvistamientoCreateOrConnectWithoutReporteInput[]
    createMany?: AvistamientoCreateManyReporteInputEnvelope
    connect?: AvistamientoWhereUniqueInput | AvistamientoWhereUniqueInput[]
  }

  export type PerdidaUncheckedCreateNestedOneWithoutReporteInput = {
    create?: XOR<PerdidaCreateWithoutReporteInput, PerdidaUncheckedCreateWithoutReporteInput>
    connectOrCreate?: PerdidaCreateOrConnectWithoutReporteInput
    connect?: PerdidaWhereUniqueInput
  }

  export type AvistamientoUncheckedCreateNestedManyWithoutReporteInput = {
    create?: XOR<AvistamientoCreateWithoutReporteInput, AvistamientoUncheckedCreateWithoutReporteInput> | AvistamientoCreateWithoutReporteInput[] | AvistamientoUncheckedCreateWithoutReporteInput[]
    connectOrCreate?: AvistamientoCreateOrConnectWithoutReporteInput | AvistamientoCreateOrConnectWithoutReporteInput[]
    createMany?: AvistamientoCreateManyReporteInputEnvelope
    connect?: AvistamientoWhereUniqueInput | AvistamientoWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumEstadoReporteFieldUpdateOperationsInput = {
    set?: $Enums.EstadoReporte
  }

  export type MascotaUpdateOneRequiredWithoutReportesNestedInput = {
    create?: XOR<MascotaCreateWithoutReportesInput, MascotaUncheckedCreateWithoutReportesInput>
    connectOrCreate?: MascotaCreateOrConnectWithoutReportesInput
    upsert?: MascotaUpsertWithoutReportesInput
    connect?: MascotaWhereUniqueInput
    update?: XOR<XOR<MascotaUpdateToOneWithWhereWithoutReportesInput, MascotaUpdateWithoutReportesInput>, MascotaUncheckedUpdateWithoutReportesInput>
  }

  export type ZonaUpdateOneRequiredWithoutReportesNestedInput = {
    create?: XOR<ZonaCreateWithoutReportesInput, ZonaUncheckedCreateWithoutReportesInput>
    connectOrCreate?: ZonaCreateOrConnectWithoutReportesInput
    upsert?: ZonaUpsertWithoutReportesInput
    connect?: ZonaWhereUniqueInput
    update?: XOR<XOR<ZonaUpdateToOneWithWhereWithoutReportesInput, ZonaUpdateWithoutReportesInput>, ZonaUncheckedUpdateWithoutReportesInput>
  }

  export type PerdidaUpdateOneWithoutReporteNestedInput = {
    create?: XOR<PerdidaCreateWithoutReporteInput, PerdidaUncheckedCreateWithoutReporteInput>
    connectOrCreate?: PerdidaCreateOrConnectWithoutReporteInput
    upsert?: PerdidaUpsertWithoutReporteInput
    disconnect?: PerdidaWhereInput | boolean
    delete?: PerdidaWhereInput | boolean
    connect?: PerdidaWhereUniqueInput
    update?: XOR<XOR<PerdidaUpdateToOneWithWhereWithoutReporteInput, PerdidaUpdateWithoutReporteInput>, PerdidaUncheckedUpdateWithoutReporteInput>
  }

  export type AvistamientoUpdateManyWithoutReporteNestedInput = {
    create?: XOR<AvistamientoCreateWithoutReporteInput, AvistamientoUncheckedCreateWithoutReporteInput> | AvistamientoCreateWithoutReporteInput[] | AvistamientoUncheckedCreateWithoutReporteInput[]
    connectOrCreate?: AvistamientoCreateOrConnectWithoutReporteInput | AvistamientoCreateOrConnectWithoutReporteInput[]
    upsert?: AvistamientoUpsertWithWhereUniqueWithoutReporteInput | AvistamientoUpsertWithWhereUniqueWithoutReporteInput[]
    createMany?: AvistamientoCreateManyReporteInputEnvelope
    set?: AvistamientoWhereUniqueInput | AvistamientoWhereUniqueInput[]
    disconnect?: AvistamientoWhereUniqueInput | AvistamientoWhereUniqueInput[]
    delete?: AvistamientoWhereUniqueInput | AvistamientoWhereUniqueInput[]
    connect?: AvistamientoWhereUniqueInput | AvistamientoWhereUniqueInput[]
    update?: AvistamientoUpdateWithWhereUniqueWithoutReporteInput | AvistamientoUpdateWithWhereUniqueWithoutReporteInput[]
    updateMany?: AvistamientoUpdateManyWithWhereWithoutReporteInput | AvistamientoUpdateManyWithWhereWithoutReporteInput[]
    deleteMany?: AvistamientoScalarWhereInput | AvistamientoScalarWhereInput[]
  }

  export type PerdidaUncheckedUpdateOneWithoutReporteNestedInput = {
    create?: XOR<PerdidaCreateWithoutReporteInput, PerdidaUncheckedCreateWithoutReporteInput>
    connectOrCreate?: PerdidaCreateOrConnectWithoutReporteInput
    upsert?: PerdidaUpsertWithoutReporteInput
    disconnect?: PerdidaWhereInput | boolean
    delete?: PerdidaWhereInput | boolean
    connect?: PerdidaWhereUniqueInput
    update?: XOR<XOR<PerdidaUpdateToOneWithWhereWithoutReporteInput, PerdidaUpdateWithoutReporteInput>, PerdidaUncheckedUpdateWithoutReporteInput>
  }

  export type AvistamientoUncheckedUpdateManyWithoutReporteNestedInput = {
    create?: XOR<AvistamientoCreateWithoutReporteInput, AvistamientoUncheckedCreateWithoutReporteInput> | AvistamientoCreateWithoutReporteInput[] | AvistamientoUncheckedCreateWithoutReporteInput[]
    connectOrCreate?: AvistamientoCreateOrConnectWithoutReporteInput | AvistamientoCreateOrConnectWithoutReporteInput[]
    upsert?: AvistamientoUpsertWithWhereUniqueWithoutReporteInput | AvistamientoUpsertWithWhereUniqueWithoutReporteInput[]
    createMany?: AvistamientoCreateManyReporteInputEnvelope
    set?: AvistamientoWhereUniqueInput | AvistamientoWhereUniqueInput[]
    disconnect?: AvistamientoWhereUniqueInput | AvistamientoWhereUniqueInput[]
    delete?: AvistamientoWhereUniqueInput | AvistamientoWhereUniqueInput[]
    connect?: AvistamientoWhereUniqueInput | AvistamientoWhereUniqueInput[]
    update?: AvistamientoUpdateWithWhereUniqueWithoutReporteInput | AvistamientoUpdateWithWhereUniqueWithoutReporteInput[]
    updateMany?: AvistamientoUpdateManyWithWhereWithoutReporteInput | AvistamientoUpdateManyWithWhereWithoutReporteInput[]
    deleteMany?: AvistamientoScalarWhereInput | AvistamientoScalarWhereInput[]
  }

  export type ReporteCreateNestedOneWithoutPerdidaInput = {
    create?: XOR<ReporteCreateWithoutPerdidaInput, ReporteUncheckedCreateWithoutPerdidaInput>
    connectOrCreate?: ReporteCreateOrConnectWithoutPerdidaInput
    connect?: ReporteWhereUniqueInput
  }

  export type ReporteUpdateOneRequiredWithoutPerdidaNestedInput = {
    create?: XOR<ReporteCreateWithoutPerdidaInput, ReporteUncheckedCreateWithoutPerdidaInput>
    connectOrCreate?: ReporteCreateOrConnectWithoutPerdidaInput
    upsert?: ReporteUpsertWithoutPerdidaInput
    connect?: ReporteWhereUniqueInput
    update?: XOR<XOR<ReporteUpdateToOneWithWhereWithoutPerdidaInput, ReporteUpdateWithoutPerdidaInput>, ReporteUncheckedUpdateWithoutPerdidaInput>
  }

  export type ReporteCreateNestedOneWithoutAvistamientosInput = {
    create?: XOR<ReporteCreateWithoutAvistamientosInput, ReporteUncheckedCreateWithoutAvistamientosInput>
    connectOrCreate?: ReporteCreateOrConnectWithoutAvistamientosInput
    connect?: ReporteWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutAvistamientosInput = {
    create?: XOR<UsuarioCreateWithoutAvistamientosInput, UsuarioUncheckedCreateWithoutAvistamientosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAvistamientosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ReporteUpdateOneRequiredWithoutAvistamientosNestedInput = {
    create?: XOR<ReporteCreateWithoutAvistamientosInput, ReporteUncheckedCreateWithoutAvistamientosInput>
    connectOrCreate?: ReporteCreateOrConnectWithoutAvistamientosInput
    upsert?: ReporteUpsertWithoutAvistamientosInput
    connect?: ReporteWhereUniqueInput
    update?: XOR<XOR<ReporteUpdateToOneWithWhereWithoutAvistamientosInput, ReporteUpdateWithoutAvistamientosInput>, ReporteUncheckedUpdateWithoutAvistamientosInput>
  }

  export type UsuarioUpdateOneRequiredWithoutAvistamientosNestedInput = {
    create?: XOR<UsuarioCreateWithoutAvistamientosInput, UsuarioUncheckedCreateWithoutAvistamientosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAvistamientosInput
    upsert?: UsuarioUpsertWithoutAvistamientosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutAvistamientosInput, UsuarioUpdateWithoutAvistamientosInput>, UsuarioUncheckedUpdateWithoutAvistamientosInput>
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

  export type NestedEnumRolUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.RolUsuario | EnumRolUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.RolUsuario[] | ListEnumRolUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.RolUsuario[] | ListEnumRolUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumRolUsuarioFilter<$PrismaModel> | $Enums.RolUsuario
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumRolUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RolUsuario | EnumRolUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.RolUsuario[] | ListEnumRolUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.RolUsuario[] | ListEnumRolUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumRolUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.RolUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolUsuarioFilter<$PrismaModel>
    _max?: NestedEnumRolUsuarioFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumSexoMascotaFilter<$PrismaModel = never> = {
    equals?: $Enums.SexoMascota | EnumSexoMascotaFieldRefInput<$PrismaModel>
    in?: $Enums.SexoMascota[] | ListEnumSexoMascotaFieldRefInput<$PrismaModel>
    notIn?: $Enums.SexoMascota[] | ListEnumSexoMascotaFieldRefInput<$PrismaModel>
    not?: NestedEnumSexoMascotaFilter<$PrismaModel> | $Enums.SexoMascota
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

  export type NestedEnumSexoMascotaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SexoMascota | EnumSexoMascotaFieldRefInput<$PrismaModel>
    in?: $Enums.SexoMascota[] | ListEnumSexoMascotaFieldRefInput<$PrismaModel>
    notIn?: $Enums.SexoMascota[] | ListEnumSexoMascotaFieldRefInput<$PrismaModel>
    not?: NestedEnumSexoMascotaWithAggregatesFilter<$PrismaModel> | $Enums.SexoMascota
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSexoMascotaFilter<$PrismaModel>
    _max?: NestedEnumSexoMascotaFilter<$PrismaModel>
  }

  export type NestedEnumEstadoReporteFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoReporte | EnumEstadoReporteFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoReporte[] | ListEnumEstadoReporteFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoReporte[] | ListEnumEstadoReporteFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoReporteFilter<$PrismaModel> | $Enums.EstadoReporte
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumEstadoReporteWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoReporte | EnumEstadoReporteFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoReporte[] | ListEnumEstadoReporteFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoReporte[] | ListEnumEstadoReporteFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoReporteWithAggregatesFilter<$PrismaModel> | $Enums.EstadoReporte
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoReporteFilter<$PrismaModel>
    _max?: NestedEnumEstadoReporteFilter<$PrismaModel>
  }

  export type UsuarioCreateWithoutZonaInput = {
    nombres: string
    apellidos: string
    correo: string
    telefono: string
    contrasena: string
    rol?: $Enums.RolUsuario
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    mascotas?: MascotaCreateNestedManyWithoutDuenioInput
    avistamientos?: AvistamientoCreateNestedManyWithoutColaboradorInput
  }

  export type UsuarioUncheckedCreateWithoutZonaInput = {
    id?: number
    nombres: string
    apellidos: string
    correo: string
    telefono: string
    contrasena: string
    rol?: $Enums.RolUsuario
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    mascotas?: MascotaUncheckedCreateNestedManyWithoutDuenioInput
    avistamientos?: AvistamientoUncheckedCreateNestedManyWithoutColaboradorInput
  }

  export type UsuarioCreateOrConnectWithoutZonaInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutZonaInput, UsuarioUncheckedCreateWithoutZonaInput>
  }

  export type UsuarioCreateManyZonaInputEnvelope = {
    data: UsuarioCreateManyZonaInput | UsuarioCreateManyZonaInput[]
    skipDuplicates?: boolean
  }

  export type ReporteCreateWithoutZonaInput = {
    descripcion: string
    fechaExtravio: Date | string
    latitud?: number | null
    longitud?: number | null
    direccionTexto?: string | null
    estado?: $Enums.EstadoReporte
    createdAt?: Date | string
    updatedAt?: Date | string
    mascota: MascotaCreateNestedOneWithoutReportesInput
    perdida?: PerdidaCreateNestedOneWithoutReporteInput
    avistamientos?: AvistamientoCreateNestedManyWithoutReporteInput
  }

  export type ReporteUncheckedCreateWithoutZonaInput = {
    id?: number
    mascotaId: number
    descripcion: string
    fechaExtravio: Date | string
    latitud?: number | null
    longitud?: number | null
    direccionTexto?: string | null
    estado?: $Enums.EstadoReporte
    createdAt?: Date | string
    updatedAt?: Date | string
    perdida?: PerdidaUncheckedCreateNestedOneWithoutReporteInput
    avistamientos?: AvistamientoUncheckedCreateNestedManyWithoutReporteInput
  }

  export type ReporteCreateOrConnectWithoutZonaInput = {
    where: ReporteWhereUniqueInput
    create: XOR<ReporteCreateWithoutZonaInput, ReporteUncheckedCreateWithoutZonaInput>
  }

  export type ReporteCreateManyZonaInputEnvelope = {
    data: ReporteCreateManyZonaInput | ReporteCreateManyZonaInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithWhereUniqueWithoutZonaInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutZonaInput, UsuarioUncheckedUpdateWithoutZonaInput>
    create: XOR<UsuarioCreateWithoutZonaInput, UsuarioUncheckedCreateWithoutZonaInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutZonaInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutZonaInput, UsuarioUncheckedUpdateWithoutZonaInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutZonaInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutZonaInput>
  }

  export type UsuarioScalarWhereInput = {
    AND?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    OR?: UsuarioScalarWhereInput[]
    NOT?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nombres?: StringFilter<"Usuario"> | string
    apellidos?: StringFilter<"Usuario"> | string
    correo?: StringFilter<"Usuario"> | string
    telefono?: StringFilter<"Usuario"> | string
    contrasena?: StringFilter<"Usuario"> | string
    rol?: EnumRolUsuarioFilter<"Usuario"> | $Enums.RolUsuario
    zonaId?: IntFilter<"Usuario"> | number
    activo?: BoolFilter<"Usuario"> | boolean
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
  }

  export type ReporteUpsertWithWhereUniqueWithoutZonaInput = {
    where: ReporteWhereUniqueInput
    update: XOR<ReporteUpdateWithoutZonaInput, ReporteUncheckedUpdateWithoutZonaInput>
    create: XOR<ReporteCreateWithoutZonaInput, ReporteUncheckedCreateWithoutZonaInput>
  }

  export type ReporteUpdateWithWhereUniqueWithoutZonaInput = {
    where: ReporteWhereUniqueInput
    data: XOR<ReporteUpdateWithoutZonaInput, ReporteUncheckedUpdateWithoutZonaInput>
  }

  export type ReporteUpdateManyWithWhereWithoutZonaInput = {
    where: ReporteScalarWhereInput
    data: XOR<ReporteUpdateManyMutationInput, ReporteUncheckedUpdateManyWithoutZonaInput>
  }

  export type ReporteScalarWhereInput = {
    AND?: ReporteScalarWhereInput | ReporteScalarWhereInput[]
    OR?: ReporteScalarWhereInput[]
    NOT?: ReporteScalarWhereInput | ReporteScalarWhereInput[]
    id?: IntFilter<"Reporte"> | number
    mascotaId?: IntFilter<"Reporte"> | number
    zonaId?: IntFilter<"Reporte"> | number
    descripcion?: StringFilter<"Reporte"> | string
    fechaExtravio?: DateTimeFilter<"Reporte"> | Date | string
    latitud?: FloatNullableFilter<"Reporte"> | number | null
    longitud?: FloatNullableFilter<"Reporte"> | number | null
    direccionTexto?: StringNullableFilter<"Reporte"> | string | null
    estado?: EnumEstadoReporteFilter<"Reporte"> | $Enums.EstadoReporte
    createdAt?: DateTimeFilter<"Reporte"> | Date | string
    updatedAt?: DateTimeFilter<"Reporte"> | Date | string
  }

  export type MascotaCreateWithoutEspecieInput = {
    nombre: string
    raza?: string | null
    color: string
    edad?: number | null
    sexo: $Enums.SexoMascota
    descripcion?: string | null
    fotoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    duenio: UsuarioCreateNestedOneWithoutMascotasInput
    reportes?: ReporteCreateNestedManyWithoutMascotaInput
  }

  export type MascotaUncheckedCreateWithoutEspecieInput = {
    id?: number
    nombre: string
    raza?: string | null
    color: string
    edad?: number | null
    sexo: $Enums.SexoMascota
    descripcion?: string | null
    fotoUrl?: string | null
    duenioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reportes?: ReporteUncheckedCreateNestedManyWithoutMascotaInput
  }

  export type MascotaCreateOrConnectWithoutEspecieInput = {
    where: MascotaWhereUniqueInput
    create: XOR<MascotaCreateWithoutEspecieInput, MascotaUncheckedCreateWithoutEspecieInput>
  }

  export type MascotaCreateManyEspecieInputEnvelope = {
    data: MascotaCreateManyEspecieInput | MascotaCreateManyEspecieInput[]
    skipDuplicates?: boolean
  }

  export type MascotaUpsertWithWhereUniqueWithoutEspecieInput = {
    where: MascotaWhereUniqueInput
    update: XOR<MascotaUpdateWithoutEspecieInput, MascotaUncheckedUpdateWithoutEspecieInput>
    create: XOR<MascotaCreateWithoutEspecieInput, MascotaUncheckedCreateWithoutEspecieInput>
  }

  export type MascotaUpdateWithWhereUniqueWithoutEspecieInput = {
    where: MascotaWhereUniqueInput
    data: XOR<MascotaUpdateWithoutEspecieInput, MascotaUncheckedUpdateWithoutEspecieInput>
  }

  export type MascotaUpdateManyWithWhereWithoutEspecieInput = {
    where: MascotaScalarWhereInput
    data: XOR<MascotaUpdateManyMutationInput, MascotaUncheckedUpdateManyWithoutEspecieInput>
  }

  export type MascotaScalarWhereInput = {
    AND?: MascotaScalarWhereInput | MascotaScalarWhereInput[]
    OR?: MascotaScalarWhereInput[]
    NOT?: MascotaScalarWhereInput | MascotaScalarWhereInput[]
    id?: IntFilter<"Mascota"> | number
    nombre?: StringFilter<"Mascota"> | string
    especieId?: IntFilter<"Mascota"> | number
    raza?: StringNullableFilter<"Mascota"> | string | null
    color?: StringFilter<"Mascota"> | string
    edad?: IntNullableFilter<"Mascota"> | number | null
    sexo?: EnumSexoMascotaFilter<"Mascota"> | $Enums.SexoMascota
    descripcion?: StringNullableFilter<"Mascota"> | string | null
    fotoUrl?: StringNullableFilter<"Mascota"> | string | null
    duenioId?: IntFilter<"Mascota"> | number
    createdAt?: DateTimeFilter<"Mascota"> | Date | string
    updatedAt?: DateTimeFilter<"Mascota"> | Date | string
  }

  export type ZonaCreateWithoutUsuariosInput = {
    nombre: string
    ciudad: string
    departamento: string
    descripcion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reportes?: ReporteCreateNestedManyWithoutZonaInput
  }

  export type ZonaUncheckedCreateWithoutUsuariosInput = {
    id?: number
    nombre: string
    ciudad: string
    departamento: string
    descripcion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reportes?: ReporteUncheckedCreateNestedManyWithoutZonaInput
  }

  export type ZonaCreateOrConnectWithoutUsuariosInput = {
    where: ZonaWhereUniqueInput
    create: XOR<ZonaCreateWithoutUsuariosInput, ZonaUncheckedCreateWithoutUsuariosInput>
  }

  export type MascotaCreateWithoutDuenioInput = {
    nombre: string
    raza?: string | null
    color: string
    edad?: number | null
    sexo: $Enums.SexoMascota
    descripcion?: string | null
    fotoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    especie: EspecieCreateNestedOneWithoutMascotasInput
    reportes?: ReporteCreateNestedManyWithoutMascotaInput
  }

  export type MascotaUncheckedCreateWithoutDuenioInput = {
    id?: number
    nombre: string
    especieId: number
    raza?: string | null
    color: string
    edad?: number | null
    sexo: $Enums.SexoMascota
    descripcion?: string | null
    fotoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reportes?: ReporteUncheckedCreateNestedManyWithoutMascotaInput
  }

  export type MascotaCreateOrConnectWithoutDuenioInput = {
    where: MascotaWhereUniqueInput
    create: XOR<MascotaCreateWithoutDuenioInput, MascotaUncheckedCreateWithoutDuenioInput>
  }

  export type MascotaCreateManyDuenioInputEnvelope = {
    data: MascotaCreateManyDuenioInput | MascotaCreateManyDuenioInput[]
    skipDuplicates?: boolean
  }

  export type AvistamientoCreateWithoutColaboradorInput = {
    fechaAvistamiento: Date | string
    latitud?: number | null
    longitud?: number | null
    direccionTexto?: string | null
    observaciones: string
    fotoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reporte: ReporteCreateNestedOneWithoutAvistamientosInput
  }

  export type AvistamientoUncheckedCreateWithoutColaboradorInput = {
    id?: number
    reporteId: number
    fechaAvistamiento: Date | string
    latitud?: number | null
    longitud?: number | null
    direccionTexto?: string | null
    observaciones: string
    fotoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvistamientoCreateOrConnectWithoutColaboradorInput = {
    where: AvistamientoWhereUniqueInput
    create: XOR<AvistamientoCreateWithoutColaboradorInput, AvistamientoUncheckedCreateWithoutColaboradorInput>
  }

  export type AvistamientoCreateManyColaboradorInputEnvelope = {
    data: AvistamientoCreateManyColaboradorInput | AvistamientoCreateManyColaboradorInput[]
    skipDuplicates?: boolean
  }

  export type ZonaUpsertWithoutUsuariosInput = {
    update: XOR<ZonaUpdateWithoutUsuariosInput, ZonaUncheckedUpdateWithoutUsuariosInput>
    create: XOR<ZonaCreateWithoutUsuariosInput, ZonaUncheckedCreateWithoutUsuariosInput>
    where?: ZonaWhereInput
  }

  export type ZonaUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: ZonaWhereInput
    data: XOR<ZonaUpdateWithoutUsuariosInput, ZonaUncheckedUpdateWithoutUsuariosInput>
  }

  export type ZonaUpdateWithoutUsuariosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    departamento?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reportes?: ReporteUpdateManyWithoutZonaNestedInput
  }

  export type ZonaUncheckedUpdateWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    departamento?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reportes?: ReporteUncheckedUpdateManyWithoutZonaNestedInput
  }

  export type MascotaUpsertWithWhereUniqueWithoutDuenioInput = {
    where: MascotaWhereUniqueInput
    update: XOR<MascotaUpdateWithoutDuenioInput, MascotaUncheckedUpdateWithoutDuenioInput>
    create: XOR<MascotaCreateWithoutDuenioInput, MascotaUncheckedCreateWithoutDuenioInput>
  }

  export type MascotaUpdateWithWhereUniqueWithoutDuenioInput = {
    where: MascotaWhereUniqueInput
    data: XOR<MascotaUpdateWithoutDuenioInput, MascotaUncheckedUpdateWithoutDuenioInput>
  }

  export type MascotaUpdateManyWithWhereWithoutDuenioInput = {
    where: MascotaScalarWhereInput
    data: XOR<MascotaUpdateManyMutationInput, MascotaUncheckedUpdateManyWithoutDuenioInput>
  }

  export type AvistamientoUpsertWithWhereUniqueWithoutColaboradorInput = {
    where: AvistamientoWhereUniqueInput
    update: XOR<AvistamientoUpdateWithoutColaboradorInput, AvistamientoUncheckedUpdateWithoutColaboradorInput>
    create: XOR<AvistamientoCreateWithoutColaboradorInput, AvistamientoUncheckedCreateWithoutColaboradorInput>
  }

  export type AvistamientoUpdateWithWhereUniqueWithoutColaboradorInput = {
    where: AvistamientoWhereUniqueInput
    data: XOR<AvistamientoUpdateWithoutColaboradorInput, AvistamientoUncheckedUpdateWithoutColaboradorInput>
  }

  export type AvistamientoUpdateManyWithWhereWithoutColaboradorInput = {
    where: AvistamientoScalarWhereInput
    data: XOR<AvistamientoUpdateManyMutationInput, AvistamientoUncheckedUpdateManyWithoutColaboradorInput>
  }

  export type AvistamientoScalarWhereInput = {
    AND?: AvistamientoScalarWhereInput | AvistamientoScalarWhereInput[]
    OR?: AvistamientoScalarWhereInput[]
    NOT?: AvistamientoScalarWhereInput | AvistamientoScalarWhereInput[]
    id?: IntFilter<"Avistamiento"> | number
    reporteId?: IntFilter<"Avistamiento"> | number
    colaboradorId?: IntFilter<"Avistamiento"> | number
    fechaAvistamiento?: DateTimeFilter<"Avistamiento"> | Date | string
    latitud?: FloatNullableFilter<"Avistamiento"> | number | null
    longitud?: FloatNullableFilter<"Avistamiento"> | number | null
    direccionTexto?: StringNullableFilter<"Avistamiento"> | string | null
    observaciones?: StringFilter<"Avistamiento"> | string
    fotoUrl?: StringNullableFilter<"Avistamiento"> | string | null
    createdAt?: DateTimeFilter<"Avistamiento"> | Date | string
    updatedAt?: DateTimeFilter<"Avistamiento"> | Date | string
  }

  export type EspecieCreateWithoutMascotasInput = {
    nombre: string
    descripcion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EspecieUncheckedCreateWithoutMascotasInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EspecieCreateOrConnectWithoutMascotasInput = {
    where: EspecieWhereUniqueInput
    create: XOR<EspecieCreateWithoutMascotasInput, EspecieUncheckedCreateWithoutMascotasInput>
  }

  export type UsuarioCreateWithoutMascotasInput = {
    nombres: string
    apellidos: string
    correo: string
    telefono: string
    contrasena: string
    rol?: $Enums.RolUsuario
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    zona: ZonaCreateNestedOneWithoutUsuariosInput
    avistamientos?: AvistamientoCreateNestedManyWithoutColaboradorInput
  }

  export type UsuarioUncheckedCreateWithoutMascotasInput = {
    id?: number
    nombres: string
    apellidos: string
    correo: string
    telefono: string
    contrasena: string
    rol?: $Enums.RolUsuario
    zonaId: number
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    avistamientos?: AvistamientoUncheckedCreateNestedManyWithoutColaboradorInput
  }

  export type UsuarioCreateOrConnectWithoutMascotasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutMascotasInput, UsuarioUncheckedCreateWithoutMascotasInput>
  }

  export type ReporteCreateWithoutMascotaInput = {
    descripcion: string
    fechaExtravio: Date | string
    latitud?: number | null
    longitud?: number | null
    direccionTexto?: string | null
    estado?: $Enums.EstadoReporte
    createdAt?: Date | string
    updatedAt?: Date | string
    zona: ZonaCreateNestedOneWithoutReportesInput
    perdida?: PerdidaCreateNestedOneWithoutReporteInput
    avistamientos?: AvistamientoCreateNestedManyWithoutReporteInput
  }

  export type ReporteUncheckedCreateWithoutMascotaInput = {
    id?: number
    zonaId: number
    descripcion: string
    fechaExtravio: Date | string
    latitud?: number | null
    longitud?: number | null
    direccionTexto?: string | null
    estado?: $Enums.EstadoReporte
    createdAt?: Date | string
    updatedAt?: Date | string
    perdida?: PerdidaUncheckedCreateNestedOneWithoutReporteInput
    avistamientos?: AvistamientoUncheckedCreateNestedManyWithoutReporteInput
  }

  export type ReporteCreateOrConnectWithoutMascotaInput = {
    where: ReporteWhereUniqueInput
    create: XOR<ReporteCreateWithoutMascotaInput, ReporteUncheckedCreateWithoutMascotaInput>
  }

  export type ReporteCreateManyMascotaInputEnvelope = {
    data: ReporteCreateManyMascotaInput | ReporteCreateManyMascotaInput[]
    skipDuplicates?: boolean
  }

  export type EspecieUpsertWithoutMascotasInput = {
    update: XOR<EspecieUpdateWithoutMascotasInput, EspecieUncheckedUpdateWithoutMascotasInput>
    create: XOR<EspecieCreateWithoutMascotasInput, EspecieUncheckedCreateWithoutMascotasInput>
    where?: EspecieWhereInput
  }

  export type EspecieUpdateToOneWithWhereWithoutMascotasInput = {
    where?: EspecieWhereInput
    data: XOR<EspecieUpdateWithoutMascotasInput, EspecieUncheckedUpdateWithoutMascotasInput>
  }

  export type EspecieUpdateWithoutMascotasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EspecieUncheckedUpdateWithoutMascotasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUpsertWithoutMascotasInput = {
    update: XOR<UsuarioUpdateWithoutMascotasInput, UsuarioUncheckedUpdateWithoutMascotasInput>
    create: XOR<UsuarioCreateWithoutMascotasInput, UsuarioUncheckedCreateWithoutMascotasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutMascotasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutMascotasInput, UsuarioUncheckedUpdateWithoutMascotasInput>
  }

  export type UsuarioUpdateWithoutMascotasInput = {
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zona?: ZonaUpdateOneRequiredWithoutUsuariosNestedInput
    avistamientos?: AvistamientoUpdateManyWithoutColaboradorNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutMascotasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario
    zonaId?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avistamientos?: AvistamientoUncheckedUpdateManyWithoutColaboradorNestedInput
  }

  export type ReporteUpsertWithWhereUniqueWithoutMascotaInput = {
    where: ReporteWhereUniqueInput
    update: XOR<ReporteUpdateWithoutMascotaInput, ReporteUncheckedUpdateWithoutMascotaInput>
    create: XOR<ReporteCreateWithoutMascotaInput, ReporteUncheckedCreateWithoutMascotaInput>
  }

  export type ReporteUpdateWithWhereUniqueWithoutMascotaInput = {
    where: ReporteWhereUniqueInput
    data: XOR<ReporteUpdateWithoutMascotaInput, ReporteUncheckedUpdateWithoutMascotaInput>
  }

  export type ReporteUpdateManyWithWhereWithoutMascotaInput = {
    where: ReporteScalarWhereInput
    data: XOR<ReporteUpdateManyMutationInput, ReporteUncheckedUpdateManyWithoutMascotaInput>
  }

  export type MascotaCreateWithoutReportesInput = {
    nombre: string
    raza?: string | null
    color: string
    edad?: number | null
    sexo: $Enums.SexoMascota
    descripcion?: string | null
    fotoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    especie: EspecieCreateNestedOneWithoutMascotasInput
    duenio: UsuarioCreateNestedOneWithoutMascotasInput
  }

  export type MascotaUncheckedCreateWithoutReportesInput = {
    id?: number
    nombre: string
    especieId: number
    raza?: string | null
    color: string
    edad?: number | null
    sexo: $Enums.SexoMascota
    descripcion?: string | null
    fotoUrl?: string | null
    duenioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MascotaCreateOrConnectWithoutReportesInput = {
    where: MascotaWhereUniqueInput
    create: XOR<MascotaCreateWithoutReportesInput, MascotaUncheckedCreateWithoutReportesInput>
  }

  export type ZonaCreateWithoutReportesInput = {
    nombre: string
    ciudad: string
    departamento: string
    descripcion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarios?: UsuarioCreateNestedManyWithoutZonaInput
  }

  export type ZonaUncheckedCreateWithoutReportesInput = {
    id?: number
    nombre: string
    ciudad: string
    departamento: string
    descripcion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutZonaInput
  }

  export type ZonaCreateOrConnectWithoutReportesInput = {
    where: ZonaWhereUniqueInput
    create: XOR<ZonaCreateWithoutReportesInput, ZonaUncheckedCreateWithoutReportesInput>
  }

  export type PerdidaCreateWithoutReporteInput = {
    fotoUrl?: string | null
    circunstancias?: string | null
    recompensa?: number | null
    contactoUrgente?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PerdidaUncheckedCreateWithoutReporteInput = {
    id?: number
    fotoUrl?: string | null
    circunstancias?: string | null
    recompensa?: number | null
    contactoUrgente?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PerdidaCreateOrConnectWithoutReporteInput = {
    where: PerdidaWhereUniqueInput
    create: XOR<PerdidaCreateWithoutReporteInput, PerdidaUncheckedCreateWithoutReporteInput>
  }

  export type AvistamientoCreateWithoutReporteInput = {
    fechaAvistamiento: Date | string
    latitud?: number | null
    longitud?: number | null
    direccionTexto?: string | null
    observaciones: string
    fotoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    colaborador: UsuarioCreateNestedOneWithoutAvistamientosInput
  }

  export type AvistamientoUncheckedCreateWithoutReporteInput = {
    id?: number
    colaboradorId: number
    fechaAvistamiento: Date | string
    latitud?: number | null
    longitud?: number | null
    direccionTexto?: string | null
    observaciones: string
    fotoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvistamientoCreateOrConnectWithoutReporteInput = {
    where: AvistamientoWhereUniqueInput
    create: XOR<AvistamientoCreateWithoutReporteInput, AvistamientoUncheckedCreateWithoutReporteInput>
  }

  export type AvistamientoCreateManyReporteInputEnvelope = {
    data: AvistamientoCreateManyReporteInput | AvistamientoCreateManyReporteInput[]
    skipDuplicates?: boolean
  }

  export type MascotaUpsertWithoutReportesInput = {
    update: XOR<MascotaUpdateWithoutReportesInput, MascotaUncheckedUpdateWithoutReportesInput>
    create: XOR<MascotaCreateWithoutReportesInput, MascotaUncheckedCreateWithoutReportesInput>
    where?: MascotaWhereInput
  }

  export type MascotaUpdateToOneWithWhereWithoutReportesInput = {
    where?: MascotaWhereInput
    data: XOR<MascotaUpdateWithoutReportesInput, MascotaUncheckedUpdateWithoutReportesInput>
  }

  export type MascotaUpdateWithoutReportesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    raza?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    edad?: NullableIntFieldUpdateOperationsInput | number | null
    sexo?: EnumSexoMascotaFieldUpdateOperationsInput | $Enums.SexoMascota
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    especie?: EspecieUpdateOneRequiredWithoutMascotasNestedInput
    duenio?: UsuarioUpdateOneRequiredWithoutMascotasNestedInput
  }

  export type MascotaUncheckedUpdateWithoutReportesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    especieId?: IntFieldUpdateOperationsInput | number
    raza?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    edad?: NullableIntFieldUpdateOperationsInput | number | null
    sexo?: EnumSexoMascotaFieldUpdateOperationsInput | $Enums.SexoMascota
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duenioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ZonaUpsertWithoutReportesInput = {
    update: XOR<ZonaUpdateWithoutReportesInput, ZonaUncheckedUpdateWithoutReportesInput>
    create: XOR<ZonaCreateWithoutReportesInput, ZonaUncheckedCreateWithoutReportesInput>
    where?: ZonaWhereInput
  }

  export type ZonaUpdateToOneWithWhereWithoutReportesInput = {
    where?: ZonaWhereInput
    data: XOR<ZonaUpdateWithoutReportesInput, ZonaUncheckedUpdateWithoutReportesInput>
  }

  export type ZonaUpdateWithoutReportesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    departamento?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UsuarioUpdateManyWithoutZonaNestedInput
  }

  export type ZonaUncheckedUpdateWithoutReportesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    departamento?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UsuarioUncheckedUpdateManyWithoutZonaNestedInput
  }

  export type PerdidaUpsertWithoutReporteInput = {
    update: XOR<PerdidaUpdateWithoutReporteInput, PerdidaUncheckedUpdateWithoutReporteInput>
    create: XOR<PerdidaCreateWithoutReporteInput, PerdidaUncheckedCreateWithoutReporteInput>
    where?: PerdidaWhereInput
  }

  export type PerdidaUpdateToOneWithWhereWithoutReporteInput = {
    where?: PerdidaWhereInput
    data: XOR<PerdidaUpdateWithoutReporteInput, PerdidaUncheckedUpdateWithoutReporteInput>
  }

  export type PerdidaUpdateWithoutReporteInput = {
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    circunstancias?: NullableStringFieldUpdateOperationsInput | string | null
    recompensa?: NullableFloatFieldUpdateOperationsInput | number | null
    contactoUrgente?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerdidaUncheckedUpdateWithoutReporteInput = {
    id?: IntFieldUpdateOperationsInput | number
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    circunstancias?: NullableStringFieldUpdateOperationsInput | string | null
    recompensa?: NullableFloatFieldUpdateOperationsInput | number | null
    contactoUrgente?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvistamientoUpsertWithWhereUniqueWithoutReporteInput = {
    where: AvistamientoWhereUniqueInput
    update: XOR<AvistamientoUpdateWithoutReporteInput, AvistamientoUncheckedUpdateWithoutReporteInput>
    create: XOR<AvistamientoCreateWithoutReporteInput, AvistamientoUncheckedCreateWithoutReporteInput>
  }

  export type AvistamientoUpdateWithWhereUniqueWithoutReporteInput = {
    where: AvistamientoWhereUniqueInput
    data: XOR<AvistamientoUpdateWithoutReporteInput, AvistamientoUncheckedUpdateWithoutReporteInput>
  }

  export type AvistamientoUpdateManyWithWhereWithoutReporteInput = {
    where: AvistamientoScalarWhereInput
    data: XOR<AvistamientoUpdateManyMutationInput, AvistamientoUncheckedUpdateManyWithoutReporteInput>
  }

  export type ReporteCreateWithoutPerdidaInput = {
    descripcion: string
    fechaExtravio: Date | string
    latitud?: number | null
    longitud?: number | null
    direccionTexto?: string | null
    estado?: $Enums.EstadoReporte
    createdAt?: Date | string
    updatedAt?: Date | string
    mascota: MascotaCreateNestedOneWithoutReportesInput
    zona: ZonaCreateNestedOneWithoutReportesInput
    avistamientos?: AvistamientoCreateNestedManyWithoutReporteInput
  }

  export type ReporteUncheckedCreateWithoutPerdidaInput = {
    id?: number
    mascotaId: number
    zonaId: number
    descripcion: string
    fechaExtravio: Date | string
    latitud?: number | null
    longitud?: number | null
    direccionTexto?: string | null
    estado?: $Enums.EstadoReporte
    createdAt?: Date | string
    updatedAt?: Date | string
    avistamientos?: AvistamientoUncheckedCreateNestedManyWithoutReporteInput
  }

  export type ReporteCreateOrConnectWithoutPerdidaInput = {
    where: ReporteWhereUniqueInput
    create: XOR<ReporteCreateWithoutPerdidaInput, ReporteUncheckedCreateWithoutPerdidaInput>
  }

  export type ReporteUpsertWithoutPerdidaInput = {
    update: XOR<ReporteUpdateWithoutPerdidaInput, ReporteUncheckedUpdateWithoutPerdidaInput>
    create: XOR<ReporteCreateWithoutPerdidaInput, ReporteUncheckedCreateWithoutPerdidaInput>
    where?: ReporteWhereInput
  }

  export type ReporteUpdateToOneWithWhereWithoutPerdidaInput = {
    where?: ReporteWhereInput
    data: XOR<ReporteUpdateWithoutPerdidaInput, ReporteUncheckedUpdateWithoutPerdidaInput>
  }

  export type ReporteUpdateWithoutPerdidaInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
    fechaExtravio?: DateTimeFieldUpdateOperationsInput | Date | string
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    direccionTexto?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoReporteFieldUpdateOperationsInput | $Enums.EstadoReporte
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mascota?: MascotaUpdateOneRequiredWithoutReportesNestedInput
    zona?: ZonaUpdateOneRequiredWithoutReportesNestedInput
    avistamientos?: AvistamientoUpdateManyWithoutReporteNestedInput
  }

  export type ReporteUncheckedUpdateWithoutPerdidaInput = {
    id?: IntFieldUpdateOperationsInput | number
    mascotaId?: IntFieldUpdateOperationsInput | number
    zonaId?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    fechaExtravio?: DateTimeFieldUpdateOperationsInput | Date | string
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    direccionTexto?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoReporteFieldUpdateOperationsInput | $Enums.EstadoReporte
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avistamientos?: AvistamientoUncheckedUpdateManyWithoutReporteNestedInput
  }

  export type ReporteCreateWithoutAvistamientosInput = {
    descripcion: string
    fechaExtravio: Date | string
    latitud?: number | null
    longitud?: number | null
    direccionTexto?: string | null
    estado?: $Enums.EstadoReporte
    createdAt?: Date | string
    updatedAt?: Date | string
    mascota: MascotaCreateNestedOneWithoutReportesInput
    zona: ZonaCreateNestedOneWithoutReportesInput
    perdida?: PerdidaCreateNestedOneWithoutReporteInput
  }

  export type ReporteUncheckedCreateWithoutAvistamientosInput = {
    id?: number
    mascotaId: number
    zonaId: number
    descripcion: string
    fechaExtravio: Date | string
    latitud?: number | null
    longitud?: number | null
    direccionTexto?: string | null
    estado?: $Enums.EstadoReporte
    createdAt?: Date | string
    updatedAt?: Date | string
    perdida?: PerdidaUncheckedCreateNestedOneWithoutReporteInput
  }

  export type ReporteCreateOrConnectWithoutAvistamientosInput = {
    where: ReporteWhereUniqueInput
    create: XOR<ReporteCreateWithoutAvistamientosInput, ReporteUncheckedCreateWithoutAvistamientosInput>
  }

  export type UsuarioCreateWithoutAvistamientosInput = {
    nombres: string
    apellidos: string
    correo: string
    telefono: string
    contrasena: string
    rol?: $Enums.RolUsuario
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    zona: ZonaCreateNestedOneWithoutUsuariosInput
    mascotas?: MascotaCreateNestedManyWithoutDuenioInput
  }

  export type UsuarioUncheckedCreateWithoutAvistamientosInput = {
    id?: number
    nombres: string
    apellidos: string
    correo: string
    telefono: string
    contrasena: string
    rol?: $Enums.RolUsuario
    zonaId: number
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    mascotas?: MascotaUncheckedCreateNestedManyWithoutDuenioInput
  }

  export type UsuarioCreateOrConnectWithoutAvistamientosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutAvistamientosInput, UsuarioUncheckedCreateWithoutAvistamientosInput>
  }

  export type ReporteUpsertWithoutAvistamientosInput = {
    update: XOR<ReporteUpdateWithoutAvistamientosInput, ReporteUncheckedUpdateWithoutAvistamientosInput>
    create: XOR<ReporteCreateWithoutAvistamientosInput, ReporteUncheckedCreateWithoutAvistamientosInput>
    where?: ReporteWhereInput
  }

  export type ReporteUpdateToOneWithWhereWithoutAvistamientosInput = {
    where?: ReporteWhereInput
    data: XOR<ReporteUpdateWithoutAvistamientosInput, ReporteUncheckedUpdateWithoutAvistamientosInput>
  }

  export type ReporteUpdateWithoutAvistamientosInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
    fechaExtravio?: DateTimeFieldUpdateOperationsInput | Date | string
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    direccionTexto?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoReporteFieldUpdateOperationsInput | $Enums.EstadoReporte
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mascota?: MascotaUpdateOneRequiredWithoutReportesNestedInput
    zona?: ZonaUpdateOneRequiredWithoutReportesNestedInput
    perdida?: PerdidaUpdateOneWithoutReporteNestedInput
  }

  export type ReporteUncheckedUpdateWithoutAvistamientosInput = {
    id?: IntFieldUpdateOperationsInput | number
    mascotaId?: IntFieldUpdateOperationsInput | number
    zonaId?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    fechaExtravio?: DateTimeFieldUpdateOperationsInput | Date | string
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    direccionTexto?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoReporteFieldUpdateOperationsInput | $Enums.EstadoReporte
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    perdida?: PerdidaUncheckedUpdateOneWithoutReporteNestedInput
  }

  export type UsuarioUpsertWithoutAvistamientosInput = {
    update: XOR<UsuarioUpdateWithoutAvistamientosInput, UsuarioUncheckedUpdateWithoutAvistamientosInput>
    create: XOR<UsuarioCreateWithoutAvistamientosInput, UsuarioUncheckedCreateWithoutAvistamientosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutAvistamientosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutAvistamientosInput, UsuarioUncheckedUpdateWithoutAvistamientosInput>
  }

  export type UsuarioUpdateWithoutAvistamientosInput = {
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zona?: ZonaUpdateOneRequiredWithoutUsuariosNestedInput
    mascotas?: MascotaUpdateManyWithoutDuenioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutAvistamientosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario
    zonaId?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mascotas?: MascotaUncheckedUpdateManyWithoutDuenioNestedInput
  }

  export type UsuarioCreateManyZonaInput = {
    id?: number
    nombres: string
    apellidos: string
    correo: string
    telefono: string
    contrasena: string
    rol?: $Enums.RolUsuario
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReporteCreateManyZonaInput = {
    id?: number
    mascotaId: number
    descripcion: string
    fechaExtravio: Date | string
    latitud?: number | null
    longitud?: number | null
    direccionTexto?: string | null
    estado?: $Enums.EstadoReporte
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuarioUpdateWithoutZonaInput = {
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mascotas?: MascotaUpdateManyWithoutDuenioNestedInput
    avistamientos?: AvistamientoUpdateManyWithoutColaboradorNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutZonaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mascotas?: MascotaUncheckedUpdateManyWithoutDuenioNestedInput
    avistamientos?: AvistamientoUncheckedUpdateManyWithoutColaboradorNestedInput
  }

  export type UsuarioUncheckedUpdateManyWithoutZonaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReporteUpdateWithoutZonaInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
    fechaExtravio?: DateTimeFieldUpdateOperationsInput | Date | string
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    direccionTexto?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoReporteFieldUpdateOperationsInput | $Enums.EstadoReporte
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mascota?: MascotaUpdateOneRequiredWithoutReportesNestedInput
    perdida?: PerdidaUpdateOneWithoutReporteNestedInput
    avistamientos?: AvistamientoUpdateManyWithoutReporteNestedInput
  }

  export type ReporteUncheckedUpdateWithoutZonaInput = {
    id?: IntFieldUpdateOperationsInput | number
    mascotaId?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    fechaExtravio?: DateTimeFieldUpdateOperationsInput | Date | string
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    direccionTexto?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoReporteFieldUpdateOperationsInput | $Enums.EstadoReporte
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    perdida?: PerdidaUncheckedUpdateOneWithoutReporteNestedInput
    avistamientos?: AvistamientoUncheckedUpdateManyWithoutReporteNestedInput
  }

  export type ReporteUncheckedUpdateManyWithoutZonaInput = {
    id?: IntFieldUpdateOperationsInput | number
    mascotaId?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    fechaExtravio?: DateTimeFieldUpdateOperationsInput | Date | string
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    direccionTexto?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoReporteFieldUpdateOperationsInput | $Enums.EstadoReporte
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MascotaCreateManyEspecieInput = {
    id?: number
    nombre: string
    raza?: string | null
    color: string
    edad?: number | null
    sexo: $Enums.SexoMascota
    descripcion?: string | null
    fotoUrl?: string | null
    duenioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MascotaUpdateWithoutEspecieInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    raza?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    edad?: NullableIntFieldUpdateOperationsInput | number | null
    sexo?: EnumSexoMascotaFieldUpdateOperationsInput | $Enums.SexoMascota
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duenio?: UsuarioUpdateOneRequiredWithoutMascotasNestedInput
    reportes?: ReporteUpdateManyWithoutMascotaNestedInput
  }

  export type MascotaUncheckedUpdateWithoutEspecieInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    raza?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    edad?: NullableIntFieldUpdateOperationsInput | number | null
    sexo?: EnumSexoMascotaFieldUpdateOperationsInput | $Enums.SexoMascota
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duenioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reportes?: ReporteUncheckedUpdateManyWithoutMascotaNestedInput
  }

  export type MascotaUncheckedUpdateManyWithoutEspecieInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    raza?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    edad?: NullableIntFieldUpdateOperationsInput | number | null
    sexo?: EnumSexoMascotaFieldUpdateOperationsInput | $Enums.SexoMascota
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duenioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MascotaCreateManyDuenioInput = {
    id?: number
    nombre: string
    especieId: number
    raza?: string | null
    color: string
    edad?: number | null
    sexo: $Enums.SexoMascota
    descripcion?: string | null
    fotoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvistamientoCreateManyColaboradorInput = {
    id?: number
    reporteId: number
    fechaAvistamiento: Date | string
    latitud?: number | null
    longitud?: number | null
    direccionTexto?: string | null
    observaciones: string
    fotoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MascotaUpdateWithoutDuenioInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    raza?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    edad?: NullableIntFieldUpdateOperationsInput | number | null
    sexo?: EnumSexoMascotaFieldUpdateOperationsInput | $Enums.SexoMascota
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    especie?: EspecieUpdateOneRequiredWithoutMascotasNestedInput
    reportes?: ReporteUpdateManyWithoutMascotaNestedInput
  }

  export type MascotaUncheckedUpdateWithoutDuenioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    especieId?: IntFieldUpdateOperationsInput | number
    raza?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    edad?: NullableIntFieldUpdateOperationsInput | number | null
    sexo?: EnumSexoMascotaFieldUpdateOperationsInput | $Enums.SexoMascota
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reportes?: ReporteUncheckedUpdateManyWithoutMascotaNestedInput
  }

  export type MascotaUncheckedUpdateManyWithoutDuenioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    especieId?: IntFieldUpdateOperationsInput | number
    raza?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    edad?: NullableIntFieldUpdateOperationsInput | number | null
    sexo?: EnumSexoMascotaFieldUpdateOperationsInput | $Enums.SexoMascota
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvistamientoUpdateWithoutColaboradorInput = {
    fechaAvistamiento?: DateTimeFieldUpdateOperationsInput | Date | string
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    direccionTexto?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: StringFieldUpdateOperationsInput | string
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reporte?: ReporteUpdateOneRequiredWithoutAvistamientosNestedInput
  }

  export type AvistamientoUncheckedUpdateWithoutColaboradorInput = {
    id?: IntFieldUpdateOperationsInput | number
    reporteId?: IntFieldUpdateOperationsInput | number
    fechaAvistamiento?: DateTimeFieldUpdateOperationsInput | Date | string
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    direccionTexto?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: StringFieldUpdateOperationsInput | string
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvistamientoUncheckedUpdateManyWithoutColaboradorInput = {
    id?: IntFieldUpdateOperationsInput | number
    reporteId?: IntFieldUpdateOperationsInput | number
    fechaAvistamiento?: DateTimeFieldUpdateOperationsInput | Date | string
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    direccionTexto?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: StringFieldUpdateOperationsInput | string
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReporteCreateManyMascotaInput = {
    id?: number
    zonaId: number
    descripcion: string
    fechaExtravio: Date | string
    latitud?: number | null
    longitud?: number | null
    direccionTexto?: string | null
    estado?: $Enums.EstadoReporte
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReporteUpdateWithoutMascotaInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
    fechaExtravio?: DateTimeFieldUpdateOperationsInput | Date | string
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    direccionTexto?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoReporteFieldUpdateOperationsInput | $Enums.EstadoReporte
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zona?: ZonaUpdateOneRequiredWithoutReportesNestedInput
    perdida?: PerdidaUpdateOneWithoutReporteNestedInput
    avistamientos?: AvistamientoUpdateManyWithoutReporteNestedInput
  }

  export type ReporteUncheckedUpdateWithoutMascotaInput = {
    id?: IntFieldUpdateOperationsInput | number
    zonaId?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    fechaExtravio?: DateTimeFieldUpdateOperationsInput | Date | string
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    direccionTexto?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoReporteFieldUpdateOperationsInput | $Enums.EstadoReporte
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    perdida?: PerdidaUncheckedUpdateOneWithoutReporteNestedInput
    avistamientos?: AvistamientoUncheckedUpdateManyWithoutReporteNestedInput
  }

  export type ReporteUncheckedUpdateManyWithoutMascotaInput = {
    id?: IntFieldUpdateOperationsInput | number
    zonaId?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    fechaExtravio?: DateTimeFieldUpdateOperationsInput | Date | string
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    direccionTexto?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoReporteFieldUpdateOperationsInput | $Enums.EstadoReporte
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvistamientoCreateManyReporteInput = {
    id?: number
    colaboradorId: number
    fechaAvistamiento: Date | string
    latitud?: number | null
    longitud?: number | null
    direccionTexto?: string | null
    observaciones: string
    fotoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvistamientoUpdateWithoutReporteInput = {
    fechaAvistamiento?: DateTimeFieldUpdateOperationsInput | Date | string
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    direccionTexto?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: StringFieldUpdateOperationsInput | string
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    colaborador?: UsuarioUpdateOneRequiredWithoutAvistamientosNestedInput
  }

  export type AvistamientoUncheckedUpdateWithoutReporteInput = {
    id?: IntFieldUpdateOperationsInput | number
    colaboradorId?: IntFieldUpdateOperationsInput | number
    fechaAvistamiento?: DateTimeFieldUpdateOperationsInput | Date | string
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    direccionTexto?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: StringFieldUpdateOperationsInput | string
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvistamientoUncheckedUpdateManyWithoutReporteInput = {
    id?: IntFieldUpdateOperationsInput | number
    colaboradorId?: IntFieldUpdateOperationsInput | number
    fechaAvistamiento?: DateTimeFieldUpdateOperationsInput | Date | string
    latitud?: NullableFloatFieldUpdateOperationsInput | number | null
    longitud?: NullableFloatFieldUpdateOperationsInput | number | null
    direccionTexto?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: StringFieldUpdateOperationsInput | string
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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