import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  RadioField,
  DatetimeLocalField,
  Submit,
} from '@redwoodjs/forms'


const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}


const MaterialForm = (props) => {
  const onSubmit = (data) => {

  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.material?.id)
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
            defaultValue={props.material?.name}
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
            defaultValue={props.material?.type}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="type" className="rw-field-error" />

        <Label
          name="quantity"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Quantity
        </Label>
        
          <NumberField
            name="quantity"
            defaultValue={props.material?.quantity}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="quantity" className="rw-field-error" />

        <Label
          name="unit"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Unit
        </Label>
        
          <TextField
            name="unit"
            defaultValue={props.material?.unit}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="unit" className="rw-field-error" />

        <Label
          name="status"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Status
        </Label>
        
          
          
        <div className="rw-check-radio-items">
          <RadioField
            id="material-status-0"
            name="status"
            defaultValue="TO_ORDER"
            defaultChecked={props.material?.status?.includes('TO_ORDER')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            To Order
          </div>
        </div>
          
        <div className="rw-check-radio-items">
          <RadioField
            id="material-status-1"
            name="status"
            defaultValue="DELIVERING"
            defaultChecked={props.material?.status?.includes('DELIVERING')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Delivering
          </div>
        </div>
          
        <div className="rw-check-radio-items">
          <RadioField
            id="material-status-2"
            name="status"
            defaultValue="DELIVERED"
            defaultChecked={props.material?.status?.includes('DELIVERED')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Delivered
          </div>
        </div>
          
        

        <FieldError name="status" className="rw-field-error" />

        <Label
          name="price"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Price
        </Label>
        
          <NumberField
            name="price"
            defaultValue={props.material?.price}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="price" className="rw-field-error" />

        <Label
          name="expected_delivery_date"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Expected delivery date
        </Label>
        
          <DatetimeLocalField
            name="expected_delivery_date"
            defaultValue={formatDatetime(props.material?.expected_delivery_date)}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="expected_delivery_date" className="rw-field-error" />

        <Label
          name="delivery_date"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Delivery date
        </Label>
        
          <DatetimeLocalField
            name="delivery_date"
            defaultValue={formatDatetime(props.material?.delivery_date)}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="delivery_date" className="rw-field-error" />

        <Label
          name="taskId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Task id
        </Label>
        
          <NumberField
            name="taskId"
            defaultValue={props.material?.taskId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="taskId" className="rw-field-error" />

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

export default MaterialForm
