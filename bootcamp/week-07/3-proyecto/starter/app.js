// Identity & Access Toolkit - Starter
// Tres módulos: UserRegistry, SessionManager, PermissionsManager

// === UserRegistry ===
export const createUserRegistry = () => {
  // TODO: Map for id -> user, Set for emails
  // Methods: register(user), getUser(id), findByEmail(email), listAll(), remove(id)
};

// === SessionManager ===
export const createSessionManager = () => {
  // TODO: WeakMap for userObj -> metadata
  // Methods: startSession(userObj, metadata), getSession(userObj), endSession(userObj), clearAll()
};

// === PermissionsManager ===
export const createPermissionsManager = () => {
  // TODO: Map for userId -> Set(permissions)
  // Methods: grant(userId, permission), revoke(userId, permission), hasPermission(userId, permission), listPermissions(userId)
};

// === Integration Flow ===
if (process.argv[2] === 'demo') {
  console.log('Running demo...');
  // TODO: wire up demo flow (register, session, permissions)
}
