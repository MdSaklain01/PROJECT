terraform {
  backend "s3" {
    bucket         = "node-devops-terraform-state-saklain"
    key            = "html-site/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "terraform-locks"
  }
}
