export enum RabbitMQ {
  StudentQueue = 'students',
  EncuestaQueue = 'encuestas',
}

export enum StudentMsg {
  CREATE = 'CREATE_STUDENT',
  FIND_ALL = 'FIND_STUDENTS',
  FIND_ONE = 'FIND_STUDENT',
  UPDATE = 'UPDATE_STUDENT',
  DELETE = 'DELETE_STUDENT',
}

export enum EncuestaMsg {
  CREATE = 'CREATE_ENCUESTA',
  FIND_ALL = 'FIND_ENCUESTAS',
  FIND_ONE = 'FIND_ENCUESTA',
  UPDATE = 'UPDATE_ENCUESTA',
  DELETE = 'DELETE_ENCUESTA',
}
