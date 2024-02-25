export interface MessageInfo {
    type: 'PropertyDetails' | 'Comments' | 'BorrowerForm' | 'FileUpload';
    data: any;
}