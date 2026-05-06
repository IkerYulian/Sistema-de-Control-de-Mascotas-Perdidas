
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/wasm.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.ZonaScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  ciudad: 'ciudad',
  departamento: 'departamento',
  descripcion: 'descripcion',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.EspecieScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  descripcion: 'descripcion',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.UsuarioScalarFieldEnum = {
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

exports.Prisma.MascotaScalarFieldEnum = {
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

exports.Prisma.ReporteScalarFieldEnum = {
  id: 'id',
  mascotaId: 'mascotaId',
  zonaId: 'zonaId',
  descripcion: 'descripcion',
  telefono: 'telefono',
  fechaExtravio: 'fechaExtravio',
  latitud: 'latitud',
  longitud: 'longitud',
  direccionTexto: 'direccionTexto',
  estado: 'estado',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PerdidaScalarFieldEnum = {
  id: 'id',
  reporteId: 'reporteId',
  fotoUrl: 'fotoUrl',
  circunstancias: 'circunstancias',
  recompensa: 'recompensa',
  contactoUrgente: 'contactoUrgente',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AvistamientoScalarFieldEnum = {
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

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.RolUsuario = exports.$Enums.RolUsuario = {
  DUENO: 'DUENO',
  COLABORADOR: 'COLABORADOR'
};

exports.SexoMascota = exports.$Enums.SexoMascota = {
  MACHO: 'MACHO',
  HEMBRA: 'HEMBRA',
  DESCONOCIDO: 'DESCONOCIDO'
};

exports.EstadoReporte = exports.$Enums.EstadoReporte = {
  ACTIVO: 'ACTIVO',
  RESUELTO: 'RESUELTO',
  CERRADO: 'CERRADO'
};

exports.Prisma.ModelName = {
  Zona: 'Zona',
  Especie: 'Especie',
  Usuario: 'Usuario',
  Mascota: 'Mascota',
  Reporte: 'Reporte',
  Perdida: 'Perdida',
  Avistamiento: 'Avistamiento'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\Administrador\\Desktop\\Sistema-de-Control-de-Mascotas-Perdidas\\backend\\generated\\prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [
      "driverAdapters"
    ],
    "sourceFilePath": "C:\\Users\\Administrador\\Desktop\\Sistema-de-Control-de-Mascotas-Perdidas\\backend\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "5.22.0",
  "engineVersion": "605197351a3c8bdd595af2d2a9bc3025bca48ea2",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "// ============================================================\n// Prisma Schema — Sistema de Control de Mascotas Perdidas\n// ============================================================\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\ngenerator client {\n  provider        = \"prisma-client-js\"\n  output          = \"../generated/prisma\"\n  previewFeatures = [\"driverAdapters\"]\n}\n\n// ============================================================\n// ENTIDAD: Zona\n// ============================================================\nmodel Zona {\n  id           Int      @id @default(autoincrement())\n  nombre       String   @unique\n  ciudad       String\n  departamento String\n  descripcion  String?\n  createdAt    DateTime @default(now())\n  updatedAt    DateTime @updatedAt\n\n  usuarios Usuario[]\n  reportes Reporte[]\n\n  @@map(\"zonas\")\n}\n\n// ============================================================\n// ENTIDAD: Especie\n// ============================================================\nmodel Especie {\n  id          Int      @id @default(autoincrement())\n  nombre      String   @unique // Ej: Perro, Gato, Conejo\n  descripcion String?\n  createdAt   DateTime @default(now())\n  updatedAt   DateTime @updatedAt\n\n  mascotas Mascota[]\n\n  @@map(\"especies\")\n}\n\n// ============================================================\n// ENTIDAD: Usuario\n// Cubre CU-01: Registrar usuario (dueño o colaborador)\n// ============================================================\nmodel Usuario {\n  id         Int        @id @default(autoincrement())\n  nombres    String\n  apellidos  String\n  correo     String     @unique\n  telefono   String\n  contrasena String\n  rol        RolUsuario @default(COLABORADOR)\n  zonaId     Int\n  activo     Boolean    @default(true)\n  createdAt  DateTime   @default(now())\n  updatedAt  DateTime   @updatedAt\n\n  zona          Zona           @relation(fields: [zonaId], references: [id])\n  mascotas      Mascota[]\n  avistamientos Avistamiento[]\n\n  @@map(\"usuarios\")\n}\n\nenum RolUsuario {\n  DUENO\n  COLABORADOR\n}\n\n// ============================================================\n// ENTIDAD: Mascota\n// Información base de la mascota del dueño\n// ============================================================\nmodel Mascota {\n  id          Int         @id @default(autoincrement())\n  nombre      String\n  especieId   Int\n  raza        String?\n  color       String\n  edad        Int? // En meses\n  sexo        SexoMascota\n  descripcion String?\n  fotoUrl     String?\n  duenioId    Int\n  createdAt   DateTime    @default(now())\n  updatedAt   DateTime    @updatedAt\n\n  especie  Especie   @relation(fields: [especieId], references: [id])\n  duenio   Usuario   @relation(fields: [duenioId], references: [id])\n  reportes Reporte[]\n\n  @@map(\"mascotas\")\n}\n\nenum SexoMascota {\n  MACHO\n  HEMBRA\n  DESCONOCIDO\n}\n\n// ============================================================\n// ENTIDAD: Reporte\n// Cubre CU-02: Crear reporte de mascota perdida\n// Cubre CU-04: Buscar reportes activos\n// Cubre CU-05: Marcar reporte como resuelto\n// ============================================================\nmodel Reporte {\n  id             Int           @id @default(autoincrement())\n  mascotaId      Int\n  zonaId         Int\n  descripcion    String\n  telefono       String?\n  fechaExtravio  DateTime\n  latitud        Float?\n  longitud       Float?\n  direccionTexto String?\n  estado         EstadoReporte @default(ACTIVO)\n  createdAt      DateTime      @default(now())\n  updatedAt      DateTime      @updatedAt\n\n  mascota       Mascota        @relation(fields: [mascotaId], references: [id])\n  zona          Zona           @relation(fields: [zonaId], references: [id])\n  perdida       Perdida?\n  avistamientos Avistamiento[]\n\n  @@map(\"reportes\")\n}\n\nenum EstadoReporte {\n  ACTIVO\n  RESUELTO\n  CERRADO\n}\n\n// ============================================================\n// ENTIDAD: Perdida\n// Detalle extendido del evento de pérdida (CU-02)\n// Relación 1-a-1 con Reporte\n// ============================================================\nmodel Perdida {\n  id              Int      @id @default(autoincrement())\n  reporteId       Int      @unique\n  fotoUrl         String?\n  circunstancias  String? // Cómo se perdió\n  recompensa      Float?\n  contactoUrgente String? // Teléfono adicional de emergencia\n  createdAt       DateTime @default(now())\n  updatedAt       DateTime @updatedAt\n\n  reporte Reporte @relation(fields: [reporteId], references: [id])\n\n  @@map(\"perdidas\")\n}\n\n// ============================================================\n// ENTIDAD: Avistamiento\n// Cubre CU-03: Registrar avistamiento de mascota\n// ============================================================\nmodel Avistamiento {\n  id                Int      @id @default(autoincrement())\n  reporteId         Int\n  colaboradorId     Int\n  fechaAvistamiento DateTime\n  latitud           Float?\n  longitud          Float?\n  direccionTexto    String?\n  observaciones     String\n  fotoUrl           String?\n  createdAt         DateTime @default(now())\n  updatedAt         DateTime @updatedAt\n\n  reporte     Reporte @relation(fields: [reporteId], references: [id])\n  colaborador Usuario @relation(fields: [colaboradorId], references: [id])\n\n  @@map(\"avistamientos\")\n}\n",
  "inlineSchemaHash": "0c48a27796e56bb6ed6c75ef5cbb2551dd54f659206ba6f23cb77f0d87940a04",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Zona\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"nombre\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"ciudad\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"departamento\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"descripcion\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"usuarios\",\"kind\":\"object\",\"type\":\"Usuario\",\"relationName\":\"UsuarioToZona\"},{\"name\":\"reportes\",\"kind\":\"object\",\"type\":\"Reporte\",\"relationName\":\"ReporteToZona\"}],\"dbName\":\"zonas\"},\"Especie\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"nombre\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"descripcion\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"mascotas\",\"kind\":\"object\",\"type\":\"Mascota\",\"relationName\":\"EspecieToMascota\"}],\"dbName\":\"especies\"},\"Usuario\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"nombres\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"apellidos\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"correo\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"telefono\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"contrasena\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"rol\",\"kind\":\"enum\",\"type\":\"RolUsuario\"},{\"name\":\"zonaId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"activo\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"zona\",\"kind\":\"object\",\"type\":\"Zona\",\"relationName\":\"UsuarioToZona\"},{\"name\":\"mascotas\",\"kind\":\"object\",\"type\":\"Mascota\",\"relationName\":\"MascotaToUsuario\"},{\"name\":\"avistamientos\",\"kind\":\"object\",\"type\":\"Avistamiento\",\"relationName\":\"AvistamientoToUsuario\"}],\"dbName\":\"usuarios\"},\"Mascota\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"nombre\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"especieId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"raza\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"color\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"edad\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"sexo\",\"kind\":\"enum\",\"type\":\"SexoMascota\"},{\"name\":\"descripcion\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"fotoUrl\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"duenioId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"especie\",\"kind\":\"object\",\"type\":\"Especie\",\"relationName\":\"EspecieToMascota\"},{\"name\":\"duenio\",\"kind\":\"object\",\"type\":\"Usuario\",\"relationName\":\"MascotaToUsuario\"},{\"name\":\"reportes\",\"kind\":\"object\",\"type\":\"Reporte\",\"relationName\":\"MascotaToReporte\"}],\"dbName\":\"mascotas\"},\"Reporte\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"mascotaId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"zonaId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"descripcion\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"telefono\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"fechaExtravio\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"latitud\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"longitud\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"direccionTexto\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"estado\",\"kind\":\"enum\",\"type\":\"EstadoReporte\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"mascota\",\"kind\":\"object\",\"type\":\"Mascota\",\"relationName\":\"MascotaToReporte\"},{\"name\":\"zona\",\"kind\":\"object\",\"type\":\"Zona\",\"relationName\":\"ReporteToZona\"},{\"name\":\"perdida\",\"kind\":\"object\",\"type\":\"Perdida\",\"relationName\":\"PerdidaToReporte\"},{\"name\":\"avistamientos\",\"kind\":\"object\",\"type\":\"Avistamiento\",\"relationName\":\"AvistamientoToReporte\"}],\"dbName\":\"reportes\"},\"Perdida\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"reporteId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"fotoUrl\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"circunstancias\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"recompensa\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"contactoUrgente\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"reporte\",\"kind\":\"object\",\"type\":\"Reporte\",\"relationName\":\"PerdidaToReporte\"}],\"dbName\":\"perdidas\"},\"Avistamiento\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"reporteId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"colaboradorId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"fechaAvistamiento\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"latitud\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"longitud\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"direccionTexto\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"observaciones\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"fotoUrl\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"reporte\",\"kind\":\"object\",\"type\":\"Reporte\",\"relationName\":\"AvistamientoToReporte\"},{\"name\":\"colaborador\",\"kind\":\"object\",\"type\":\"Usuario\",\"relationName\":\"AvistamientoToUsuario\"}],\"dbName\":\"avistamientos\"}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = {
  getRuntime: () => require('./query_engine_bg.js'),
  getQueryEngineWasmModule: async () => {
    const loader = (await import('#wasm-engine-loader')).default
    const engine = (await loader).default
    return engine 
  }
}

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

