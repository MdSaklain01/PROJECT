variable "instance_name" {
  description = "Name of the EC2 instance"
  type        = string
  default     = "web-server"
}

variable "ami" {
  description = "AMI ID for EC2"
  type        = string
  default     = "ami-0ecb62995f68bb549" # Ubuntu Server
}

variable "instance_type" {
  description = "EC2 instance type"
  type        = string
  default     = "t3.micro"
}

variable "env" {
  description = "Environment name"
  type        = string
  default     = "dev"
}
