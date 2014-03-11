require './stream'
require 'sinatra'
require 'rubygems'

run Sinatra::Application.default_options.merge!(:sessions => true)