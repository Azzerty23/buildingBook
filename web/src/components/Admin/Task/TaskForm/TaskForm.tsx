import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  DatetimeLocalField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'


const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}


const TaskForm = (props) => {
  const onSubmit = (data) => {

  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.task?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
      
        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>
        
          <TextField
            name="name"
            defaultValue={props.task?.name}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="type"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Type
        </Label>
        
          <TextField
            name="type"
            defaultValue={props.task?.type}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="type" className="rw-field-error" />

        <Label
          name="start_date"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Start date
        </Label>
        
          <DatetimeLocalField
            name="start_date"
            defaultValue={formatDatetime(props.task?.start_date)}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="start_date" className="rw-field-error" />

        <Label
          name="end_date"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          End date
        </Label>
        
          <DatetimeLocalField
            name="end_date"
            defaultValue={formatDatetime(props.task?.end_date)}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="end_date" className="rw-field-error" />

        <Label
          name="successorId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Successor id
        </Label>
        
          <NumberField
            name="successorId"
            defaultValue={props.task?.successorId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="successorId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default TaskForm
