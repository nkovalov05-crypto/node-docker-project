variable "aws_region" {
  type        = string
  description = "AWS Region"
  default     = "eu-north-1"
}

variable "ami_id" {
  type        = string
  description = "Ubuntu AMI ID для Стокгольма"
  default     = "ami-0705384c0b33c194c" # Ubuntu 22.04 LTS для eu-north-1
}

variable "instance_type" {
  type        = string
  description = "EC2 Instance Type"
  default     = "t3.micro"
}